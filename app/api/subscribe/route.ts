import { NextResponse } from 'next/server';
import { z } from 'zod';
import { promises as dns } from 'dns';
import { createClient } from '@supabase/supabase-js';

// 开发模式检测：如果没有配置数据库，启用开发模式
const isDevelopmentMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 初始化 Supabase 客户端（仅在生产模式）
const supabase = isDevelopmentMode ? null : createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SubscribeSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a complete email (e.g., .com, .net)" })
    .trim(),
  role: z.string()
    .min(1, { message: "Please select your role" }),
  tools: z.array(z.string()).optional(),
  ai_frequency: z.string().optional(),
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
    const result = SubscribeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.issues?.[0]?.message || "Invalid input" }, { status: 400 });
    }

    const { email, role, tools, ai_frequency } = result.data;
    const domain = email.split('@')[1].toLowerCase();

    // 获取用户地理位置信息（仅收集国家和城市，用于了解用户分布）
    // Vercel 提供的地理位置信息（自动注入到headers）
    const country = request.headers.get('x-vercel-ip-country') || null;
    const city = request.headers.get('x-vercel-ip-city') || null;
    
    // 注意：我们不存储IP地址，只保留国家/城市级别的位置信息
    // 用途：了解用户主要来自哪些地区，优先支持这些市场

    // 🚧 开发模式：模拟成功提交（不连接数据库）
    if (isDevelopmentMode) {
      console.log('🧪 [开发模式] 表单提交测试:');
      console.log({
        email,
        role,
        tools: tools || [],
        ai_frequency: ai_frequency || 'not specified',
        country: country || 'localhost',
        city: city || 'localhost'
      });
      console.log('✅ 表单验证通过！（开发模式，未写入数据库）');
      return NextResponse.json({ message: "Success (Development Mode)" }, { status: 200 });
    }

    // --- 1. 查重逻辑：直接利用数据库查询 ---
    // ilike 是大小写不敏感的查询，完美替代你之前的 .toLowerCase() 循环对比 [cite: 43]
    const { data: existingLead } = await supabase!
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
    const { error: insertError } = await supabase!
      .from('leads')
      .insert([{ 
        email: email,
        role: role,
        tools: tools || null,
        ai_frequency: ai_frequency || null,
        country: country,
        city: city
      }]); // 存储原始大小写输入 [cite: 39]

    if (insertError) throw insertError;

    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error('Database/API Error:', error);
    return NextResponse.json({ error: "System error, please try again." }, { status: 500 });
  }
}