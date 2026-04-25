'use client';

import { Braces, Image as ImageIcon, Layers3, Mic2, TextCursorInput } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SiteCopy } from '../lib/site-copy';

type FeatureGridProps = {
  intro: SiteCopy["home"]["featureIntro"];
  features: SiteCopy["home"]["featureGrid"];
};

const FeatureGrid = ({ intro, features }: FeatureGridProps) => {
  const icons = [
    <Mic2 key="voice" className="h-5 w-5" />,
    <TextCursorInput key="text" className="h-5 w-5" />,
    <ImageIcon key="image" className="h-5 w-5" />,
    <Braces key="structured" className="h-5 w-5" />,
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8" id="workflow">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D8F69]">{intro.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#111315] sm:text-5xl">
              {intro.title}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#5A665F]">{intro.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-[#DDE4DC] bg-[#F8FAF7] p-5"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9F8F2] text-[#0D8F69]">
                {icons[index]}
              </div>
              <h3 className="text-lg font-semibold text-[#111315]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5F6A63]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-[#DDE4DC] bg-[#F8FAF7] p-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111315] text-white">
            <Layers3 className="h-4 w-4" />
          </span>
          {intro.chips.map((chip) => (
            <span key={chip} className="rounded-full border border-[#D9E2DB] bg-white px-3 py-1.5 text-xs font-medium text-[#526058]">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
