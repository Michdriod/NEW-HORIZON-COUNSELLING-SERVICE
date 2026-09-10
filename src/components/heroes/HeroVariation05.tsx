import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import HeroTrustStrip from "./HeroTrustStrip";
import { heroCopy } from "@/lib/hero";
import { ArrowLink, HeroEyebrow } from "@/components/HeroParts";

/* Three facts, set like a specification rather than a sales claim. */
const ledger = [
  { value: String(heroCopy.practitioner.years), label: "Years of practice" },
  { value: "1998", label: "Practising since" },
  { value: "7", label: "Areas of counselling" },
];

/**
 * 05 · Trust-Led
 *
 * Answers "can I trust him?" in the first screen without turning into a
 * sales page. The device is a ledger — three numerals on a hairline rule,
 * stated flatly — plus a short credential list under the portrait. No
 * badges, no icons, no testimonial cards.
 */
export default function HeroVariation05() {
  return (
    <>
      <section className="field-sand relative overflow-hidden pb-24 pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <HeroEyebrow className="mb-7" />
              </Reveal>

              <Reveal delay={90}>
                <h1 className="display-tight text-[length:var(--text-h1)] text-ink">
                  {heroCopy.headline.lead}{" "}
                  <span className="text-primary">
                    {heroCopy.headline.emphasis}
                  </span>{" "}
                  {heroCopy.headline.tail}
                </h1>
              </Reveal>

              <Reveal delay={170}>
                <p className="mt-7 max-w-xl text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                  {heroCopy.lede}
                </p>
              </Reveal>

              {/* The ledger. Numerals in gold, labels quiet — the same
                  hierarchy the site already uses for the years marker. */}
              <Reveal delay={230}>
                <dl className="mt-10 grid grid-cols-3 gap-x-6 border-y border-line-strong py-7">
                  {ledger.map((entry) => (
                    <div key={entry.label}>
                      <dt className="sr-only">{entry.label}</dt>
                      <dd>
                        <span className="block font-display text-[1.9rem] leading-none text-highlight md:text-[2.4rem]">
                          {entry.value}
                        </span>
                        <span className="mt-2 block text-[0.78rem] font-semibold uppercase leading-tight tracking-[0.1em] text-muted">
                          {entry.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={290}>
                <ContactActions
                  size="lg"
                  whatsappLabel="Book a session"
                  className="mt-9"
                />
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2">
                  <p className="text-[0.9rem] font-semibold text-muted">
                    {heroCopy.microcopy}
                  </p>
                  <ArrowLink href="/services" className="text-primary">
                    Explore our services
                  </ArrowLink>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal direction="scale" delay={200}>
                <div className="overflow-hidden rounded-[2rem] border border-line bg-surface">
                  <Image
                    src="/gabriel-portrait.jpg"
                    alt={`${heroCopy.practitioner.name}, counsellor at New Horizon Counselling Service`}
                    width={1050}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="h-72 w-full object-cover object-center md:h-[24rem]"
                  />
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-6">
                  <p className="font-display text-[1.2rem] text-ink">
                    {heroCopy.practitioner.name}
                  </p>
                  <p className="mt-0.5 text-[0.88rem] text-muted">
                    {heroCopy.practitioner.role}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {heroCopy.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <HeroTrustStrip variant="raised" />
    </>
  );
}
