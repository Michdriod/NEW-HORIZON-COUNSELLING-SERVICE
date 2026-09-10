import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import HomeHero from "@/components/HomeHero";
import { YearsMark } from "@/components/HeroParts";
import SectionHeading from "@/components/SectionHeading";
import ContactActions from "@/components/ContactActions";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import { articles } from "@/lib/articles";
import { photos } from "@/lib/images";

const services = [
  {
    title: "Marriage Counselling",
    summary:
      "Rebuild trust, communicate without escalation, and deepen the connection you already have.",
    for: "Couples at any stage",
  },
  {
    title: "Family Counselling",
    summary:
      "Untangle the patterns behind recurring conflict and help every voice in the home be heard.",
    for: "Families in transition",
  },
  {
    title: "Premarital Counselling",
    summary:
      "Have the honest conversations about money, family, roles, and faith before you say ‘I do’.",
    for: "Engaged couples",
  },
  {
    title: "Faith-Based Counselling",
    summary:
      "Professional therapeutic work that respectfully holds your faith alongside it.",
    for: "Where clients desire it",
  },
  {
    title: "Anxiety & Depression Counselling",
    summary:
      "Regain emotional stability and self-awareness, and take practical steps toward recovery.",
    for: "When it affects daily life",
  },
  {
    title: "Addiction Recovery Counselling",
    summary:
      "Identify the triggers and roots behind harmful patterns, and build strategies that prevent relapse.",
    for: "Substances, habits, behaviours",
  },
  {
    title: "Online Counselling",
    summary:
      "The same care, wherever you are, through secure video sessions on Google Meet.",
    for: "Anywhere in the world",
  },
];

const steps = [
  {
    title: "Reach out",
    body: "Send a message on WhatsApp. Gabriel replies personally. No forms, no waiting rooms.",
  },
  {
    title: "A free intro call",
    body: "A complimentary 15-minute conversation to understand what you need and whether we’re the right fit.",
  },
  {
    title: "Your first session",
    body: "60 minutes, online via Google Meet or in person at the Ikeja office. Scheduling and fees are agreed beforehand.",
  },
];

const faqs = [
  {
    question: "What should I expect in my first session?",
    answer:
      "We will get to know each other and discuss your reasons for seeking counselling. This initial meeting is an opportunity for you to share your concerns and goals, and to decide whether this feels like the right space for you.",
  },
  {
    question: "Is therapy confidential?",
    answer:
      "Yes. Your privacy is of utmost importance, and all information shared during our sessions is kept strictly confidential.",
  },
  {
    question: "Do I have to be religious to work with you?",
    answer:
      "Not at all. Faith-based counselling is an option, not a default. The practice is welcoming to everyone, and Christian values are incorporated only where a client actively wants a faith-based process.",
  },
];

