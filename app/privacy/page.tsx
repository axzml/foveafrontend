import type { Metadata } from "next";
import PrivacyPageContent from "../../components/PrivacyPageContent";
import { buildPageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = buildPageMetadata("en", "privacy");

export default function Page() {
  return <PrivacyPageContent />;
}
