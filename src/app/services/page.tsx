import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import { photos } from "@/lib/images";
import { services, sessionFacts, slugify } from "@/lib/content";

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

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Counselling shaped around your situation."
        lede="Seven services, one standard of care. Every session runs 60 minutes and is available online or in person, and each begins with a free introductory call."
        band={{
          photo: photos.family,
          objectPosition: "object-[center_40%]",
        }}
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
                        emailLabel="Send an email"
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
        body="Take the first step towards better mental health and stronger relationships. Book your session today."
        message="Hello, I would like to book a counselling session."
      />
    </>
  );
}
