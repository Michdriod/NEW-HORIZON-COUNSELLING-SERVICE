import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import HeroTrustStrip from "./HeroTrustStrip";
import { heroCopy } from "@/lib/hero";
import { HeroEyebrow, YearsLine } from "@/components/HeroParts";

/**
 * 06 · Minimal Luxury
 *
 * Six visible elements, generous air, and one focal point. The years marker
 * is demoted from a numeral to a line of text so the headline is the only
 * thing with weight; the portrait becomes a modest 4:5 frame rather than a
 * card. Everything else — services link, credentials, assurances — waits
 * for the scroll.
 */
export default function HeroVariation06() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pb-24 pt-20 md:pb-32 md:pt-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">
            <div>
              <Reveal>
                <HeroEyebrow className="mb-10" />
              </Reveal>

              <Reveal delay={100}>
                <h1 className="display-tight text-[length:var(--text-display)] text-ink">
                  {heroCopy.headline.lead}{" "}
                  <span className="text-primary">
                    {heroCopy.headline.emphasis}
                  </span>{" "}
                  {heroCopy.headline.tail}
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-9 max-w-lg text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                  {heroCopy.ledeShort}
                </p>
              </Reveal>

              <Reveal delay={280}>
                {/* One primary action; the written enquiry stays available
                    but recedes to a text weight. */}
                <ContactActions
                  size="lg"
                  whatsappLabel="Book a session"
                  emailLabel="Send an email"
                  className="mt-11"
                />
              </Reveal>

              <Reveal delay={340}>
                <p className="mt-6 text-[0.9rem] font-semibold text-muted">
                  {heroCopy.microcopy}
                </p>
              </Reveal>
            </div>

            <Reveal direction="scale" delay={220}>
              <figure className="lg:max-w-[26rem] lg:justify-self-end">
                <div className="overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/gabriel-portrait.jpg"
                    alt={`${heroCopy.practitioner.name}, counsellor at New Horizon Counselling Service`}
                    width={1050}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 26rem"
                    className="aspect-[4/3] w-full object-cover object-[center_18%] sm:aspect-[4/5]"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-display text-[1.05rem] text-ink">
                    {heroCopy.practitioner.name}
                  </p>
                  <p className="mt-0.5 text-[0.82rem] text-muted">
                    {heroCopy.practitioner.role}
                  </p>
                  <YearsLine className="mt-3" />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <HeroTrustStrip variant="quiet" />
    </>
  );
}
