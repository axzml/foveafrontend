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
            <Section title="Introduction">
              <p>
                This Privacy Policy describes how Fovea (&quot;Fovea&quot; or &quot;Company&quot;)
                collects, uses, and handles your personal data when you use our macOS application
                and related services (collectively, the &quot;Services&quot;). By using the Services,
                you agree to the practices described in this policy.
              </p>
            </Section>

            <Section title="Information We Collect">
              <SubSection title="Customer Content You Provide">
                <p className="text-[#999999]">
                  Your voice inputs, text selections, screenshots, and other contextual information
                  are processed in real time by Fovea and/or third-party AI providers to provide the
                  requested result, and are immediately discarded once the result is returned to your
                  device. No voice recordings, prompt content, or screen context
                  data are stored on our servers after processing.
                </p>
                <p className="text-[#999999] mt-3">
                  Your device may store a local session history — including audio, screenshots, and
                  generated prompts — until you choose to delete it. This local data is not
                  automatically uploaded to our servers unless you explicitly re-submit a previous
                  request.
                </p>
              </SubSection>

              <SubSection title="Account Information">
                <p className="text-[#999999]">
                  When you create an account, we collect your email address for authentication and
                  usage tracking. We also collect usage metrics such as prompt count and quota usage
                  to manage your subscription.
                </p>
              </SubSection>

              <SubSection title="Diagnostic Information">
                <p className="text-[#999999]">
                  If you voluntarily submit a diagnostic report, we collect application logs, system
                  information, and an anonymous identifier to help resolve issues. Diagnostic data
                  is only uploaded when you manually trigger it. It does not include your voice
                  recordings, screenshots, prompt content, or any personally identifiable information
                  beyond the anonymous identifier.
                </p>
              </SubSection>

              <SubSection title="Usage Data">
                <p className="text-[#999999]">
                  We may collect information related to how you interact with the Services, including
                  device type, app version, and performance metrics. This data is used to improve
                  the Services and is not linked to your prompt content.
                </p>
              </SubSection>
            </Section>

            <Section title="Use of Data">
              <p>Fovea uses the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-[#999999] mt-3">
                <li>
                  <strong className="text-[#BBBBBB]">Service operation</strong> — Your voice data
                  and contextual information are processed in real time and are not retained after
                  delivering results to your device.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Account management</strong> — Managing your
                  subscription, authentication, and usage quotas.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Communication</strong> — Responding to support
                  requests and sending service-related notifications.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Improvement</strong> — Analyzing usage patterns
                  and diagnostic reports to improve the Services.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Compliance</strong> — Meeting applicable legal
                  obligations.
                </li>
              </ul>
            </Section>

            <Section title="Data We Do NOT Collect">
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                <li>Fovea does not retain your voice recordings, screenshots, or prompt content on its servers after processing.</li>
                <li>Fovea does not use your content to train its own models.</li>
                <li>We do not track your browsing history.</li>
                <li>We do not sell your data or share it with third parties for advertising.</li>
              </ul>
            </Section>

            <Section title="Sharing With Others">
              <p className="mb-3">We may share your information with the following parties:</p>
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                <li>
                  <strong className="text-[#BBBBBB]">AI service providers</strong> — When you use
                  Fovea&apos;s features, your prompt content may be sent to third-party AI providers
                  to generate responses. These providers process your data under their own terms,
                  privacy policies, and retention settings. Where provider features intended to
                  limit data retention are available, Fovea enables them where applicable.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Infrastructure providers</strong> — We use
                  third-party services for authentication, data storage, and error tracking. These
                  providers have access to your data only to perform tasks on our behalf and are
                  obligated not to use it for any other purpose.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Legal compliance</strong> — We may disclose
                  information when required by law or to protect our rights.
                </li>
              </ul>
            </Section>

            <Section title="Retention of Data">
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                <li>
                  <strong className="text-[#BBBBBB]">Voice and context data</strong> — Processed in
                  real time and immediately discarded once the result is returned to your device.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Local session history</strong> — Stored on your
                  device until you choose to delete it.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Account and billing information</strong> —
                  Retained as necessary to provide Services, comply with legal obligations, and
                  resolve disputes.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Diagnostic reports</strong> — Retained only as
                  needed to resolve the reported issue.
                </li>
              </ul>
            </Section>

            <Section title="Permissions We Request">
              <ul className="list-disc list-inside space-y-2 text-[#999999]">
                <li>
                  <strong className="text-[#BBBBBB]">Microphone</strong> — Required for voice input.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Accessibility</strong> — Required to read
                  content from your active applications and deliver results to AI tools.
                </li>
                <li>
                  <strong className="text-[#BBBBBB]">Screen Recording</strong> — Required to capture
                  screen context for your prompts.
                </li>
              </ul>
            </Section>

            <Section title="How We Secure Your Information">
              <p>
                We implement technical and organizational safeguards to protect the information we
                collect from loss, misuse, and unauthorized access. All data in transit is encrypted
                via HTTPS. However, no method of transmission over the internet is 100% secure.
              </p>
            </Section>

            <Section title="Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the
                &quot;Last updated&quot; date at the top of this page. We will notify you of any
                significant changes that reduce your rights. Changes do not apply retroactively.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have questions about this Privacy Policy or your data, please reach out
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
            &copy; 2026 FOVEA. ALL RIGHTS RESERVED.
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
