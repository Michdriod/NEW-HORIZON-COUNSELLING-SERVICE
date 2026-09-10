import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import PhotoBand from "@/components/PhotoBand";
import { photos } from "@/lib/images";
import { heroCopy } from "@/lib/hero";
import { ArrowLink, HeroEyebrow } from "@/components/HeroParts";

/**
 * The home page opening.
 *
 * The message stands alone on ivory, then a full-bleed band of the
 * counselling room carries the eye downward, with Gabriel's portrait
 * overlapping its lower edge. Nothing is set over the photograph, so the
 * type never depends on a scrim for contrast.
 *
 * This composition sets the language the rest of the site follows: see
 * `PhotoBand`, which the interior pages reuse.
 */
export default function HomeHero() {
  return (
    <section className="field-sand relative overflow-hidden pt-14 md:pt-20">
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <HeroEyebrow className="mb-8" />
          </Reveal>

          <Reveal delay={90}>
            <h1 className="display-tight text-[length:var(--text-display)] text-ink">
              {heroCopy.headline.lead}{" "}
              <span className="text-primary">{heroCopy.headline.emphasis}</span>{" "}
              {heroCopy.headline.tail}
            </h1>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <Reveal delay={180}>
            <p className="max-w-xl text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
              {heroCopy.lede}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="md:pb-1">
              <ContactActions size="lg" whatsappLabel="Book a session" />
              <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-2">
                <p className="text-[0.9rem] font-semibold text-muted">
                  {heroCopy.microcopy}
                </p>
                <ArrowLink href="/services" className="text-primary">
                  Explore our services
                </ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* No portrait or years marker here: the About page introduces
          Gabriel properly, and the band closing straight into the
          assurances strip keeps the first screen calm. */}
      <PhotoBand photo={photos.session} priority className="mt-14 md:mt-20" />
    </section>
  );
}
