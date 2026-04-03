import type { Metadata } from "next";
import DownloadPageContent from "../../../components/DownloadPageContent";
import { buildPageMetadata } from "../../../lib/site-metadata";

export const metadata: Metadata = buildPageMetadata("zh", "download");

export default function Page() {
  return <DownloadPageContent locale="zh" />;
}
