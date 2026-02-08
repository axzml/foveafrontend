'use client';

import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import VideoDemo from '../components/VideoDemo';
import AboutFovea from '../components/AboutFovea';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-[#00FFC2] selection:text-[#050505]">
      {/* 1. 视觉抓手：目光追踪 Hero */}
      <Hero />

      {/* 2. 直观证明：沉浸式 Demo 视频 */}
      <VideoDemo />

      {/* 3. 核心优势：Bento Grid */}
      <FeatureGrid />

      {/* 4. 深度叙事：全案文稿 */}
      <AboutFovea />

      {/* 5. 底部版权 & 再次呼应 */}
      <footer className="py-20 text-center border-t border-[#1A1A1A]">
        <p className="text-[#333] font-mono text-xs tracking-widest">
          © 2026 FOVEA AI. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}