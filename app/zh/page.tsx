import type { Metadata } from "next";
import HomePage from "../../components/HomePage";
import { buildPageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = buildPageMetadata("zh", "home");

export default function Page() {
  return <HomePage locale="zh" />;
}
