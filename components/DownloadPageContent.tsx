"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowLeft,
  CheckCircle2,
  Monitor,
  Puzzle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import SiteFooter from "./SiteFooter";
import { getSiteCopy } from "../lib/site-copy";
import { localizedPath, type Locale } from "../lib/site-locale";

type DownloadPageContentProps = {
  locale: Locale;
};

const DMG_URL = "https://updates.hellofovea.com/releases/latest.dmg";
const EXTENSION_URL = "https://updates.hellofovea.com/extensions/Fovea-Companion-2.0.0.zip";

export default function DownloadPageContent({ locale }: DownloadPageContentProps) {
  const copy = getSiteCopy(locale);

  return (
    <main className="min-h-screen bg-[#F7F8F4] px-5 py-5 text-[#111315] selection:bg-[#12B886]/20 selection:text-[#111315] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between gap-4 rounded-2xl border border-[#DDE4DC] bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(17,19,21,0.05)] backdrop-blur">
          <Link
            href={localizedPath("/", locale)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5E6861] transition hover:text-[#111315]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{copy.nav.backHome}</span>
            <span className="sm:hidden">{locale === "zh" ? "返回" : "Back"}</span>
          </Link>

          <LocaleSwitcher
            currentLocale={locale}
            englishHref="/download"
            chineseHref="/zh/download"
            englishLabel={copy.common.english}
            chineseLabel={copy.common.chinese}
            label={copy.common.localeLabel}
            variant="light"
            className="hidden sm:inline-flex"
          />
        </header>

        <section className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C8D6CE] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5A53]">
              <Sparkles className="h-3.5 w-3.5 text-[#12B886]" />
              {copy.download.badge}
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#111315] sm:text-6xl">
              {copy.download.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5A665F]">{copy.download.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={DMG_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111315] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,19,21,0.16)] transition hover:-translate-y-0.5 hover:bg-[#202521]"
              >
                <ArrowDownToLine className="h-4 w-4" />
                {copy.download.macButton}
              </a>
              <a
                href={EXTENSION_URL}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CED8D0] bg-white px-6 py-3.5 text-sm font-semibold text-[#111315] transition hover:-translate-y-0.5 hover:border-[#AFC2B5]"
              >
                <Puzzle className="h-4 w-4 text-[#12A77D]" />
                {copy.download.extButton}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E0D9] bg-white px-3 py-1.5 text-[#526058]">
                <Monitor className="h-4 w-4 text-[#0D8F69]" />
                {copy.download.macRequirements}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E0D9] bg-white px-3 py-1.5 text-[#526058]">
                <RefreshCcw className="h-4 w-4 text-[#0D8F69]" />
                {copy.download.macAutoUpdate}
              </span>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#DDE4DC] bg-white p-6 shadow-[0_24px_80px_rgba(37,48,41,0.12)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D8F69]">
                  {copy.download.macLabel}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#111315]">
                  {copy.download.macTitle}
                </h2>
              </div>
              <span className="rounded-full bg-[#E9F8F2] px-3 py-1 text-xs font-semibold text-[#0D8F69]">
                {copy.download.macVersion}
              </span>
            </div>

            <div className="mt-7 overflow-hidden rounded-2xl border border-[#DDE4DC]">
              <div className="flex items-center justify-between border-b border-[#DDE4DC] bg-[#F8FAF7] px-4 py-3 text-sm">
                <span className="font-semibold text-[#111315]">{copy.download.packageTitle}</span>
                <span className="text-[#6A756E]">.dmg</span>
              </div>
              <div className="grid gap-0 divide-y divide-[#E3E9E5]">
                {copy.download.installSteps.map((step) => (
                  <div key={step.title} className="grid gap-3 px-4 py-4 sm:grid-cols-[8rem_1fr]">
                    <p className="text-sm font-semibold text-[#111315]">{step.title}</p>
                    <p className="text-sm leading-6 text-[#5F6A63]">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {copy.download.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-[#F8FAF7] px-4 py-3 text-sm leading-6 text-[#526058]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0D8F69]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#DDE4DC] bg-[#F8FAF7] p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F8F2] text-[#0D8F69]">
                  <Puzzle className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-semibold text-[#111315]">{copy.download.extTitle}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#5F6A63]">{copy.download.extBody}</p>
                </div>
              </div>
              <p className="mt-4 rounded-xl bg-white px-4 py-3 text-xs leading-6 text-[#6A756E]">
                {copy.download.extInstallNote}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-[#DDE4DC] bg-white p-6 shadow-[0_16px_50px_rgba(37,48,41,0.06)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9F8F2] text-[#0D8F69]">
                <Monitor className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-semibold text-[#111315]">{copy.download.requirementsTitle}</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {copy.download.requirements.map((item) => (
                <p key={item} className="rounded-xl border border-[#DDE4DC] bg-[#F8FAF7] px-4 py-3 text-sm text-[#526058]">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#DDE4DC] bg-white p-6 shadow-[0_16px_50px_rgba(37,48,41,0.06)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111315] text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-semibold text-[#111315]">{copy.download.expectationsTitle}</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {copy.download.expectations.map((item) => (
                <p key={item} className="rounded-xl border border-[#DDE4DC] bg-[#F8FAF7] px-4 py-3 text-sm leading-6 text-[#526058]">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm text-[#5F6A63]">
              {copy.download.waitlistPrompt}{" "}
              <Link href={localizedPath("/", locale)} className="font-semibold text-[#0D8F69] hover:underline">
                {copy.download.waitlistLink}
              </Link>
            </p>
          </div>
        </section>
      </div>

      <SiteFooter
        text={copy.common.footer}
        variant="light"
        pricingHref={localizedPath("/pricing", locale)}
        feedbackHref={localizedPath("/feedback", locale)}
        pricingLabel={copy.common.pricingLinkLabel}
        feedbackLabel={copy.common.feedbackLinkLabel}
        privacyLabel={copy.common.privacyLinkLabel}
        termsLabel={copy.common.termsLinkLabel}
      />
    </main>
  );
}