const credentials = [
  "Certified counsellor & Mental Health Therapist",
  "Marriage and family life counsellor",
  "Counselling educator and mentor",
  "Pastor, faith-sensitive where desired",
];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ── Assurances strip ─────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <Container>
          <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              {
                k: "Strictly confidential",
                v: "What is said in the room stays in the room.",
              },
              {
                k: "60-minute sessions",
                v: "Online via Google Meet, or in person in Ikeja.",
              },
              {
                k: "Faith-optional",
                v: "A Christian process only where you want one.",
              },
            ].map((item, i) => (
              <li key={item.k}>
                <Reveal delay={i * 90}>
                  <div className="px-0 py-8 md:px-9">
                    <p className="font-display text-[1.15rem] text-ink">
                      {item.k}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                      {item.v}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Who we work with ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Who we work with"
            title="Individuals, couples, and families."
            subtitle="Whoever walks in, the work starts the same way: by listening."
            centered={false}
          />

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { photo: photos.individuals, label: "Individuals", note: "Space to think clearly, at your own pace." },
              { photo: photos.couples, label: "Couples", note: "A room where both of you get heard." },
              { photo: photos.families, label: "Families", note: "Untangling the patterns you’re all caught in." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 110}>
                <figure className="group">
                  <div className="overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={item.photo.src}
                      alt={item.photo.alt}
                      width={item.photo.width}
                      height={item.photo.height}
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="h-72 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] md:h-[24rem]"
                    />
                  </div>
                  {/* The caption sits on the ivory beneath the frame rather
                      than over the photograph, so it needs no scrim. */}
                  <figcaption className="mt-5 border-t border-line-strong pt-4">
                    <p className="font-display text-[1.2rem] text-ink">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                      {item.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="field-sand py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Seven ways we can work together"
            subtitle="Every service runs as a 60-minute session, online or in person, and begins with a free introductory call."
            centered={false}
          />

          <div className="border-t border-line">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 60}>
                <Link
                  href="/services"
                  className="group grid items-baseline gap-x-8 gap-y-3 border-b border-line py-8 transition-colors duration-400 hover:bg-white/70 md:grid-cols-[3.5rem_1fr_1.1fr_2.5rem] md:py-10"
                >
                  <span className="font-display text-[0.95rem] text-highlight-text md:text-[1.05rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-[1.4rem] leading-tight text-ink transition-colors duration-400 group-hover:text-primary md:text-[1.75rem]">
                    {service.title}
                    <span className="mt-1.5 block font-body text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-muted-light">
                      {service.for}
                    </span>
                  </h3>

                  <p className="leading-relaxed text-muted text-pretty">
                    {service.summary}
                  </p>

                  <span
                    aria-hidden="true"
                    className="hidden justify-self-end text-ink/25 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-primary md:block"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h13m0 0-5-5m5 5-5 5"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How booking works ────────────────────────────────── */}
      <section className="field-deep grain relative overflow-hidden py-24 text-white md:py-32">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-highlight/10 blur-[130px]"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="How booking works"
            title="Three steps, and no payment on this site."
            subtitle="Booking happens in a conversation. Scheduling, session fees, and bank-transfer details are shared privately once you reach out."
            tone="light"
            centered={false}
          />

          <ol className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-[#08183a]">
                <Reveal delay={i * 110}>
                  <div className="flex h-full flex-col p-8 md:p-10">
                    <span className="font-display text-[2.75rem] leading-none text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 font-display text-[1.35rem] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/65">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>


          <Reveal delay={340}>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ContactActions
                size="lg"
                tone="onDark"
                whatsappLabel="Start on WhatsApp"
                message="Hello, I would like to schedule a free intro call."
              />
              <Link
                href="/book"
                className="link-underline py-2 text-[0.95rem] font-semibold text-white/70 transition-colors hover:text-white"
              >
                Read the full booking process
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── About teaser ─────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow mb-6 flex items-center gap-3 text-highlight-text">
                  <span className="h-px w-8 bg-current opacity-60" />
                  Meet your counsellor
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="display-tight text-[length:var(--text-h2)] text-ink">
                  Gabriel Ajibade
                </h2>
              </Reveal>
              <Reveal delay={170}>
                <ul className="mt-8 space-y-3.5 border-t border-line pt-8">
                  {credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-[0.95rem] text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* The years marker lives here now rather than in the hero —
                  it belongs beside the credentials it summarises. */}
              <Reveal delay={240}>
                <div className="mt-10 flex items-end gap-6 border-t border-line-strong pt-8">
                  <YearsMark size="lg" align="left" />
                  <p className="max-w-[16rem] pb-2 text-[0.9rem] leading-relaxed text-muted">
                    Walking with individuals, couples and families since 1998.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:pt-16">
              <Reveal delay={120}>
                <p className="font-display text-[length:var(--text-h3)] leading-[1.45] text-ink-soft text-pretty">
                  &ldquo;My approach is warm, ethical, practical, and
                  integrative, drawing on sound counselling principles and
                  respectfully holding Christian values where a client wants a
                  faith-based process.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-8 max-w-2xl leading-relaxed text-muted text-pretty">
                  Gabriel is a pastor, certified counsellor, mental health
                  therapist, marriage and family life counsellor, mentor, and
                  counselling educator with twenty-eight years of experience walking
                  alongside people through the hardest conversations of their
                  lives.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Link
                  href="/about"
                  className="link-underline mt-9 inline-flex py-2 text-[0.95rem] font-semibold text-primary"
                >
                  More about Gabriel
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h13m0 0-5-5m5 5-5 5"
                    />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="border-t border-line bg-surface py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Questions"
                title="Before you reach out"
                centered={false}
                className="mb-8 lg:sticky lg:top-32"
              />
            </div>
            <div>
              <Accordion items={faqs} />
              <Reveal delay={120}>
                <Link
                  href="/faq"
                  className="link-underline mt-10 inline-flex py-2 text-[0.95rem] font-semibold text-primary"
                >
                  Read all questions
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h13m0 0-5-5m5 5-5 5"
                    />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Articles ─────────────────────────────────────────── */}
      <section className="field-sand border-t border-line py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Reading room"
            title="Notes on marriage, family, and faith"
            centered={false}
          />
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3">
            {articles.slice(0, 3).map((article, i) => (
              <Reveal key={article.slug} delay={i * 100} className="bg-surface">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col transition-colors duration-400 hover:bg-sand"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={article.cover.src}
                      alt=""
                      width={article.cover.width}
                      height={article.cover.height}
                      sizes="(max-width: 768px) 100vw, 28rem"
                      className="h-48 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 md:p-9">
                  <span className="eyebrow text-highlight-text">
                    {article.category}
                  </span>
                  <h3 className="mt-5 font-display text-[1.3rem] leading-snug text-ink transition-colors duration-400 group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted text-pretty">
                    {article.excerpt}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-primary">
                    Read
                    <svg
                      className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h13m0 0-5-5m5 5-5 5"
                      />
                    </svg>
                  </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to take the first step?"
        body="We’re here to support you towards better mental health and stronger relationships. Reach out today to arrange your free intro call."
        message="Hello, I would like to schedule a free intro call."
      />
    </>
  );
}
