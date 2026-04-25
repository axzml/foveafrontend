import type { Metadata } from "next";
import PricingPageContent from "../../../components/PricingPageContent";
import { buildPageMetadata } from "../../../lib/site-metadata";

export const metadata: Metadata = buildPageMetadata("zh", "pricing");

export default function Page() {
  return <PricingPageContent locale="zh" />;
}
