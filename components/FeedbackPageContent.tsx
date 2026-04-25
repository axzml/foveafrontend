"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, CheckCircle2, MessageSquareText, Send } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import SiteFooter from "./SiteFooter";
import { getSiteCopy } from "../lib/site-copy";
import { localizedPath, type Locale } from "../lib/site-locale";

type FeedbackType = "bug" | "feature" | "general";

type FeedbackPageContentProps = {
  locale: Locale;
};

export default function FeedbackPageContent({ locale }: FeedbackPageContentProps) {
  const copy = getSiteCopy(locale);
  const [type, setType] = useState<FeedbackType>("bug");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          title: title.trim(),
          description: description.trim(),
          contact: contact.trim() || null,
          locale,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || copy.feedback.errorFallback);
      }

      setStatus("success");
      setTitle("");
      setDescription("");
      setContact("");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : copy.feedback.errorFallback);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F8F4] px-5 py-5 text-[#111315] selection:bg-[#12B886]/20 selection:text-[#111315] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
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
            englishHref="/feedback"
            chineseHref="/zh/feedback"
            englishLabel={copy.common.english}
            chineseLabel={copy.common.chinese}
            label={copy.common.localeLabel}
            variant="light"
            className="hidden sm:inline-flex"
          />
        </header>

        <div className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C8D6CE] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E5A53]">
              <MessageSquareText className="h-3.5 w-3.5 text-[#12B886]" />
              Feedback
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#111315] sm:text-5xl">
              {copy.feedback.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5A665F]">{copy.feedback.intro}</p>
            <div className="mt-8 rounded-2xl border border-[#DDE4DC] bg-white p-5 text-sm leading-6 text-[#5F6A63]">
              {locale === "zh"
                ? "也可以用这里告诉我们：哪些输入场景不够顺、哪里文案容易误解、后续价格和团队能力你希望怎么设计。"
                : "Use this to tell us where the capture flow feels rough, which wording is confusing, and what you need from pricing or team workflows."}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="rounded-[24px] border border-[#DDE4DC] bg-white p-6 shadow-[0_20px_60px_rgba(37,48,41,0.08)]"
          >
            {status === "success" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#0D8F69]" />
                <h2 className="mt-4 text-xl font-semibold text-[#111315]">{copy.feedback.successTitle}</h2>
                <p className="mt-2 text-sm text-[#5F6A63]">{copy.feedback.successBody}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl border border-[#D8E1DA] bg-[#F8FAF7] px-5 py-3 text-sm font-semibold text-[#111315] transition hover:border-[#AFC2B5]"
                >
                  {copy.feedback.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-semibold text-[#111315]">{copy.feedback.typeLabel}</label>
                  <div className="grid grid-cols-3 gap-3">
                    {copy.feedback.typeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setType(opt.value)}
                        className={`rounded-2xl border p-3 text-sm font-semibold transition ${
                          type === opt.value
                            ? "border-[#0D8F69] bg-[#E9F8F2] text-[#0D8F69]"
                            : "border-[#DDE4DC] bg-[#F8FAF7] text-[#5F6A63] hover:border-[#AFC2B5]"
                        }`}
                      >
                        <span className="mb-1 block text-xs opacity-70">{opt.emoji}</span>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="title" className="mb-2 block text-sm font-semibold text-[#111315]">
                    {copy.feedback.titleLabel} <span className="text-[#B42318]">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={copy.feedback.titlePlaceholder}
                    required
                    className="w-full rounded-xl border border-[#D8E1DA] bg-[#F8FAF7] px-4 py-3 text-sm text-[#111315] placeholder-[#8B968F] outline-none transition focus:border-[#0D8F69] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-semibold text-[#111315]">
                    {copy.feedback.descriptionLabel} <span className="text-[#B42318]">*</span>
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={copy.feedback.descriptionPlaceholders[type]}
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-[#D8E1DA] bg-[#F8FAF7] px-4 py-3 text-sm text-[#111315] placeholder-[#8B968F] outline-none transition focus:border-[#0D8F69] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="mb-2 block text-sm font-semibold text-[#111315]">
                    {copy.feedback.contactLabel}{" "}
                    <span className="font-normal text-[#7A857D]">{copy.feedback.optionalLabel}</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={copy.feedback.contactPlaceholder}
                    className="w-full rounded-xl border border-[#D8E1DA] bg-[#F8FAF7] px-4 py-3 text-sm text-[#111315] placeholder-[#8B968F] outline-none transition focus:border-[#0D8F69] focus:bg-white"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-[#F5C2C7] bg-[#FFF5F5] px-4 py-3 text-sm text-[#B42318]">
                    <AlertCircle className="h-4 w-4" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting" || !title.trim() || !description.trim()}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111315] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#202521] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {status === "submitting" ? (
                    copy.feedback.submitLoading
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {copy.feedback.submitIdle}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
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
