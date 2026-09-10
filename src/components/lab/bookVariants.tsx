import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactActions from "@/components/ContactActions";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import { photos } from "@/lib/images";
import { bookingSteps, bookingNotes, bookingFaqs } from "@/lib/content";

const hero = {
  eyebrow: "Book a session",
  title: "It starts with one message.",
  lede: "Taking the first step towards better mental health and stronger relationships is easier than you think. Here is exactly how it works.",
};

const closing = (
  <CtaBand
    title="Ready when you are."
    body="Send a message and Gabriel will reply personally, usually the same day."
    message="Hello, I would like to book a counselling session."
  />
);

function Notes() {
  return (
    <ul className="grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
      {bookingNotes.map((note, i) => (
        <li key={note.k}>
          <Reveal delay={i * 90}>
            <div className="py-7 md:px-8">
              <p className="font-display text-[1.05rem] text-ink">{note.k}</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
                {note.v}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ═══ A · Numbered rail ═════════════════════════════════════════════════ */

export function BookA() {
  return (
    <>
      <PageHero
        {...hero}
        band={{ photo: photos.session, objectPosition: "object-[center_35%]" }}
      >
        <div className="mt-9">
          <ContactActions size="lg" />
        </div>
      </PageHero>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <ol className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3">
            {bookingSteps.map((step, i) => (
              <li key={step.title} className="bg-surface">
                <Reveal delay={i * 110}>
                  <div className="flex h-full flex-col p-8 md:p-10">
                    <span className="font-display text-[2.5rem] leading-none text-line-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-6 font-display text-[1.3rem] text-ink">
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

          <div className="mt-14">
            <Notes />
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
            <Reveal>
              <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                Before you book
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <Accordion items={bookingFaqs} defaultOpen={null} />
            </Reveal>
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ B · Vertical thread ═══════════════════════════════════════════════ */

export function BookB() {
  return (
    <>
      <PageHero
        {...hero}
        band={{ photo: photos.session, objectPosition: "object-[center_35%]" }}
      />

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ol>
              {bookingSteps.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 110}>
                    {/* A rule runs down the left edge, connecting the steps
                        into one continuous thread rather than three boxes. */}
                    <div
                      className={`relative grid grid-cols-[3.5rem_1fr] gap-6 pb-12 ${
                        i < bookingSteps.length - 1
                          ? "border-l border-line-strong"
                          : ""
                      } ml-[1.4rem] pl-8`}
                    >
                      <span className="absolute -left-[1.4rem] flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-background font-display text-[0.95rem] text-highlight-text">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="col-span-2">
                        <h2 className="font-display text-[1.4rem] text-ink">
                          {step.title}
                        </h2>
                        <p className="mt-3 leading-relaxed text-muted text-pretty">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={340}>
              <div className="ml-[1.4rem] pl-8">
                <ContactActions size="lg" whatsappLabel="Send the first message" />
                <p className="mt-5 text-[0.9rem] font-semibold text-muted">
                  Free 15-minute intro call
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="field-sand py-14 md:py-20">
        <Container>
          <Notes />
          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={bookingFaqs} defaultOpen={null} />
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ C · Steps beside answers ══════════════════════════════════════════ */

export function BookC() {
  return (
    <>
      <PageHero {...hero}>
        <div className="mt-9">
          <ContactActions size="lg" />
        </div>
      </PageHero>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow mb-8 text-highlight-text">How it works</p>
              </Reveal>
              <ol className="border-t border-line-strong">
                {bookingSteps.map((step, i) => (
                  <li key={step.title}>
                    <Reveal delay={i * 100}>
                      <div className="grid grid-cols-[3rem_1fr] gap-5 border-b border-line py-8">
                        <span className="font-display text-[1.05rem] text-highlight-text">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h2 className="font-display text-[1.3rem] text-ink">
                            {step.title}
                          </h2>
                          <p className="mt-2.5 leading-relaxed text-muted text-pretty">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            {/* Objections answered alongside the process, not after it. */}
            <div className="lg:pt-16">
              <Reveal delay={80}>
                <p className="eyebrow mb-8 text-highlight-text">
                  The practical answers
                </p>
              </Reveal>
              <Reveal delay={140}>
                <Accordion items={bookingFaqs} defaultOpen={null} />
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-10 space-y-5 border-t border-line-strong pt-8">
                  {bookingNotes.map((note) => (
                    <div key={note.k}>
                      <p className="font-display text-[1.02rem] text-ink">
                        {note.k}
                      </p>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                        {note.v}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={280}>
                <Link
                  href="/faq"
                  className="link-underline mt-8 inline-flex py-2 text-[0.9rem] font-semibold text-primary"
                >
                  Read all questions
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}
