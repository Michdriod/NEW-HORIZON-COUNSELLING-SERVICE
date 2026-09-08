import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use | New Horizon Counselling Service",
  description:
    "Terms and conditions for using the New Horizon Counselling Service website and booking counselling sessions.",
};

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lede="Please read these terms carefully before using our website and services."
      />

      {/* Content */}
      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
          <div className="prose-nh">
            <p>
              <strong>Effective Date:</strong> October 2026
            </p>

            <h2>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the New Horizon Counselling Service
              website, you accept and agree to be bound by these Terms of Use.
              If you do not agree to these terms, please do not use our website.
            </p>

            <h2>
              2. About Our Services
            </h2>
            <p>
              New Horizon Counselling Service provides professional counselling
              services including marriage counselling, family counselling,
              premarital counselling, faith-based counselling, and online
              counselling. Our services are provided by Gabriel Ajibade, a
              certified counsellor and Mental Health Therapist.
            </p>

            <h2>
              3. Booking & Payment
            </h2>
            <p>
              Sessions are booked through WhatsApp. There is no payment
              processing on this website. Payment for sessions is made via bank
              transfer after booking. Session fees and bank details are shared
              during the booking process.
            </p>

            <h2>
              4. Cancellation Policy
            </h2>
            <p>
              We kindly ask for at least 24 hours&apos; notice to reschedule or
              cancel a session. This allows us to better serve all our clients.
            </p>

            <h2>
              5. Emergency Situations
            </h2>
            <p>
              New Horizon Counselling Service is not an emergency service. If you
              are in crisis or danger, please contact a local emergency number
              or hospital immediately. In Nigeria, you can reach the Nigeria
              Emergency Management Agency (NEMA) at 112 or 199.
            </p>

            <h2>
              6. Website Content
            </h2>
            <p>
              The content on this website is provided for general information
              purposes only. While we strive to keep information accurate and
              up-to-date, we make no representations or warranties of any kind
              about the completeness, accuracy, or reliability of the content.
            </p>

            <h2>
              7. Limitation of Liability
            </h2>
            <p>
              New Horizon Counselling Service shall not be held liable for any
              indirect, incidental, or consequential damages arising from the
              use of our website or services.
            </p>

            <h2>
              8. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Changes
              will be posted on this page with an updated effective date.
              Continued use of the website after changes constitutes acceptance
              of the new terms.
            </p>

            <h2>
              9. Contact
            </h2>
            <p>
              For questions about these Terms of Use, please contact us via
              WhatsApp at +234 803 452 2900 or visit our office at 24 Abiodun
              Oshowole Close, Off Oluwaleimu Street, Alle Avenue, Ikeja, Lagos.
            </p>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
