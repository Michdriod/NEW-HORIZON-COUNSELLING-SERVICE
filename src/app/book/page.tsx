import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book a Session | New Horizon Counselling Service",
  description:
    "Book a counselling session with Gabriel Ajibade in Lagos, Nigeria. Simple WhatsApp booking, free 15-minute intro call, online (Google Meet) or in-person sessions in Ikeja.",
};

const bookingSteps = [
  {
    title: "Send a WhatsApp message",
    description:
      'Use the "Book on WhatsApp" button to send a message to New Horizon Counselling Service. Introduce yourself and share a brief reason for seeking counselling.',
  },
  {
    title: "Free intro call",
    description:
      "Gabriel will respond personally and schedule a complimentary 15-minute discovery call. This is an opportunity to discuss your needs and ask any questions before committing to regular sessions.",
  },
  {
    title: "Book your session",
    description:
      "After your intro call, you can book your first session. Gabriel will share available times, session fees, and bank transfer details. Payment happens outside the website via bank transfer.",
  },
];

const notes = [
  {
    k: "No payment on the website",
    v: "Payment is handled via bank transfer after booking. This site never collects card or account details.",
  },
  {
    k: "Free intro call",
    v: "A complimentary 15-minute discovery call is available before your first paid session.",
  },
  {
    k: "Cancellation policy",
    v: "Kindly give at least 24 hours’ notice to reschedule or cancel a session.",
  },
];

const faqs = [
  {
    question: "How long is each session?",
    answer: "Each session lasts 60 minutes.",
  },
  {
    question: "Where are sessions held?",
    answer:
      "Sessions are available online via Google Meet or in person at our office in Ikeja, Lagos.",
  },
  {
    question: "Is there a free consultation?",
    answer:
      "Yes, we offer a complimentary 15-minute intro call to discuss your needs before booking your first session.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment is made via bank transfer after you book your session. Gabriel will share the session fee and bank details during your booking conversation.",
  },
];

export default function Book() {
  return (
    <>
      <PageHero
        eyebrow="Book a session"
        title="It starts with one message."
        lede="Taking the first step towards better mental health and stronger relationships is easier than you think. Here is exactly how it works."
      >
        <div className="mt-9">
          <WhatsAppButton size="lg" label="Book on WhatsApp" />
        </div>
      </PageHero>

      <section className="pb-4">
        <Container>
          <Reveal direction="scale">
            <div className="overflow-hidden rounded-[2rem] border border-line md:rounded-[2.5rem]">
              <Image
                src={photos.session.src}
                alt={photos.session.alt}
                width={photos.session.width}
                height={photos.session.height}
                priority
                sizes="(max-width: 1024px) 100vw, 80rem"
                className="h-56 w-full object-cover object-[center_35%] sm:h-72 md:h-[24rem]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

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
              {notes.map((note, i) => (
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
                <Accordion items={faqs} />
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
        body="Send us a message on WhatsApp and we’ll guide you through the next steps."
      />
    </>
  );
}
