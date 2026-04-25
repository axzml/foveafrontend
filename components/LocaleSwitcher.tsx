"use client";

import type { Locale } from "../lib/site-locale";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  englishHref: string;
  chineseHref: string;
  englishLabel: string;
  chineseLabel: string;
  label: string;
  className?: string;
  variant?: "dark" | "light";
};

function persistLocale(locale: Locale) {
  document.cookie = `fovea_locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function switchLocale(locale: Locale, href: string) {
  persistLocale(locale);
  window.location.assign(href);
}

export default function LocaleSwitcher({
  currentLocale,
  englishHref,
  chineseHref,
  englishLabel,
  chineseLabel,
  label,
  className = "",
  variant = "dark",
}: LocaleSwitcherProps) {
  const baseClasses =
    "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors";
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <span className={`text-[11px] uppercase tracking-[0.2em] ${isLight ? "text-[#7A857D]" : "text-[#666]"}`}>
        {label}
      </span>
      <div
        className={`inline-flex rounded-full border p-1 backdrop-blur ${
          isLight ? "border-[#D8E1DA] bg-white/90" : "border-[#333] bg-[#0E0E0E]/90"
        }`}
      >
        <button
          type="button"
          onClick={() => switchLocale("en", englishHref)}
          className={`${baseClasses} ${
            currentLocale === "en"
              ? isLight
                ? "border-[#B7D7C7] bg-[#EAF8F2] text-[#111315]"
                : "border-[#00FFC2]/40 bg-[#00FFC2]/10 text-[#EDEDED]"
              : isLight
                ? "border-transparent text-[#6A756E] hover:text-[#111315]"
                : "border-transparent text-[#888] hover:text-[#EDEDED]"
          }`}
        >
          {englishLabel}
        </button>
        <button
          type="button"
          onClick={() => switchLocale("zh", chineseHref)}
          className={`${baseClasses} ${
            currentLocale === "zh"
              ? isLight
                ? "border-[#B7D7C7] bg-[#EAF8F2] text-[#111315]"
                : "border-[#00FFC2]/40 bg-[#00FFC2]/10 text-[#EDEDED]"
              : isLight
                ? "border-transparent text-[#6A756E] hover:text-[#111315]"
                : "border-transparent text-[#888] hover:text-[#EDEDED]"
          }`}
        >
          {chineseLabel}
        </button>
      </div>
    </div>
  );
}
