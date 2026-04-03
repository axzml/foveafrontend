export const SUPPORTED_LOCALES = ["en", "zh"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE_NAME = "fovea_locale";

const zhRouteSet = new Set(["/", "/download", "/feedback"]);

export function isSupportedLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "zh";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/zh") return "/";
  if (pathname.startsWith("/zh/")) return pathname.slice(3);
  return pathname;
}

export function pathnameLocale(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function supportsLocalizedRoute(pathname: string): boolean {
  return zhRouteSet.has(stripLocalePrefix(pathname));
}

export function localizedPath(pathname: string, locale: Locale): string {
  const basePath = stripLocalePrefix(pathname);
  if (!supportsLocalizedRoute(basePath)) return basePath;
  if (locale === "en") return basePath;
  return basePath === "/" ? "/zh" : `/zh${basePath}`;
}
