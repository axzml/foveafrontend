import AboutFovea from "./AboutFovea";
import FeatureGrid from "./FeatureGrid";
import Hero from "./Hero";
import SiteFooter from "./SiteFooter";
import VideoDemo from "./VideoDemo";
import { getSiteCopy } from "../lib/site-copy";
import { localizedPath, type Locale } from "../lib/site-locale";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  const copy = getSiteCopy(locale);

  return (
    <main className="bg-[#050505] min-h-screen selection:bg-[#00FFC2] selection:text-[#050505]">
      <Hero
        locale={locale}
        copy={copy.home.hero}
        localeLabel={copy.common.localeLabel}
        englishLabel={copy.common.english}
        chineseLabel={copy.common.chinese}
        privacyLinkLabel={copy.common.privacyLinkLabel}
        downloadHref={localizedPath("/download", locale)}
      />
      <VideoDemo copy={copy.home.video} />
      <FeatureGrid features={copy.home.featureGrid} />
      <AboutFovea copy={copy.home.about} />
      <SiteFooter text={copy.common.footer} />
    </main>
  );
}
