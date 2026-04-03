import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  isSupportedLocale,
  localizedPath,
  pathnameLocale,
  stripLocalePrefix,
  supportsLocalizedRoute,
  type Locale,
} from "./lib/site-locale";

function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return /\bzh(?:-[A-Za-z]{2,4})?\b/i.test(acceptLanguage) ? "zh" : DEFAULT_LOCALE;
}

function withLocaleHeader(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-fovea-locale", locale);
  return requestHeaders;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeFromPath = pathnameLocale(pathname);

  if (localeFromPath === "zh") {
    const response = NextResponse.next({
      request: { headers: withLocaleHeader(request, "zh") },
    });
    response.cookies.set(LOCALE_COOKIE_NAME, "zh", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const basePath = stripLocalePrefix(pathname);
  const preferredLocale = detectLocale(request);

  if (preferredLocale === "zh" && supportsLocalizedRoute(basePath)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = localizedPath(basePath, "zh");
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next({
    request: { headers: withLocaleHeader(request, "en") },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|txt|xml|ico)$).*)",
  ],
};
