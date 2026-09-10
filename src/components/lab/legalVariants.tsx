import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

/**
 * Legal pages carry no photography and no calls to action, so the only real
 * design decision is how someone finds the one clause they came for. These
 * two answers are: give them a map, or get out of the way.
 */

const sections = [
  { id: "collect", title: "1. Information We Collect" },
  { id: "form", title: "2. How the Enquiry Form Works" },
  { id: "use", title: "3. How We Use Your Information" },
  { id: "confidentiality", title: "4. Confidentiality" },
  { id: "sharing", title: "5. Information Sharing" },
  { id: "security", title: "6. Data Security" },
  { id: "rights", title: "7. Your Rights" },
  { id: "contact", title: "8. Contact Us" },
];

const body = (
  <>
    <p>
      <strong>Effective Date:</strong> October 2026
    </p>
    <h2 id="collect">1. Information We Collect</h2>
    <p>
      When you contact New Horizon Counselling Service through our website,
      WhatsApp, or contact form, we may collect your name, your contact
      details, and any information you voluntarily share in your messages.
    </p>
    <h2 id="form">2. How the Enquiry Form Works</h2>
    <p>
      The enquiry form on our Contact page is delivered by a third-party
      service. The name, email address, and message you enter pass through
      their servers, which forward them to our practice inbox. This website
      itself does not store your enquiry.
    </p>
    <h2 id="use">3. How We Use Your Information</h2>
    <p>
      To respond to your enquiry, to arrange and hold sessions, and to keep the
      records a counselling practice is required to keep. Nothing more.
    </p>
    <h2 id="confidentiality">4. Confidentiality</h2>
    <p>
      What is said in a session stays in the session. The narrow exceptions —
      risk of serious harm, or a legal obligation — are explained to you before
      any work begins.
    </p>
    <h2 id="sharing">5. Information Sharing</h2>
    <p>
      We do not sell, rent, or trade your information. Where a referral to
      another professional would help, it is discussed with you first.
    </p>
    <h2 id="security">6. Data Security</h2>
    <p>
      Records are held securely and access is limited to the practice. No
      payment details are ever collected through this website.
    </p>
    <h2 id="rights">7. Your Rights</h2>
    <p>
      You may ask what we hold about you, ask for it to be corrected, or ask
      for it to be deleted where we are not required to keep it.
    </p>
    <h2 id="contact">8. Contact Us</h2>
    <p>
      Questions about this policy can be sent to the practice by WhatsApp,
      email, or post to the Ikeja office.
    </p>
  </>
);

/* ═══ A · Contents rail ═════════════════════════════════════════════════ */

export function LegalA() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="Your privacy is important to us. This policy explains how we handle your information."
      />

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div>
              <Reveal>
                <nav className="lg:sticky lg:top-32">
                  <p className="eyebrow mb-5 text-muted-light">Contents</p>
                  <ul className="space-y-1 border-l border-line-strong">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="-ml-px block border-l border-transparent py-1.5 pl-5 text-[0.92rem] leading-snug text-muted transition-colors hover:border-highlight hover:text-ink"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            </div>

            <Reveal delay={90}>
              <div className="prose-nh [&>h2]:scroll-mt-32">{body}</div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ═══ B · Plain column ══════════════════════════════════════════════════ */

export function LegalB() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="Your privacy is important to us. This policy explains how we handle your information."
      />

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container size="narrow">
          <Reveal>
            <div className="prose-nh mx-auto">{body}</div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
