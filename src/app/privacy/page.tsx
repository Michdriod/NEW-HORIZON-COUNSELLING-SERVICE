import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | New Horizon Counselling Service",
  description:
    "Learn how New Horizon Counselling Service handles your personal information and maintains confidentiality in counselling sessions.",
};

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="Your privacy is important to us. This policy explains how we handle your information."
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
              1. Information We Collect
            </h2>
            <p>
              When you contact New Horizon Counselling Service through our
              website, WhatsApp, or contact form, we may collect the following
              information:
            </p>
            <ul>
              <li>Your name</li>
              <li>Contact information (phone number, email if provided)</li>
              <li>Any information you voluntarily share in your messages</li>
            </ul>

            <h2>
              2. How the Enquiry Form Works
            </h2>
            <p>
              The enquiry form on our Contact page is delivered by{" "}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web3Forms
              </a>
              , a third-party service. When you submit the form, the name,
              email address, and message you enter pass through Web3Forms&rsquo;
              servers, which forward them to our practice inbox. Web3Forms does
              not retain the content of your message after it has been
              delivered, and this website itself does not store your
              submission.
            </p>
            <p>
              <strong>
                Because your message travels through a third party, please do
                not use the form to share sensitive personal details.
              </strong>{" "}
              Simply let us know that you would like to talk, and we will
              arrange a private session where such matters can be discussed
              confidentially. Messages sent to us on WhatsApp are handled by
              WhatsApp under their own privacy terms.
            </p>

            <h2>
              3. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to:
            </p>
            <ul>
              <li>Respond to your enquiries</li>
              <li>Schedule and manage counselling sessions</li>
              <li>Communicate about your appointments</li>
            </ul>

            <h2>
              4. Confidentiality
            </h2>
            <p>
              All information shared during counselling sessions is kept strictly
              confidential, in accordance with professional ethical standards.
              Details of any exceptions to confidentiality will be discussed
              during your initial session.
            </p>

            <h2>
              5. Data Protection
            </h2>
            <p>
              We take appropriate measures to protect your personal information
              from unauthorised access, disclosure, or misuse. Your data is not
              sold, rented, or shared with third parties for marketing purposes.
            </p>

            <h2>
              6. Third-Party Services
            </h2>
            <p>
              Our website uses WhatsApp for communication. When you click on
              WhatsApp links, you are subject to WhatsApp&apos;s own privacy
              policy. We encourage you to review their privacy practices.
            </p>

            <h2>
              7. Cookies & Analytics
            </h2>
            <p>
              Our website may use basic analytics to understand how visitors
              interact with our site. This helps us improve our services and
              user experience. No personally identifiable information is
              collected through analytics.
            </p>

            <h2>
              8. Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
            </ul>

            <h2>
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or how we
              handle your data, please contact us via WhatsApp at +234 803 452
              2900 or visit our office at 24 Abiodun Oshowole Close, Off
              Oluwaleimu Street, Alle Avenue, Ikeja, Lagos.
            </p>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
