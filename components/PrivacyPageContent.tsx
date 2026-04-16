"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPageContent() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-[#00FFC2] selection:text-[#050505] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#888888] hover:text-[#EDEDED] transition-colors mb-12 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-[#EDEDED] mb-3">Privacy Policy</h1>
          <p className="text-[#555] text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-10 text-[#BBBBBB] text-sm leading-relaxed">
            <Section title="Overview">
              <p>
                Fovea is a macOS application that captures context from your active workspace —
                including text selections, screenshots, files, and voice input — and assembles
                them into prompts for AI tools. We are committed to protecting your privacy and
                being transparent about what data we collect and how we use it.
              </p>
            </Section>

            <Section title="Data We Collect">
              <SubSection title="Processed on Your Device">
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>
                    <strong className="text-[#BBBBBB]">Microphone audio</strong> — captured for
                    real-time speech transcription. Audio is sent to a transcription service for
                    processing and is not retained on our servers after the transcription is complete.
                  </li>
                  <li>
                    <strong className="text-[#BBBBBB]">Active window content</strong> — screen context
                    such as screenshots, selected text, and URLs from your focused application. When
                    you use Quick Q&amp;A or Prompt Builder, this data may be sent to our backend
                    and forwarded to third-party AI providers to fulfill your request. It is not
                    stored on our servers long-term.
                  </li>
                  <li>
                    <strong className="text-[#BBBBBB]">Browser tab information</strong> — when using
                    the companion extension, page content may be captured for context and included in
                    requests to AI providers as part of your prompt.
                  </li>
                </ul>
              </SubSection>

              <SubSection title="Stored Locally on Your Device">
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>
                    <strong className="text-[#BBBBBB]">History and attachments</strong> — Fovea
                    saves a local history of your sessions, which may include audio recordings,
                    screenshots, text selections, and generated prompts. This data is stored on
                    your device and remains there until you delete it. It is never uploaded to
                    our servers.
                  </li>
                </ul>
              </SubSection>

              <SubSection title="Sent to Our Servers">
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>
                    <strong className="text-[#BBBBBB]">Account information</strong> — email address
                    for authentication and usage tracking.
                  </li>
                  <li>
                    <strong className="text-[#BBBBBB]">Usage metrics</strong> — prompt count and
                    quota usage to manage your subscription.
                  </li>
                  <li>
                    <strong className="text-[#BBBBBB]">Feedback submissions</strong> — if you choose
                    to submit feedback through our feedback form.
                  </li>
                  <li>
                    <strong className="text-[#BBBBBB]">AI processing requests</strong> — when you
                    use Quick Q&amp;A or Prompt Builder, your voice transcription, selected text,
                    screenshots, and other context may be sent to our backend, which forwards them
                    to third-party AI providers to generate responses. This data is used only to
                    fulfill your request and is not stored on our servers after processing.
                  </li>
                </ul>
              </SubSection>
            </Section>

            <Section title="Data We Do NOT Collect">
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                <li>We do not retain your screenshots or voice recordings on our servers after processing.</li>
                <li>We do not track your browsing history.</li>
                <li>We do not sell or share your personal data with third parties for advertising.</li>
              </ul>
              <p className="mt-4 text-[#999999]">
                Note: your device stores a local session history (which may include audio, screenshots,
                and text) until you choose to delete it within the app.
              </p>
            </Section>

            <Section title="Diagnostics and Support Data">
              <p>
                Fovea includes an optional diagnostic reporting feature. Diagnostic data is{" "}
                <strong className="text-[#BBBBBB]">only uploaded when you manually trigger it</strong>{" "}
                (for example, by using the &quot;Send Diagnostic Report&quot; button).
              </p>
              <SubSection title="What is included">
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>Application logs and system information (macOS version, app version).</li>
                  <li>An anonymous, hashed user identifier (not your email or name).</li>
                  <li>Error context relevant to the issue you are reporting.</li>
                </ul>
              </SubSection>
              <SubSection title="What is NOT included">
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>Your voice recordings, screenshots, or prompt content.</li>
                  <li>Your browsing history or file contents.</li>
                  <li>Any personally identifiable information beyond the anonymous hash.</li>
                </ul>
              </SubSection>
              <p className="mt-2 text-[#999999]">
                Diagnostic reports are sent to{" "}
                <strong className="text-[#BBBBBB]">Sentry</strong>, a third-party error tracking
                service, solely for the purpose of improving Fovea&apos;s stability and performance.
              </p>
            </Section>

            <Section title="Third-Party Services">
              <p className="mb-4">
                Fovea integrates with the following categories of third-party services:
              </p>
              <SubSection title="AI Providers">
                <p className="text-[#999999]">
                  When you use Quick Q&amp;A or Prompt Builder, your prompt content (which may
                  include text, screenshots, and other context) is sent to AI providers such as
                  OpenAI, Anthropic, Google, and DeepSeek. Each provider processes your data
                  according to their own privacy policies.
                </p>
              </SubSection>
              <SubSection title="Authentication and Data Storage">
                <p className="text-[#999999]">
                  Fovea uses <strong className="text-[#BBBBBB]">Supabase</strong> for user
                  authentication, account management, and usage quota tracking. Your email address
                  and subscription status are stored in Supabase with encryption at rest and in
                  transit.
                </p>
              </SubSection>
              <SubSection title="Error Tracking">
                <p className="text-[#999999]">
                  Fovea uses <strong className="text-[#BBBBBB]">Sentry</strong> for diagnostic
                  and crash reporting. Diagnostic data is only uploaded when you manually trigger
                  a report (see &quot;Diagnostics and Support Data&quot; above).
                </p>
              </SubSection>
            </Section>

            <Section title="Permissions We Request">
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                <li>
                  <strong className="text-[#BBBBBB]">Microphone</strong> — required for voice
                  transcription.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Accessibility / Apple Events</strong> — required
                  to read content from your active applications and deliver prompts to AI tools.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Screen Recording</strong> — required to capture
                  screenshots of your screen for context collection.
                </li>
              </ul>
            </Section>

            <Section title="Data Security">
              <p>
                We use Supabase for authentication and data storage, which provides encryption at
                rest and in transit. Content sent to AI providers is transmitted over HTTPS. Local
                data on your device is stored in your user-specific application support directory
                and is accessible only to your macOS user account.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have questions about this privacy policy or your data, please reach out
                through our{" "}
                <Link href="/feedback" className="text-[#00FFC2] hover:underline">
                  feedback page
                </Link>
                .
              </p>
            </Section>
          </div>
        </motion.div>

        <footer className="mt-20 text-center">
          <p className="text-[#333] font-mono text-xs tracking-widest">
            &copy; 2026 FOVEA AI. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#EDEDED] mb-4">{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-[#EDEDED] mb-2">{title}</h3>
      {children}
    </div>
  );
}
