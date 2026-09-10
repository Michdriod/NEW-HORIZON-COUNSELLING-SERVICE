import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import HeroTrustStrip from "./HeroTrustStrip";
import { heroCopy } from "@/lib/hero";
import { ArrowLink, HeroEyebrow, YearsMark } from "@/components/HeroParts";

/**
 * 03 · Asymmetrical Editorial
 *
 * A 12-column grid used unevenly on purpose. The headline starts at column
 * one and runs wide; the portrait occupies columns 7–12 but is pushed up out
 * of the text's rhythm; the CTA block sits low-left in the whitespace the
 * offset creates, and the years marker anchors the gap between them.
 *
 * The single overlap — the portrait crossing the closing rule — is the only
 * liberty taken. Everything else stays on the grid.
 */
export default function HeroVariation03() {
  return (
    <>
      <section className="field-sand relative overflow-hidden pb-16 pt-14 md:pb-20 md:pt-16">
        <Container>
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
            {/* Eyebrow spans the full measure as a masthead rule. */}
            <div className="order-1 lg:order-none lg:col-span-12">
              <Reveal>
                <div className="flex items-center justify-between gap-6 border-b border-line-strong pb-6">
                  <HeroEyebrow />
                  <p className="hidden text-[0.85rem] text-muted sm:block">
                    Ikeja, Lagos &amp; online
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Headline: wide, starting hard left. */}
            <div className="order-2 lg:order-none lg:col-span-7 lg:pt-10">
              <Reveal delay={90}>
                <h1 className="display-tight text-[length:var(--text-h1)] text-ink">
                  {heroCopy.headline.lead}{" "}
                  <span className="text-primary">
                    {heroCopy.headline.emphasis}
                  </span>{" "}
                  {heroCopy.headline.tail}
                </h1>
              </Reveal>
            </div>

            {/* Portrait: offset upward, deliberately out of step. */}
            <div className="order-4 lg:order-none lg:col-span-5 lg:-mt-6 lg:pl-6">
              <Reveal direction="scale" delay={180}>
                <div className="overflow-hidden rounded-[2rem] border border-line bg-surface">
                  <Image
                    src="/gabriel-portrait.jpg"
                    alt={`${heroCopy.practitioner.name}, counsellor at New Horizon Counselling Service`}
                    width={1050}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="h-72 w-full object-cover object-[center_18%] md:h-[25rem]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <p className="font-display text-[1.05rem] text-ink">
                    {heroCopy.practitioner.name}
                  </p>
                  <p className="text-[0.8rem] text-muted">
                    {heroCopy.practitioner.role}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Low-left block: lede, CTA, years — sitting in the whitespace
                the portrait's offset opens up. */}
            <div className="order-3 lg:order-none lg:col-span-6 lg:col-start-1 lg:-mt-[11rem]">
              <Reveal delay={220}>
                <p className="max-w-xl text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                  {heroCopy.lede}
                </p>
              </Reveal>

              <Reveal delay={280}>
                <ContactActions
                  size="lg"
                  whatsappLabel="Book a session"
                  className="mt-9"
                />
              </Reveal>

              <Reveal delay={330}>
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

            <div className="order-5 lg:order-none lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-2">
              <Reveal delay={300}>
                <div className="flex items-end gap-5 border-t border-line-strong pt-6 lg:justify-end">
                  <YearsMark size="lg" align="left" />
                  <p className="max-w-[14rem] pb-2 text-[0.88rem] leading-relaxed text-muted">
                    Walking with individuals, couples and families since 1998.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <HeroTrustStrip variant="stagger" />
    </>
  );
}
