import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PhotoBand from "@/components/PhotoBand";
import ContactActions from "@/components/ContactActions";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import { photos } from "@/lib/images";
import { services, sessionFacts, slugify } from "@/lib/content";

const hero = {
  eyebrow: "What we offer",
  title: "Counselling shaped around your situation.",
  lede: "Seven services, one standard of care. Every session runs 60 minutes and is available online or in person, and each begins with a free introductory call.",
};

function SessionFacts() {
  return (
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
  );
}

const closing = (
  <CtaBand
    title="Ready to book your session?"
    body="Take the first step towards better mental health and stronger relationships. Book your session today."
    message="Hello, I would like to book a counselling session."
  />
);

/* ═══ A · Indexed spreads ═══════════════════════════════════════════════ */

export function ServicesA() {
  return (
    <>
      <PageHero
        {...hero}
        band={{ photo: photos.family, objectPosition: "object-[center_40%]" }}
      />
      <SessionFacts />

      {/* The index: seven services are too many to scroll blindly. */}
      <section className="pt-16 md:pt-20">
        <Container>
          <Reveal>
            <p className="eyebrow mb-6 text-highlight-text">The seven</p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="grid gap-x-10 gap-y-3 border-y border-line-strong py-7 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <li key={service.title}>
                  <a
                    href={`#${slugify(service.title)}`}
                    className="group flex items-baseline gap-4 py-1 text-[0.98rem] text-muted transition-colors hover:text-ink"
                  >
                    <span className="font-display text-[0.85rem] text-highlight-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="link-underline">{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Spreads, no card borders — the page reads as one document. */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={60}>
                <article
                  id={slugify(service.title)}
                  className="scroll-mt-28 border-t border-line pt-10 md:pt-14"
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
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
                        className="h-56 w-full object-cover sm:h-72 lg:h-[22rem]"
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
                        message={`Hello, I would like to learn more about ${service.title.toLowerCase()} services.`}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ B · Full-bleed chapters ═══════════════════════════════════════════ */

export function ServicesB() {
  return (
    <>
      <PageHero
        {...hero}
        band={{ photo: photos.family, objectPosition: "object-[center_40%]" }}
      />
      <SessionFacts />

      <div className="pb-16 md:pb-24">
        {services.map((service, i) => (
          <section
            key={service.title}
            id={slugify(service.title)}
            className={`scroll-mt-28 pt-16 md:pt-24 ${
              i % 2 === 1 ? "bg-sand" : ""
            }`}
          >
            <Container>
              <Reveal>
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-[0.95rem] text-highlight-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display-tight max-w-3xl text-[length:var(--text-h2)] text-ink">
                    {service.title}
                  </h2>
                </div>
              </Reveal>
            </Container>

            <PhotoBand
              photo={service.photo}
              height="sm"
              className="mt-10 md:mt-12"
            />

            <Container>
              <div className="grid gap-10 pt-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pt-14">
                <Reveal>
                  <p className="text-[length:var(--text-lede)] leading-relaxed text-ink-soft text-pretty">
                    {service.whoFor}
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <div>
                    <h3 className="eyebrow mb-4 text-muted-light">
                      What to expect
                    </h3>
                    <p className="leading-relaxed text-body text-pretty">
                      {service.whatToExpect}
                    </p>
                    <ContactActions
                      size="sm"
                      className="mt-8"
                      whatsappLabel="Ask on WhatsApp"
                      message={`Hello, I would like to learn more about ${service.title.toLowerCase()} services.`}
                    />
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {closing}
    </>
  );
}

/* ═══ C · Grid with detail on demand ════════════════════════════════════ */

export function ServicesC() {
  return (
    <>
      <PageHero
        {...hero}
        band={{ photo: photos.family, objectPosition: "object-[center_40%]" }}
      />
      <SessionFacts />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article
                  id={slugify(service.title)}
                  className="flex h-full scroll-mt-28 flex-col"
                >
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={service.photo.src}
                      alt={service.photo.alt}
                      width={service.photo.width}
                      height={service.photo.height}
                      sizes="(max-width: 768px) 100vw, 24rem"
                      className="h-52 w-full object-cover"
                    />
                  </div>

                  <p className="eyebrow mt-6 text-highlight-text">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-[1.3rem] leading-snug text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted text-pretty">
                    {service.whoFor}
                  </p>

                  {/* The long copy folds away so all seven stay visible. */}
                  <div className="mt-4">
                    <Accordion
                      defaultOpen={null}
                      items={[
                        {
                          question: "What to expect",
                          answer: service.whatToExpect,
                        },
                      ]}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-14 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              Session fees are shared privately during the booking conversation,
              and payment is made by bank transfer afterwards. Nothing is
              collected on this website.
            </p>
          </Reveal>
        </Container>
      </section>

      {closing}
    </>
  );
}
