'use client';

import { Eye, Zap, Layers, Infinity } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Gaze-Aware Context",
    description: "Fovea perceives your focus area. No more manual copy-pasting to explain what you're looking at.",
    icon: <Eye className="w-6 h-6 text-[#00FFC2]" />,
  },
  {
    title: "Intent Engine",
    description: "High-bandwidth resolution of pronouns like 'this' or 'here' into executable commands.",
    icon: <Zap className="w-6 h-6 text-[#00FFC2]" />,
  },
  {
    title: "Seamless Continuity",
    description: "Your AI context follows your flow across different software environments.",
    icon: <Layers className="w-6 h-6 text-[#00FFC2]" />,
  },
  {
    title: "Unified Subscription",
    description: "One sub for all plugins across VS Code, Chrome, and your Terminal.",
    icon: <Infinity className="w-6 h-6 text-[#00FFC2]" />,
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-[#1A1A1A]/50 border border-[#333] hover:border-[#00FFC2]/50 transition-all overflow-hidden min-h-[280px] flex flex-col"
            >
              {/* 背景微光 */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#00FFC2]/5 blur-3xl group-hover:bg-[#00FFC2]/10 transition-all" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-4 inline-block p-2 rounded-lg bg-[#050505] border border-[#333] w-fit">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#EDEDED] mb-3">{f.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
