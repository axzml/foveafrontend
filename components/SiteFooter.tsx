import Link from "next/link";

type SiteFooterProps = {
  text: string;
  variant?: "dark" | "light";
  pricingHref?: string;
  feedbackHref?: string;
  pricingLabel?: string;
  feedbackLabel?: string;
  privacyLabel?: string;
  termsLabel?: string;
};

export default function SiteFooter({
  text,
  variant = "dark",
  pricingHref = "/pricing",
  feedbackHref = "/feedback",
  pricingLabel = "Pricing",
  feedbackLabel = "Feedback",
  privacyLabel = "Privacy Policy",
  termsLabel = "Terms of Service",
}: SiteFooterProps) {
  const isLight = variant === "light";

  return (
    <footer className={`border-t py-16 text-center ${isLight ? "border-[#DDE4DC] bg-white text-[#69746D]" : "border-[#1A1A1A]"}`}>
      <div className={`mb-3 flex flex-wrap items-center justify-center gap-2 text-xs ${isLight ? "text-[#69746D]" : "text-[#444]"}`}>
        <Link href={pricingHref} className={`transition-colors ${isLight ? "hover:text-[#111315]" : "hover:text-[#888]"}`}>
          {pricingLabel}
        </Link>
        <span className={isLight ? "text-[#B4BEB6]" : "text-[#333]"}>&middot;</span>
        <Link href={feedbackHref} className={`transition-colors ${isLight ? "hover:text-[#111315]" : "hover:text-[#888]"}`}>
          {feedbackLabel}
        </Link>
        <span className={isLight ? "text-[#B4BEB6]" : "text-[#333]"}>&middot;</span>
        <Link href="/privacy" className={`transition-colors ${isLight ? "hover:text-[#111315]" : "hover:text-[#888]"}`}>
          {privacyLabel}
        </Link>
        <span className={isLight ? "text-[#B4BEB6]" : "text-[#333]"}>&middot;</span>
        <Link href="/terms" className={`transition-colors ${isLight ? "hover:text-[#111315]" : "hover:text-[#888]"}`}>
          {termsLabel}
        </Link>
      </div>
      <p className={`font-mono text-xs tracking-widest ${isLight ? "text-[#88938C]" : "text-[#333]"}`}>{text}</p>
    </footer>
  );
}
