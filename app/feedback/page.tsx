import type { Metadata } from "next";
import FeedbackPageContent from "../../components/FeedbackPageContent";
import { buildPageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = buildPageMetadata("en", "feedback");

export default function Page() {
  return <FeedbackPageContent locale="en" />;
}
