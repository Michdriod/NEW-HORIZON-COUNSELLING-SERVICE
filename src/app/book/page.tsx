import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import { photos } from "@/lib/images";
import { bookingSteps, bookingNotes, bookingFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Session | New Horizon Counselling Service",
  description:
    "Book a counselling session with Gabriel Ajibade in Lagos, Nigeria. Simple WhatsApp booking, free 15-minute intro call, online (Google Meet) or in-person sessions in Ikeja.",
};

export default function Book() {
  return (
    <>
      <PageHero
        eyebrow="Book a session"
        title="It starts with one message."
        lede="Taking the first step towards better mental health and stronger relationships is easier than you think. Here is exactly how it works."
        band={{
          photo: photos.session,
          objectPosition: "object-[center_35%]",
        }}
      >
        <div className="mt-9">
          <ContactActions size="lg" />
        </div>
      </PageHero>

      {/* Steps */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <ol className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3">
            {bookingSteps.map((step, i) => (
              <li key={step.title} className="bg-surface">
                <Reveal delay={i * 110}>
                  <div className="flex h-full flex-col p-8 md:p-10">
                    <span className="font-display text-[2.75rem] leading-none text-line-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-6 font-display text-[1.35rem] text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted text-pretty">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Notes */}
      <section className="field-sand py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <Reveal>
              <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                Before you book
              </h2>
            </Reveal>
            <div className="divide-y divide-line border-y border-line">
              {bookingNotes.map((note, i) => (
                <Reveal key={note.k} delay={i * 80}>
                  <div className="grid gap-2 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                    <h3 className="font-display text-[1.2rem] text-ink">
                      {note.k}
                    </h3>
                    <p className="leading-relaxed text-muted text-pretty">
                      {note.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Booking FAQs */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <Reveal>
              <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                Booking questions
              </h2>
            </Reveal>
            <div>
              <Reveal delay={80}>
                <Accordion items={bookingFaqs} />
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-9 text-muted">
                  For everything else, see the{" "}
                  <Link
                    href="/faq"
                    className="link-underline font-semibold text-primary"
                  >
                    full FAQ
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to get started?"
        body="Send us a message and we’ll guide you through the next steps."
      />
    </>
  );
}
