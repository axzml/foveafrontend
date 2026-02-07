'use client';

import { motion } from 'framer-motion';

const AboutFovea = () => {
  return (
    <section className="py-24 bg-[#050505] px-6 text-[#888]">
      <div className="max-w-4xl mx-auto space-y-32">

        {/* 高带宽交互模块 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#EDEDED] mb-6">The Bandwidth Leap</h2>
            <p className="leading-relaxed">
              Traditional AI interaction is bottlenecked by manual input.
              <span className="text-[#00FFC2]"> Fovea captures your gaze </span>
              to resolve pronouns and scene context instantly. It’s not just an assistant; it’s a high-bandwidth extension of your intent.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] font-mono text-xs">
            <div className="text-[#555] mb-2">// Intent Resolution Engine</div>
            <div className="text-[#00FFC2]">Input: [Voice: "What's this?"] + [Gaze: Line 142]</div>
            <div className="text-[#EDEDED] mt-2">Fovea: Analyzing React Hook dependency at Line 142...</div>
          </div>
        </motion.div>

        {/* 统一订阅模块 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#EDEDED]">Unified AI Economy</h2>
          <p className="max-w-2xl mx-auto">
            Stop paying multiple subscriptions for the same LLM capability.
            Fovea provides a cross-software unified subscription.
            <span className="text-[#EDEDED]"> One license, infinite plugins, zero friction.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* 这里放你打算支持的软件图标名 */}
            <span className="border border-[#444] px-4 py-2 rounded-lg font-mono text-sm">VS Code</span>
            <span className="border border-[#444] px-4 py-2 rounded-lg font-mono text-sm">Chrome</span>
            <span className="border border-[#444] px-4 py-2 rounded-lg font-mono text-sm">Terminal</span>
            <span className="border border-[#444] px-4 py-2 rounded-lg font-mono text-sm">TradingView</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutFovea;