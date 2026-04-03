'use client';

import { motion } from 'framer-motion';
import type { SiteCopy } from '../lib/site-copy';

type AboutFoveaProps = {
  copy: SiteCopy["home"]["about"];
};

const AboutFovea = ({ copy }: AboutFoveaProps) => {
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
            <h2 className="text-3xl font-bold text-[#EDEDED] mb-6">{copy.title1}</h2>
            <p className="leading-relaxed">{copy.body1}</p>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] font-mono text-xs">
            <div className="text-[#555] mb-2">{copy.codeLabel}</div>
            <div className="text-[#00FFC2]">{copy.codeInput}</div>
            <div className="text-[#EDEDED] mt-2">{copy.codeOutput}</div>
          </div>
        </motion.div>

        {/* 统一订阅模块 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#EDEDED]">{copy.title2}</h2>
          <p className="max-w-2xl mx-auto">{copy.body2}</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {copy.chips.map((chip) => (
              <span key={chip} className="border border-[#444] px-4 py-2 rounded-lg font-mono text-sm">{chip}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutFovea;
