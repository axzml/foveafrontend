import type { Metadata } from "next";
import { getSiteCopy } from "./site-copy";
import type { Locale } from "./site-locale";

type PageKey = "home" | "download" | "feedback" | "privacy";

const canonicalPaths: Record<PageKey, string> = {
  home: "/",
  download: "/download",
  feedback: "/feedback",
  privacy: "/privacy",
};

export function buildPageMetadata(locale: Locale, page: PageKey): Metadata {
  const copy = getSiteCopy(locale).metadata[page];
  const englishPath = canonicalPaths[page];
  const chinesePath = page === "privacy" ? undefined : englishPath === "/" ? "/zh" : `/zh${englishPath}`;
  const canonical = locale === "zh" && chinesePath ? chinesePath : englishPath;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: chinesePath
        ? {
            en: englishPath,
            zh: chinesePath,
          }
        : {
            en: englishPath,
          },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
    },
  };
}
