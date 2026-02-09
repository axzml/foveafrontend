# Waitlist 表单升级部署指南

## 📋 更新内容

### 新增收集字段：
- ✅ **Role**（必填）- 用户角色
- ✅ **Tools**（可选）- 常用工具 
- ✅ **AI Frequency**（可选）- AI使用频率
- ✅ **Country**（自动）- 国家（Vercel自动提供）
- ✅ **City**（自动）- 城市（Vercel自动提供）

### 兼容性：
- ✅ 完美兼容已有20个用户数据
- ✅ 旧数据保持不变（新字段为NULL）
- ✅ 新数据包含完整信息

---

## 🚀 部署步骤

### 1️⃣ 数据库迁移（需要 Supabase 权限）

**转发给有 Supabase 权限的开发者：**

1. 登录 [Supabase Dashboard](https://supabase.com/dashboard)
2. 选择项目
3. 进入 `SQL Editor`
4. 复制并执行 `database-migration.sql` 文件中的 SQL 语句
5. 确认执行成功（无错误提示）

**验证方法：**
```sql
-- 检查表结构
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'leads';

-- 应该看到：
-- email (text, NO)
-- role (text, YES)
-- tools (ARRAY, YES)
-- ai_frequency (text, YES)
-- created_at (timestamptz, YES)
```

---

### 2️⃣ 部署代码

数据库迁移完成后，立即部署更新的代码：

```bash
# 确认更改
git status

# 提交代码
git add .
git commit -m "feat: add role, tools, ai_frequency to waitlist form"

# 推送并部署
git push origin main
```

**Vercel 会自动部署**（如果连接了自动部署）

---

## 📊 数据结构对比

### 旧结构：
```json
{
  "email": "user@example.com",
  "created_at": "2026-02-01T..."
}
```

### 新结构：
```json
{
  "email": "user@example.com",
  "role": "developer",
  "tools": ["VS Code", "Chrome", "Terminal"],
  "ai_frequency": "multiple-daily",
  "country": "US",
  "city": "San Francisco",
  "created_at": "2026-02-08T..."
}
```

**注意：** 国家和城市信息由Vercel自动提供，无需额外API调用。我们不存储IP地址。

---

## 🔍 测试清单

### 部署后测试：

- [ ] 打开网站首页
- [ ] 只填写 Email，不选 Role → **应该提示"Please select your role"**
- [ ] 填写 Email + Role → **应该成功提交**
- [ ] 选择 Tools 和 AI Frequency → **应该正常保存**
- [ ] 重复提交相同邮箱 → **应该提示"Already on waitlist"**
- [ ] 查看 Supabase 数据表 → **确认新数据包含所有字段**

---

## 💾 数据导出和分析

### 查看用户地理分布：

使用 `analytics-queries.sql` 中的预定义查询：

```sql
-- 按国家统计
SELECT country, COUNT(*) as user_count
FROM leads
WHERE country IS NOT NULL
GROUP BY country
ORDER BY user_count DESC;

-- 按城市统计 Top 10
SELECT country, city, COUNT(*) as user_count
FROM leads
WHERE city IS NOT NULL
GROUP BY country, city
ORDER BY user_count DESC
LIMIT 10;
```

### 完整分析查询：
查看 `analytics-queries.sql` 文件，包含10+个预定义分析查询：
- 用户地理分布
- 角色统计
- 工具使用分析
- AI使用频率
- 每日增长趋势
- 高价值用户识别

---

## 🔒 隐私说明

**收集的地理位置信息：**
- ✅ **来源**：Vercel Edge Network（从请求headers自动获取）
- ✅ **精度**：国家/城市级别，不包含具体地址或GPS坐标
- ✅ **用途**：了解用户主要来自哪些地区，优先支持这些市场
- ✅ **存储**：加密存储在Supabase（欧盟GDPR合规）
- ✅ **不收集**：IP地址、精确定位、GPS坐标

**建议在隐私政策中说明：**
> "We collect your approximate location (country and city) to understand where our users are located and prioritize regional support. We do not track your precise GPS location or store your IP address."

---

## 🆘 常见问题

### Q1: 数据库迁移失败？
**A:** 检查是否有权限，或者表名是否正确（确认表名是 `leads`）

### Q2: 旧用户数据会丢失吗？
**A:** 不会！新字段都是可空的，旧数据完全不受影响

### Q3: 需要补充旧用户的数据吗？
**A:** 可选。如果需要，可以后续发邮件调研

### Q4: 前端表单太长了？
**A:** 可以调整布局，或者将可选字段默认收起

---

## 📧 联系开发者

如果遇到问题，联系有 Supabase 权限的开发者执行数据库迁移。

**迁移时间：** 约1分钟  
**停机时间：** 0（在线迁移，不影响现有服务）
