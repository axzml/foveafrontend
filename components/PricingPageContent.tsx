"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, CreditCard, Sparkles } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import SiteFooter from "./SiteFooter";
import { getSiteCopy } from "../lib/site-copy";
import { localizedPath, type Locale } from "../lib/site-locale";

type PricingPageContentProps = {
  locale: Locale;
};

export default function PricingPageContent({ locale }: PricingPageContentProps) {
  const copy = getSiteCopy(locale);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

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
            englishHref="/pricing"
            chineseHref="/zh/pricing"
            englishLabel={copy.common.english}
            chineseLabel={copy.common.chinese}
            label={copy.common.localeLabel}
            variant="light"
            className="hidden sm:inline-flex"
          />
        </header>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl py-16 text-center md:py-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C8D6CE] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5A53]">
            <Sparkles className="h-3.5 w-3.5 text-[#12B886]" />
            {copy.pricing.badge}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#111315] sm:text-6xl">
            {copy.pricing.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#5A665F]">{copy.pricing.intro}</p>

          <div className="mt-8 inline-flex rounded-2xl border border-[#D8E1DA] bg-white p-1 shadow-[0_10px_30px_rgba(17,19,21,0.05)]">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                billing === "monthly" ? "bg-[#111315] text-white" : "text-[#5E6861] hover:text-[#111315]"
              }`}
            >
              {copy.pricing.billingToggle.monthly}
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                billing === "annual" ? "bg-[#111315] text-white" : "text-[#5E6861] hover:text-[#111315]"
              }`}
            >
              {copy.pricing.billingToggle.annual}
              <span className="ml-2 rounded-full bg-[#E9F8F2] px-2 py-0.5 text-xs text-[#0D8F69]">
                {copy.pricing.billingToggle.save}
              </span>
            </button>
          </div>
        </motion.section>

        <section className="grid gap-4 md:grid-cols-3">
          {copy.pricing.plans.map((plan) => {
            const displayPrice = billing === "annual" && plan.name === "Pro" ? "$115" : plan.price;
            const displayPeriod = billing === "annual" && plan.name === "Pro"
              ? locale === "zh" ? "每年" : "per year"
              : plan.period;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex min-h-[520px] flex-col rounded-[24px] border p-6 ${
                  plan.featured
                    ? "border-[#111315] bg-[#111315] text-white shadow-[0_24px_70px_rgba(17,19,21,0.22)]"
                    : "border-[#DDE4DC] bg-white text-[#111315] shadow-[0_16px_50px_rgba(37,48,41,0.06)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{plan.name}</h2>
                    <p className={`mt-2 text-sm leading-6 ${plan.featured ? "text-white/70" : "text-[#5F6A63]"}`}>
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured && (
                    <span className="rounded-full bg-[#E9F8F2] px-3 py-1 text-xs font-semibold text-[#0D8F69]">
                      Pro
                    </span>
                  )}
                </div>

                <div className="mt-8">
                  <span className="text-5xl font-semibold tracking-tight">{displayPrice}</span>
                  <span className={`ml-2 text-sm ${plan.featured ? "text-white/60" : "text-[#6A756E]"}`}>
                    {displayPeriod}
                  </span>
                </div>

                <Link
                  href={localizedPath(plan.href, locale)}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-[#111315] hover:bg-[#E9F8F2]"
                      : "border border-[#D8E1DA] bg-[#F8FAF7] text-[#111315] hover:border-[#AFC2B5]"
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  {plan.cta}
                </Link>

                <div className={`mt-8 h-px ${plan.featured ? "bg-white/15" : "bg-[#E3E9E5]"}`} />

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured ? "bg-white/12 text-[#8CE8CB]" : "bg-[#E9F8F2] text-[#0D8F69]"
                      }`}>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={plan.featured ? "text-white/78" : "text-[#526058]"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </section>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#6A756E]">
          {copy.pricing.note}
        </p>

        <section className="mx-auto max-w-4xl py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111315]">{copy.pricing.faqTitle}</h2>
          <div className="mt-8 grid gap-3">
            {copy.pricing.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-[#DDE4DC] bg-white p-5">
                <h3 className="text-base font-semibold text-[#111315]">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5F6A63]">{faq.answer}</p>
              </div>
            ))}
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
