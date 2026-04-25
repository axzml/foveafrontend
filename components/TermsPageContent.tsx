"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function TermsPageContent() {
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
          <h1 className="text-3xl font-bold text-[#EDEDED] mb-3">Terms of Service</h1>
          <p className="text-[#555] text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-10 text-[#BBBBBB] text-sm leading-relaxed">
            <Section title="1. Acceptance of Terms">
              <p>
                By downloading, installing, or using Fovea for Mac (&quot;the Software&quot;),
                you agree to be bound by these Terms of Service and our{" "}
                <Link href="/privacy" className="text-[#00FFC2] hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree to these terms, do not use the Software.
              </p>
            </Section>

            <Section title="2. Your Account">
              <p>
                You must create an account to use Fovea. You are responsible for maintaining the
                security of your account credentials and for all activity that occurs under your
                account. You must notify us immediately if you suspect unauthorized access.
              </p>
            </Section>

            <Section title="3. Your Content">
              <p>
                You retain ownership of all content you provide to the Software, including voice
                input, text selections, screenshots, and files. By using the Software, you grant
                Fovea a limited license to process this content solely for the purpose of providing
                the Services.
              </p>
              <p className="mt-3">
                AI-generated output belongs to you. Fovea makes no representations or warranties
                regarding the accuracy, completeness, or fitness of any AI-generated output.
              </p>
            </Section>

            <Section title="4. Our Services">
              <p>
                Fovea is a macOS application that captures user-triggered voice input, selected
                text, screenshots, and visible screen details, then structures that material for the
                next tool or workflow. The Software is currently in beta. Features may change, and
                the service may be interrupted without prior notice.
              </p>
              <p className="mt-3">
                We grant you a revocable, non-exclusive, non-transferable, limited right to access
                and use the Services in accordance with these Terms.
              </p>
            </Section>

            <Section title="5. Restrictions">
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#999999] mt-2">
                <li>Reverse-engineer, decompile, or disassemble any part of the Software.</li>
                <li>Use the Software to violate any applicable laws or regulations.</li>
                <li>Attempt to circumvent usage quotas or access controls.</li>
                <li>Redistribute, sublicense, or resell the Software without authorization.</li>
                <li>Record or transcribe others&apos; speech without their consent.</li>
                <li>Use the Software to generate content that promotes violence, hatred, or discrimination.</li>
              </ul>
            </Section>

            <Section title="6. Privacy">
              <p>
                Your use of the Services is governed by our{" "}
                <Link href="/privacy" className="text-[#00FFC2] hover:underline">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and handle your personal data. By using the
                Software, you acknowledge that you have read and understood our Privacy Policy.
              </p>
            </Section>

            <Section title="7. Third-Party Services">
              <p>
                Fovea integrates with third-party AI providers to process your prompts. When you
                use these services through Fovea, your content is sent to the respective provider.
                When available and applicable, Fovea may use provider settings intended to limit
                data retention. Third-party providers may still handle your data according to their
                own terms, privacy policies, and account settings. Fovea is not responsible for the
                availability or practices of third-party services.
              </p>
            </Section>

            <Section title="8. Paid Services">
              <p>
                Free trial and subscription terms are displayed within the application. Usage quotas
                apply based on your plan. You may cancel your subscription at any time. Fee changes
                take effect at the next renewal period with reasonable notice.
              </p>
            </Section>

            <Section title="9. Intellectual Property">
              <p>
                Fovea and all related trademarks, logos, and content are the property of Fovea AI.
                These Terms grant no rights to our intellectual property beyond the limited license
                to use the Software.
              </p>
            </Section>

            <Section title="10. Warranty Disclaimers">
              <p className="uppercase text-[#999999]">
                To the maximum extent permitted by applicable law, the Software is provided
                &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                either express or implied. We do not warrant that the Software will be
                uninterrupted, error-free, or free of harmful components.
              </p>
            </Section>

            <Section title="11. Limitation of Liability">
              <p className="uppercase text-[#999999]">
                To the maximum extent permitted by law, Fovea shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of your use of
                the Software, including but not limited to loss of data, loss of profits, or
                business interruption.
              </p>
            </Section>

            <Section title="12. Termination">
              <p>
                We may suspend or terminate your access to the Software at any time if you violate
                these Terms or create risk for Fovea. You may stop using the Software at any time
                by uninstalling it from your device.
              </p>
            </Section>

            <Section title="13. Changes to These Terms">
              <p>
                We may update these Terms from time to time. We will notify you of significant
                changes that reduce your rights. Changes do not apply retroactively. Continued use
                of the Software after changes constitutes acceptance of the updated terms.
              </p>
            </Section>

            <Section title="14. Governing Law">
              <p>
                These Terms are governed by the laws of the State of California, excluding conflict
                of law principles.
              </p>
            </Section>

            <Section title="15. Contact">
              <p>
                If you have questions about these Terms, please reach out through our{" "}
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
