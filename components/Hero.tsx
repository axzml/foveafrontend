'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import LocaleSwitcher from './LocaleSwitcher';
import type { SiteCopy } from '../lib/site-copy';
import type { Locale } from '../lib/site-locale';

type HeroProps = {
  locale: Locale;
  copy: SiteCopy["home"]["hero"];
  localeLabel: string;
  englishLabel: string;
  chineseLabel: string;
  privacyLinkLabel: string;
  downloadHref: string;
};

const toolOptions = [
  'VS Code / IDE',
  'Chrome / Browser',
  'Terminal',
  'Jupyter / Colab',
  'Notion / Docs',
  'Office / Google Workspace',
  'Zotero / Reference Manager',
  'TradingView / Trading',
  'Figma / Design Tools',
  'Slack / Teams',
  'GitHub / GitLab',
  'Other',
];

const Hero = ({ locale, copy, localeLabel, englishLabel, chineseLabel, privacyLinkLabel, downloadHref }: HeroProps) => {
  // 状态检查：确保组件已在客户端挂载，解决 Hydration 报错
  const [mounted, setMounted] = useState(false);

  // 模拟眼动仪/鼠标位置
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 增加平滑度 (Spring effect)
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [aiFrequency, setAiFrequency] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // 只有在挂载后才开始记录坐标
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !role) return;

      setStatus('loading');
      setMessage("");

      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email, 
            role,
            tools: tools.length > 0 ? tools : undefined,
            ai_frequency: aiFrequency || undefined
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          // 关键：抛出后端返回的具体错误信息（如：Invalid domain, Already on waitlist）
          throw new Error(data.error || "Submission failed");
        }

        // 成功处理
        setStatus('success');
        const isDev = data.message?.includes('Development Mode');
        setMessage(isDev 
          ? copy.successDev
          : copy.successLive
        );
        setEmail("");
        setRole("");
        setTools([]);
        setAiFrequency("");
      } catch (err: unknown) {
        // 错误处理：将捕获到的 Error 对象信息显示给用户
        setStatus('error');
        setMessage(err instanceof Error ? err.message : copy.errorFallback);
      }
  };

  // 如果还没挂载，返回一个空的占位，防止服务器渲染的数据与客户端不匹配
  if (!mounted) {
    return <section className="relative min-h-screen bg-[#050505]" />;
  }

  return (
    <section className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden px-6 pb-4 pt-8 text-center">

      {/* 1. Gaze Tracker Background (模拟眼动追踪背景) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 背景网格 */}
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* 跟随光晕 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-[#00FFC2]/30 bg-[#00FFC2]/5 blur-xl"
          style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        />

        {/* 核心光点 */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-[#00FFC2] shadow-[0_0_15px_#00FFC2]"
          style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center md:justify-end">
          <LocaleSwitcher
            currentLocale={locale}
            englishHref="/"
            chineseHref="/zh"
            englishLabel={englishLabel}
            chineseLabel={chineseLabel}
            label={localeLabel}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-[#00FFC2] border border-[#00FFC2]/30 rounded-full bg-[#00FFC2]/5">
            {copy.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#EDEDED] mb-4">
            {copy.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC2] to-[#00A3FF]">
              {copy.titleHighlight}
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#888888] max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            {copy.subtitle}
            <span className="text-[#EDEDED]"> {copy.subtitleStrong}</span>
          </p>

          {/* Download CTA */}
          <Link
            href={downloadHref}
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-[#00FFC2]/40 bg-[#00FFC2]/10 px-6 py-3 text-sm font-semibold text-[#00FFC2] transition-all hover:bg-[#00FFC2]/20 hover:shadow-[0_0_20px_rgba(0,255,194,0.15)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            {copy.approvedLink}
          </Link>
        </motion.div>

        {/* 3. Waitlist Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mx-auto"
        >
          <div className="max-w-xl mx-auto w-full px-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                {/* Email */}
                <div className="relative w-full group">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={copy.emailPlaceholder}
                    className="w-full bg-[#1A1A1A]/50 border border-[#333] px-6 py-4 rounded-xl text-[#EDEDED] placeholder-[#555] focus:outline-none focus:border-[#00FFC2] transition-all duration-300 backdrop-blur-md"
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Role */}
                <div className="relative w-full group">
                  <select
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#1A1A1A]/50 border border-[#333] px-6 py-4 rounded-xl text-[#EDEDED] focus:outline-none focus:border-[#00FFC2] transition-all duration-300 backdrop-blur-md appearance-none cursor-pointer"
                    disabled={status === 'loading'}
                  >
                    <option value="" className="bg-[#1A1A1A]">{copy.rolePlaceholder}</option>
                    {copy.roleOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#1A1A1A]">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-[#555]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>

                {/* Tools (Optional) */}
                <div className="relative w-full">
                  <p className="text-[#888] text-xs mb-1.5">{copy.toolsLabel}</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {toolOptions.map((tool) => (
                      <label key={tool} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={tools.includes(tool)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setTools([...tools, tool]);
                            } else {
                              setTools(tools.filter(t => t !== tool));
                            }
                          }}
                          className="w-4 h-4 rounded border-[#333] bg-[#1A1A1A] checked:bg-[#00FFC2] checked:border-[#00FFC2] focus:ring-0 focus:ring-offset-0"
                          disabled={status === 'loading'}
                        />
                        <span className="text-[#888] text-sm group-hover:text-[#EDEDED] transition-colors">{tool}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* AI Frequency (Optional) */}
                <div className="relative w-full">
                  <p className="text-[#888] text-xs mb-1.5">{copy.aiFrequencyLabel}</p>
                  <div className="flex flex-col gap-1.5">
                    {copy.aiFrequencyOptions.map((freq) => (
                      <label key={freq.value} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="ai_frequency"
                          value={freq.value}
                          checked={aiFrequency === freq.value}
                          onChange={(e) => setAiFrequency(e.target.value)}
                          className="w-4 h-4 border-[#333] bg-[#1A1A1A] text-[#00FFC2] focus:ring-0 focus:ring-offset-0"
                          disabled={status === 'loading'}
                        />
                        <span className="text-[#888] text-sm group-hover:text-[#EDEDED] transition-colors">{freq.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full whitespace-nowrap bg-[#00FFC2] text-[#050505] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_25px_rgba(0,255,194,0.5)] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? copy.submitLoading : copy.submitIdle}
                </button>
            </form>

            {/* 反馈信息 */}
            {message && (
                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 text-sm font-mono ${status === 'success' ? 'text-[#00FFC2]' : 'text-red-400'}`}
                >
                {status === 'success' ? '✓ ' : '✕ '}{message}
                </motion.p>
            )}

            {/* 隐私说明 */}
            <p className="mt-3 text-xs text-[#555] text-center leading-relaxed">
              {copy.privacyNotePrefix}{" "}
              <Link href="/privacy" className="text-[#888] underline decoration-[#00FFC2]/40 underline-offset-2 hover:text-[#EDEDED]">
                {privacyLinkLabel}
              </Link>{" "}
              {copy.privacyNoteSuffix}
            </p>

            {/* 滚动指示器 - 放在表单内 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <div className="relative">
                {/* 脉冲光晕 */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full bg-[#00FFC2] blur-xl"
                />
                {/* 主图标 */}
                <div className="relative bg-[#00FFC2]/10 backdrop-blur-sm rounded-full p-3 border border-[#00FFC2]/30">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00FFC2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                  </svg>
                </div>
              </div>
              <span className="text-[#00FFC2] text-sm font-mono tracking-widest font-semibold">{copy.demoCta}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 底部渐变遮罩 - 视觉暗示下方有内容 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Hero;
