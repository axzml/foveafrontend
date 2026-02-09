-- ============================================
-- Fovea Waitlist Database Migration
-- Date: 2026-02-08
-- Purpose: Add role, tools, ai_frequency fields
-- ============================================

-- 添加新字段到 leads 表
-- 所有字段都是可空的（nullable），完美兼容已有的20个用户数据

ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS role TEXT,
ADD COLUMN IF NOT EXISTS tools TEXT[],
ADD COLUMN IF NOT EXISTS ai_frequency TEXT,
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS city TEXT;

-- 如果 created_at 字段不存在，添加它
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

-- 可选：为新字段添加注释（帮助团队理解）
COMMENT ON COLUMN leads.role IS 'User role: developer, data-scientist, product-manager, student-researcher, trader, designer, founder, other';
COMMENT ON COLUMN leads.tools IS 'Daily tools: VS Code/IDE, Chrome/Browser, Terminal, Jupyter/Colab, Notion/Docs, Office/Google Workspace, Zotero/Reference Manager, TradingView/Trading, Figma/Design Tools, Slack/Teams, GitHub/GitLab, Other';
COMMENT ON COLUMN leads.ai_frequency IS 'AI usage: multiple-daily, daily, weekly, rarely';
COMMENT ON COLUMN leads.country IS 'Country code (from x-vercel-ip-country) - used to understand user distribution';
COMMENT ON COLUMN leads.city IS 'City name (from x-vercel-ip-city) - used to prioritize regional support';

-- 可选：创建索引提升查询性能
CREATE INDEX IF NOT EXISTS idx_leads_role ON leads(role);
CREATE INDEX IF NOT EXISTS idx_leads_country ON leads(country);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- 验证数据
-- 运行后可以检查表结构是否正确
SELECT 
  column_name, 
  data_type, 
  is_nullable 
FROM information_schema.columns 
WHERE table_name = 'leads';

-- ============================================
-- 迁移完成！
-- 
-- 现有数据状态：
-- - 20个已有用户：email有值，其他字段 = NULL
-- - 新用户：所有字段都有值（包括国家和城市）
-- 
-- 收集的地理位置信息来自 Vercel Edge Network：
-- - country: 国家代码 (如: US, CN, JP)
-- - city: 城市名称 (如: Shanghai, San Francisco)
-- 
-- 用途：了解用户主要来自哪些国家/地区，优先支持这些市场
-- 
-- 隐私说明：
-- - 我们不存储IP地址
-- - 只保留国家/城市级别的位置信息
-- - 不追踪用户的精确GPS位置
-- 
-- 后续步骤：
-- 1. 在 Supabase Dashboard 执行此 SQL
-- 2. 确认没有错误
-- 3. 部署更新后的前端和后端代码
-- ============================================
