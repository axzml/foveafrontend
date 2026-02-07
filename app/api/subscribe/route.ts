import { NextResponse } from 'next/server';
import { z } from 'zod';
import { promises as dns } from 'dns';
import { createClient } from '@supabase/supabase-js';

// 初始化 Supabase 客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const EmailSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a complete email (e.g., .com, .net)" })
    .trim(),
});

async function hasValidMxRecord(domain: string): Promise<boolean> {
  try {
    const mxRecords = await dns.resolveMx(domain);
    return mxRecords && mxRecords.length > 0;
  } catch (error) {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = EmailSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.issues?.[0]?.message || "Invalid email format" }, { status: 400 });
    }

    const { email } = result.data;
    const domain = email.split('@')[1].toLowerCase();

    // --- 1. 查重逻辑：直接利用数据库查询 ---
    // ilike 是大小写不敏感的查询，完美替代你之前的 .toLowerCase() 循环对比 [cite: 43]
    const { data: existingLead } = await supabase
      .from('leads')
      .select('email')
      .ilike('email', email)
      .single();

    if (existingLead) {
      return NextResponse.json({ error: "You are already on the waitlist!" }, { status: 409 });
    }

    // --- 2. MX 记录检查 (保持你健壮的校验逻辑) [cite: 45] ---
    const isValidDomain = await hasValidMxRecord(domain);
    if (!isValidDomain) {
      return NextResponse.json(
        { error: "This domain has no valid mail server. Check for typos." },
        { status: 400 }
      );
    }

    // --- 3. 写入数据：Supabase 会自动处理并发安全性 [cite: 47, 50] ---
    const { error: insertError } = await supabase
      .from('leads')
      .insert([{ email: email }]); // 存储原始大小写输入 [cite: 39]

    if (insertError) throw insertError;

    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error('Database/API Error:', error);
    return NextResponse.json({ error: "System error, please try again." }, { status: 500 });
  }
}