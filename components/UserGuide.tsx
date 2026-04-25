"use client";

import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon, Mic2, Send, TextCursorInput } from "lucide-react";
import type { SiteCopy } from "../lib/site-copy";

type UserGuideProps = {
  copy: SiteCopy["home"]["guide"];
};

export default function UserGuide({ copy }: UserGuideProps) {
  return (
    <section className="bg-[#F7F8F4] px-5 py-24 sm:px-6 lg:px-8" id="guide">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D8F69]">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111315] sm:text-5xl">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#5A665F]">{copy.description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 rounded-[28px] border border-[#D8E2DB] bg-white p-4 shadow-[0_24px_70px_rgba(37,48,41,0.12)]"
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_0.58fr] lg:items-stretch">
            <div className="rounded-[22px] border border-[#E3E9E5] bg-[#FBFCFA] p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D8F69]">{copy.capture.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#111315]">{copy.capture.title}</h3>
                </div>
                <span className="rounded-full bg-[#E9F8F2] px-3 py-1 text-xs font-semibold text-[#0D8F69]">
                  {copy.capture.badge}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#DDE4DC] bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F8F2] text-[#0D8F69]">
                      <Mic2 className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-[#111315]">{copy.speak.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#5F6A63]">{copy.speak.body}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#DDE4DC] bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F8F2] text-[#0D8F69]">
                      <TextCursorInput className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-[#111315]">{copy.captureText.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#5F6A63]">{copy.captureText.body}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {copy.captureText.items.map((item) => (
                          <span key={item} className="rounded-full border border-[#D8E1DA] bg-[#F8FAF7] px-3 py-1 text-xs font-medium text-[#526058]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#DDE4DC] bg-white p-5 md:col-span-2">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F8F2] text-[#0D8F69]">
                      <ImageIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-[#111315]">{copy.captureImages.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#5F6A63]">{copy.captureImages.body}</p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {copy.captureImages.items.map((item) => (
                          <div key={item} className="rounded-xl border border-[#DDE4DC] bg-[#F8FAF7] px-3 py-3 text-xs font-medium text-[#526058]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full border border-[#DDE4DC] bg-white text-[#0D8F69] shadow-[0_10px_30px_rgba(37,48,41,0.08)] lg:rotate-0">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>

            <div className="rounded-[22px] border border-[#DDE4DC] bg-[#111315] p-5 text-white">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#8CE8CB]">
                <Send className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8CE8CB]">{copy.deliver.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{copy.deliver.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{copy.deliver.body}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm font-semibold text-white">{copy.deliver.invisibleTitle}</p>
                <p className="mt-2 text-xs leading-6 text-white/62">{copy.deliver.invisibleBody}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 flex flex-col gap-2 text-sm text-[#68736B] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-[#111315]">{copy.caption}</p>
          <p>{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
