import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { photos } from "@/lib/images";
import { faqGroups } from "@/lib/content";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ | New Horizon Counselling Service",
  description:
    "Get answers to common questions about counselling sessions, confidentiality, online sessions, and booking at New Horizon Counselling Service in Lagos, Nigeria.",
};

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked"
        title="Questions, answered honestly."
        lede="Common questions about our counselling services, sessions, and how we can support you."
        band={{
          photo: photos.anxietyDepression,
          objectPosition: "object-[center_35%]",
        }}
      />

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <div className="space-y-20">
            {faqGroups.map((group, gi) => (
              <div
                key={group.label}
                className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16"
              >
                <Reveal>
                  <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                    {group.label}
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <Accordion items={group.items} defaultOpen={gi === 0 ? 0 : null} />
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-16 text-muted">
              Still deciding?{" "}
              <Link
                href="/book"
                className="link-underline font-semibold text-primary"
              >
                See how booking works
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Still have questions?"
        body="We’re happy to answer anything else you may have. Reach out however suits you best and we’ll get back to you promptly."
        message="Hello, I have a question about your counselling services."
        label="Ask on WhatsApp"
      />
    </>
  );
}
