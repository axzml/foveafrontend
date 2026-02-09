-- ============================================
-- Fovea Waitlist Analytics Queries
-- 用于分析用户分布和行为
-- ============================================

-- 1. 按国家统计用户分布
SELECT 
  country,
  COUNT(*) as user_count,
  ROUND(COUNT(*)::numeric / SUM(COUNT(*)) OVER () * 100, 2) as percentage
FROM leads
WHERE country IS NOT NULL
GROUP BY country
ORDER BY user_count DESC;

-- 2. 按城市统计用户分布（Top 10）
SELECT 
  country,
  city,
  COUNT(*) as user_count
FROM leads
WHERE city IS NOT NULL
GROUP BY country, city
ORDER BY user_count DESC
LIMIT 10;

-- 3. 按角色统计
SELECT 
  role,
  COUNT(*) as user_count,
  ROUND(COUNT(*)::numeric / SUM(COUNT(*)) OVER () * 100, 2) as percentage
FROM leads
WHERE role IS NOT NULL
GROUP BY role
ORDER BY user_count DESC;

-- 4. 按工具使用统计（展开数组）
SELECT 
  unnest(tools) as tool,
  COUNT(*) as user_count
FROM leads
WHERE tools IS NOT NULL
GROUP BY tool
ORDER BY user_count DESC;

-- 5. 按AI使用频率统计
SELECT 
  ai_frequency,
  COUNT(*) as user_count,
  ROUND(COUNT(*)::numeric / SUM(COUNT(*)) OVER () * 100, 2) as percentage
FROM leads
WHERE ai_frequency IS NOT NULL
GROUP BY ai_frequency
ORDER BY user_count DESC;

-- 6. 综合分析：国家 + 角色分布
SELECT 
  country,
  role,
  COUNT(*) as user_count
FROM leads
WHERE country IS NOT NULL AND role IS NOT NULL
GROUP BY country, role
ORDER BY country, user_count DESC;

-- 7. 每日新增用户趋势
SELECT 
  DATE(created_at) as date,
  COUNT(*) as new_users,
  SUM(COUNT(*)) OVER (ORDER BY DATE(created_at)) as cumulative_users
FROM leads
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- 8. 完整度分析（有多少用户填写了可选字段）
SELECT 
  COUNT(*) as total_users,
  COUNT(role) as with_role,
  COUNT(tools) as with_tools,
  COUNT(ai_frequency) as with_frequency,
  COUNT(ip_address) as with_location,
  ROUND(COUNT(role)::numeric / COUNT(*) * 100, 2) as role_completion_rate,
  ROUND(COUNT(tools)::numeric / COUNT(*) * 100, 2) as tools_completion_rate,
  ROUND(COUNT(ai_frequency)::numeric / COUNT(*) * 100, 2) as frequency_completion_rate
FROM leads;

-- 9. 最新20个注册用户详情
SELECT 
  email,
  role,
  tools,
  country,
  city,
  created_at
FROM leads
ORDER BY created_at DESC
LIMIT 20;

-- 10. 高价值用户识别（工程师 + 高频AI使用）
SELECT 
  email,
  role,
  tools,
  ai_frequency,
  country,
  city,
  created_at
FROM leads
WHERE 
  role IN ('developer', 'data-scientist')
  AND ai_frequency IN ('multiple-daily', 'daily')
ORDER BY created_at DESC;

-- ============================================
-- 在 Supabase Dashboard → SQL Editor 中运行
-- 可以导出为 CSV 用于进一步分析
-- ============================================
