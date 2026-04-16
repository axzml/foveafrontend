import Link from "next/link";

type SiteFooterProps = {
  text: string;
};

export default function SiteFooter({ text }: SiteFooterProps) {
  return (
    <footer className="py-20 text-center border-t border-[#1A1A1A]">
      <div className="flex items-center justify-center gap-2 text-[#444] text-xs mb-3">
        <Link href="/privacy" className="hover:text-[#888] transition-colors">
          Privacy Policy
        </Link>
        <span className="text-[#333]">&middot;</span>
        <Link href="/terms" className="hover:text-[#888] transition-colors">
          Terms of Service
        </Link>
      </div>
      <p className="text-[#333] font-mono text-xs tracking-widest">{text}</p>
    </footer>
  );
}
