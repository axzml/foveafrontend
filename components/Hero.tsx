'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
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
      if (!email) return;

      setStatus('loading');
      setMessage("");

      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (!res.ok) {
          // 关键：抛出后端返回的具体错误信息（如：Invalid domain, Already on waitlist）
          throw new Error(data.error || "Submission failed");
        }

        // 成功处理
        setStatus('success');
        setMessage("Welcome to the alpha! You're on the list.");
        setEmail("");
      } catch (err: any) {
        // 错误处理：将捕获到的 Error 对象信息显示给用户
        setStatus('error');
        setMessage(err.message);
      }
  };

  // 如果还没挂载，返回一个空的占位，防止服务器渲染的数据与客户端不匹配
  if (!mounted) {
    return <section className="relative min-h-screen bg-[#050505]" />;
  }

  return (
    <section className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden px-6 text-center">

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-[#00FFC2] border border-[#00FFC2]/30 rounded-full bg-[#00FFC2]/5">
            ALPHA ACCESS NOW OPEN
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#EDEDED] mb-8">
            The AI Interface That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC2] to-[#00A3FF]">
              Follows Your Gaze.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Stop explaining context. Fovea tracks your attention in real-time to bridge the gap between your intent and LLM execution.
            <span className="text-[#EDEDED]"> High-bandwidth interaction is here.</span>
          </p>
        </motion.div>

        {/* 3. Waitlist Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mx-auto"
        >
          <div className="max-w-xl mx-auto w-full px-4">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="relative flex-grow w-full group">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-[#1A1A1A]/50 border border-[#333] px-6 py-4 rounded-xl text-[#EDEDED] placeholder-[#555] focus:outline-none focus:border-[#00FFC2] transition-all duration-300 backdrop-blur-md"
                    disabled={status === 'loading'}
                />
                </div>
                <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex-shrink-0 md:w-auto min-w-[180px] whitespace-nowrap bg-[#00FFC2] text-[#050505] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_25px_rgba(0,255,194,0.5)] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {status === 'loading' ? 'Subscribing...' : 'Request Access'}
                </button>
            </form>

            {/* 反馈信息 */}
            {message && (
                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 text-sm font-mono ${status === 'success' ? 'text-[#00FFC2]' : 'text-red-400'}`}
                >
                {status === 'success' ? '✓ ' : '✕ '}{message}
                </motion.p>
            )}
          </div>
        </motion.div>

        <p className="mt-8 text-xs font-mono text-[#555] uppercase tracking-tighter">
          Join 1,200+ engineers & researchers in queue
        </p>
      </div>

      {/* 4. Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-[#333]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;