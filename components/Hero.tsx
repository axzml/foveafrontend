'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Download,
  FileText,
  Image as ImageIcon,
  Mic2,
  PlayCircle,
  Send,
  Sparkles,
} from 'lucide-react';
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
  pricingHref: string;
  feedbackHref: string;
};

const Hero = ({
  locale,
  copy,
  localeLabel,
  englishLabel,
  chineseLabel,
  privacyLinkLabel,
  downloadHref,
  pricingHref,
  feedbackHref,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F4] px-5 pt-5 text-[#111315] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col">
        <header className="flex items-center justify-between gap-4 rounded-2xl border border-[#DDE4DC] bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(17,19,21,0.05)] backdrop-blur">
          <Link href={locale === 'zh' ? '/zh' : '/'} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111315] text-sm font-semibold text-white">
              F
            </span>
            <span className="text-sm font-semibold tracking-tight">Fovea</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium text-[#5E6861] lg:flex">
            <a href="#product" className="transition hover:text-[#111315]">
              {copy.navProduct}
            </a>
            <a href="#workflow" className="transition hover:text-[#111315]">
              {copy.navWorkflow}
            </a>
            <Link href={pricingHref} className="transition hover:text-[#111315]">
              {copy.navPricing}
            </Link>
            <Link href={feedbackHref} className="transition hover:text-[#111315]">
              {copy.navFeedback}
            </Link>
            <Link href="/privacy" className="transition hover:text-[#111315]">
              {privacyLinkLabel}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LocaleSwitcher
                currentLocale={locale}
                englishHref="/"
                chineseHref="/zh"
                englishLabel={englishLabel}
                chineseLabel={chineseLabel}
                label={localeLabel}
                variant="light"
              />
            </div>
            <Link
              href={downloadHref}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#111315] px-3 text-sm font-semibold text-white transition hover:bg-[#1F2421] sm:px-4"
              aria-label={copy.approvedLink}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">{copy.approvedLink}</span>
              <span className="sm:hidden">{copy.downloadShort}</span>
            </Link>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8D6CE] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5A53]">
              <Sparkles className="h-3.5 w-3.5 text-[#12B886]" />
              {copy.badge}
            </span>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#111315] sm:text-6xl lg:text-7xl">
              {copy.titleLine1}
              <br />
              <span className="text-[#12A77D]">{copy.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4F5B54] sm:text-xl">
              {copy.subtitle}
              <span className="font-semibold text-[#111315]"> {copy.subtitleStrong}</span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={downloadHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111315] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,19,21,0.16)] transition hover:-translate-y-0.5 hover:bg-[#202521]"
              >
                <Download className="h-4 w-4" />
                {copy.approvedLink}
              </Link>
              <a
                href="#guide"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CED8D0] bg-white px-6 py-3.5 text-sm font-semibold text-[#111315] transition hover:-translate-y-0.5 hover:border-[#AFC2B5]"
              >
                <PlayCircle className="h-4 w-4 text-[#12A77D]" />
                {copy.demoCta}
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm">
              {copy.heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#DDE4DC] bg-white/75 p-4">
                  <p className="text-lg font-semibold text-[#111315]">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#6B766E]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.72, ease: 'easeOut' }}
            className="relative"
          >
            <ProductMockup copy={copy} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function ProductMockup({ copy }: { copy: SiteCopy["home"]["hero"] }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl" id="product">
      <div className="rounded-[28px] border border-[#CDD9D0] bg-[#EDF1EC] p-3 shadow-[0_24px_80px_rgba(37,48,41,0.18)]">
        <div className="overflow-hidden rounded-[22px] border border-[#D7E0D9] bg-white">
          <div className="flex h-11 items-center justify-between border-b border-[#E3E9E5] bg-[#FBFCFA] px-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B5F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD4A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#35C759]" />
            </div>
            <span className="text-xs font-medium text-[#7A857D]">Fovea Capture</span>
            <span className="h-5 w-14" />
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#E7ECE8] bg-[#F8FAF7] p-5 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#68736B]">
                {copy.inputLabel}
              </p>

              <div className="mt-4 space-y-3">
                <MockupInput icon={<Mic2 className="h-4 w-4" />} title={copy.voiceLabel} body={copy.voiceBody} />
                <MockupInput icon={<FileText className="h-4 w-4" />} title={copy.textLabel} body={copy.textBody} />
                <MockupInput icon={<ImageIcon className="h-4 w-4" />} title={copy.imageLabel} body={copy.imageBody} />
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#68736B]">
                  {copy.outputLabel}
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F8F2] px-2.5 py-1 text-xs font-medium text-[#0D8F69]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {copy.readyLabel}
                </span>
              </div>

              <div className="rounded-2xl border border-[#DDE5DF] bg-[#101413] p-4 text-white">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#8CE8CB]">
                  <Braces className="h-4 w-4" />
                  {copy.structuredLabel}
                </div>
                <div className="space-y-2 text-sm leading-6 text-[#D8E4DE]">
                  {copy.outputLines.map((line) => (
                    <p key={line} className="rounded-lg bg-white/5 px-3 py-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[#DDE5DF] bg-[#F8FAF7] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#111315]">{copy.deliverLabel}</p>
                    <p className="mt-1 text-xs text-[#6A756E]">{copy.deliverBody}</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111315] text-white">
                    <Send className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {copy.destinationChips.map((chip) => (
                    <span key={chip} className="rounded-full border border-[#D4DDD6] bg-white px-3 py-1 text-xs font-medium text-[#4E5A53]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-2xl border border-[#DCE5DF] bg-white px-4 py-3 shadow-[0_16px_38px_rgba(37,48,41,0.14)] sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9F8F2] text-[#0D8F69]">
          <ArrowRight className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#111315]">{copy.oneActionTitle}</p>
          <p className="text-xs text-[#6A756E]">{copy.oneActionBody}</p>
        </div>
      </div>
    </div>
  );
}

function MockupInput({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[#DEE7E0] bg-white p-3 shadow-[0_6px_18px_rgba(37,48,41,0.04)]">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF8F2] text-[#0D8F69]">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-[#111315]">{title}</p>
          <p className="mt-1 text-xs leading-5 text-[#6A756E]">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
