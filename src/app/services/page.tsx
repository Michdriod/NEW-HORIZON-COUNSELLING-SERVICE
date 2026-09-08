import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services | New Horizon Counselling Service",
  description:
    "Professional counselling services in Lagos, Nigeria: marriage counselling, family counselling, premarital counselling, faith-based counselling, anxiety and depression counselling, addiction recovery counselling, and online counselling. 60-minute sessions with 28 years of experience.",
  keywords: [
    "marriage counselling Lagos",
    "family counselling Nigeria",
    "premarital counselling Lagos",
    "online counselling Nigeria",
    "Christian counselling Nigeria",
    "anxiety and depression counselling Lagos",
    "addiction recovery counselling Nigeria",
  ],
};

const services = [
  {
    title: "Marriage Counselling",
    photo: photos.marriage,
    whoFor:
      "For couples at any stage of their marriage who want to strengthen their relationship, resolve conflicts, or improve communication.",
    whatToExpect:
      "In marriage counselling, you and your partner will work with Gabriel in a safe, non-judgmental space. Sessions focus on improving communication patterns, rebuilding trust, deepening emotional intimacy, and developing practical tools for a healthier relationship. Each session lasts 60 minutes and can be conducted online via Google Meet or in person at our Ikeja office.",
  },
  {
    title: "Family Counselling",
    photo: photos.family,
    whoFor:
      "For families navigating challenges such as communication breakdowns, behavioural issues, grief, transitions, or conflict between family members.",
    whatToExpect:
      "Family counselling provides a safe space for all family members to express themselves and be heard. Gabriel helps families identify unhealthy patterns, improve communication, and develop stronger bonds. Sessions are 60 minutes and can be held online or in person, depending on your family’s needs.",
  },
  {
    title: "Premarital Counselling",
    photo: photos.premarital,
    whoFor:
      "For couples preparing for marriage who want to build a strong foundation before saying ‘I do’.",
    whatToExpect:
      "Premarital counselling helps couples explore important topics such as expectations, communication styles, finances, family planning, roles, and conflict resolution. Gabriel provides practical tools and honest conversations that prepare you for a successful marriage. Sessions are 60 minutes, available online or in person.",
  },
  {
    title: "Faith-Based Counselling",
    photo: photos.faith,
    whoFor:
      "For individuals, couples, or families who desire a faith-sensitive approach to their mental health and relationship journey.",
    whatToExpect:
      "Faith-based counselling integrates professional counselling principles with Christian values and spiritual insights. Gabriel respectfully incorporates faith into the therapeutic process for those who desire it. This approach is available for all services and can be conducted online or in person.",
  },
  {
    title: "Anxiety & Depression Counselling",
    photo: photos.anxietyDepression,
    whoFor:
      "For individuals whose thoughts, emotions, relationships, work, sleep, faith, or daily functioning are being affected by anxiety or depression.",
    whatToExpect:
      "Our counselling service provides a safe, confidential, and supportive space where clients can explore what they are experiencing. The goal is to help clients regain emotional stability, improve self-awareness, strengthen resilience, and take practical steps toward recovery. Where symptoms are severe or require medical attention, we also support appropriate referral to qualified healthcare professionals.",
  },
  {
    title: "Addiction Recovery Counselling",
    photo: photos.addictionRecovery,
    whoFor:
      "For individuals seeking freedom from substances, habits, or behaviours that have begun to control their choices, relationships, health, finances, work, or spiritual wellbeing.",
    whatToExpect:
      "Our addiction recovery counselling provides structured, compassionate, and non-judgmental support for individuals seeking freedom from harmful patterns. We help clients identify triggers and the roots of addiction, and build relapse-prevention strategies. Where specialist medical, psychiatric, or rehabilitation support is needed, we work with the client to pursue appropriate referral and coordinated care.",
  },
  {
    title: "Online Counselling",
    photo: photos.online,
    whoFor:
      "For individuals, couples, or families who prefer the convenience of remote sessions from their home or any location.",
    whatToExpect:
      "Online counselling provides the same quality of professional support as in-person sessions, conducted via secure video conferencing (Google Meet). This option offers flexibility for busy schedules, those with mobility challenges, or anyone who prefers the comfort of their own space. Sessions are 60 minutes.",
  },
];

const sessionFacts = [
  { k: "60 minutes", v: "The length of every session, for every service." },
  {
    k: "Online or in person",
    v: "Secure video via Google Meet, or at the Ikeja office.",
  },
  {
    k: "Free intro call",
    v: "A complimentary 15-minute discovery call before you commit.",
  },
];

/** URL-safe anchor for each service section. */
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Counselling shaped around your situation."
        lede="Seven services, one standard of care. Every session runs 60 minutes and is available online or in person, and each begins with a free introductory call."
      />

      {/* Session facts */}
      <section className="border-y border-line bg-surface">
        <Container>
          <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {sessionFacts.map((fact, i) => (
              <li key={fact.k}>
                <Reveal delay={i * 90}>
                  <div className="py-8 md:px-9">
                    <p className="font-display text-[1.15rem] text-ink">
                      {fact.k}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                      {fact.v}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Services */}
      <section className="field-sand py-20 md:py-28">
        <Container>
          <div className="space-y-px overflow-hidden rounded-[1.75rem] border border-line bg-line">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <article
                  id={slugify(service.title)}
                  className="scroll-mt-28 bg-surface p-8 md:p-12"
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* Alternate which side the photograph sits on so the
                        sections do not read as one repeated block. */}
                    <div
                      className={`overflow-hidden rounded-[1.5rem] ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={service.photo.src}
                        alt={service.photo.alt}
                        width={service.photo.width}
                        height={service.photo.height}
                        sizes="(max-width: 1024px) 100vw, 40rem"
                        className="h-56 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-72 lg:h-[24rem]"
                      />
                    </div>

                    <div>
                      <p className="eyebrow mb-5 text-highlight-text">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="display-tight text-[1.75rem] text-ink md:text-[2.15rem]">
                        {service.title}
                      </h2>
                      <p className="mt-6 leading-relaxed text-muted text-pretty">
                        {service.whoFor}
                      </p>

                      <h3 className="eyebrow mb-4 mt-8 text-muted-light">
                        What to expect
                      </h3>
                      <p className="leading-relaxed text-body text-pretty">
                        {service.whatToExpect}
                      </p>

                      <ContactActions
                        size="sm"
                        className="mt-8"
                        whatsappLabel="Ask on WhatsApp"
                        emailLabel="Send a message"
                        message={`Hello, I would like to learn more about ${service.title.toLowerCase()} services.`}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              Session fees are shared privately during the booking conversation,
              and payment is made by bank transfer afterwards. Nothing is
              collected on this website.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Ready to book your session?"
        body="Take the first step towards better mental health and stronger relationships. Book your session on WhatsApp today."
        message="Hello, I would like to book a counselling session."
      />
    </>
  );
}
