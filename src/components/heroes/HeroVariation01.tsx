import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import HeroTrustStrip from "./HeroTrustStrip";
import { heroCopy } from "@/lib/hero";
import { ArrowLink, HeroEyebrow, YearsMark } from "@/components/HeroParts";

/**
 * 01 · Editorial Split
 *
 * The existing composition, tightened. Three changes carry it: the headline
 * loses its highlight swash in favour of a colour shift alone, the portrait
 * frame drops its heavy card shadow for a hairline and a taller crop, and
 * the practitioner caption moves outside the image as a proper editorial
 * credit line rather than a boxed footer.
 */
export default function HeroVariation01() {
  return (
    <>
      <section className="field-sand relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div>
              <Reveal>
                <HeroEyebrow className="mb-7" />
              </Reveal>

              <Reveal delay={90}>
                <h1 className="display-tight text-[length:var(--text-display)] text-ink">
                  {heroCopy.headline.lead}{" "}
                  <span className="text-primary">
                    {heroCopy.headline.emphasis}
                  </span>{" "}
                  {heroCopy.headline.tail}
                </h1>
              </Reveal>

              <Reveal delay={180}>
                {/* A gold hairline replaces the swash: same accent, far less
                    decoration competing with the type. */}
                <div className="mt-8 max-w-xl border-l-2 border-highlight/60 pl-6">
                  <p className="text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                    {heroCopy.lede}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <ContactActions
                  size="lg"
                  whatsappLabel="Book a session"
                  className="mt-10"
                />
              </Reveal>

              <Reveal delay={320}>
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

            <Reveal direction="scale" delay={200}>
              <figure>
                <div className="overflow-hidden rounded-[2rem] border border-line bg-surface">
                  <Image
                    src="/gabriel-portrait.jpg"
                    alt={`${heroCopy.practitioner.name}, counsellor at New Horizon Counselling Service`}
                    width={1050}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="h-[21rem] w-full object-cover object-center md:h-[31rem]"
                  />
                </div>

                {/* Credit line sits under the frame, the way a photograph is
                    captioned in print. */}
                <figcaption className="mt-5 flex items-end justify-between gap-5 border-t border-line-strong pt-5">
                  <div>
                    <p className="font-display text-[1.15rem] text-ink">
                      {heroCopy.practitioner.name}
                    </p>
                    <p className="mt-0.5 text-[0.85rem] text-muted">
                      {heroCopy.practitioner.role}
                    </p>
                  </div>
                  <YearsMark size="sm" />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <HeroTrustStrip variant="divided" />
    </>
  );
}
