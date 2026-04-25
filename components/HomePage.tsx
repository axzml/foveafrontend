import AboutFovea from "./AboutFovea";
import FeatureGrid from "./FeatureGrid";
import Hero from "./Hero";
import SiteFooter from "./SiteFooter";
import UserGuide from "./UserGuide";
import { getSiteCopy } from "../lib/site-copy";
import { localizedPath, type Locale } from "../lib/site-locale";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  const copy = getSiteCopy(locale);

  return (
    <main className="min-h-screen bg-[#F7F8F4] text-[#111315] selection:bg-[#12B886]/20 selection:text-[#111315]">
      <Hero
        locale={locale}
        copy={copy.home.hero}
        localeLabel={copy.common.localeLabel}
        englishLabel={copy.common.english}
        chineseLabel={copy.common.chinese}
        privacyLinkLabel={copy.common.privacyLinkLabel}
        downloadHref={localizedPath("/download", locale)}
        pricingHref={localizedPath("/pricing", locale)}
        feedbackHref={localizedPath("/feedback", locale)}
      />
      <UserGuide copy={copy.home.guide} />
      <FeatureGrid intro={copy.home.featureIntro} features={copy.home.featureGrid} />
      <AboutFovea copy={copy.home.about} />
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
