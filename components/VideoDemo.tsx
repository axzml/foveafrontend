'use client';

import { motion } from 'framer-motion';

const VideoDemo = () => {
  return (
    <section className="py-24 bg-[#050505] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl px-6"
      >
        {/* 视频外壳 - 模拟精密硬件感 */}
        <div className="relative rounded-2xl border border-[#333] shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#1A1A1A] overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-8 bg-[#222]/50 backdrop-blur-md flex items-center px-4 gap-2 border-b border-[#333] z-20">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
            <div className="ml-4 text-[10px] font-mono text-[#555] tracking-widest uppercase">Fovea Intelligence Engine v0.1.0</div>
          </div>

          {/* 视频主体 */}
          <div className="pt-8 pb-2">
            <video
              className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-700 rounded-b-2xl"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="https://pub-86475e4694cf4340a3424f1b16dffaa6.r2.dev/Fovea_ChEn_subtitles_1080P.mp4" type="video/mp4" />
            </video>
          </div>

          {/* 装饰性光晕 */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        </div>

        {/* 视频下方文字说明 */}
        <div className="mt-8 text-center">
          <p className="text-[#555] font-mono text-sm tracking-widest uppercase">
            Real-time Gaze Interaction Analysis
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoDemo;