type SiteFooterProps = {
  text: string;
};

export default function SiteFooter({ text }: SiteFooterProps) {
  return (
    <footer className="py-20 text-center border-t border-[#1A1A1A]">
      <p className="text-[#333] font-mono text-xs tracking-widest">{text}</p>
    </footer>
  );
}
