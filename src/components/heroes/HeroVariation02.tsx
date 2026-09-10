import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import HeroTrustStrip from "./HeroTrustStrip";
import { heroCopy } from "@/lib/hero";
import { ArrowLink, HeroEyebrow, YearsMark } from "@/components/HeroParts";

/**
 * 02 · Portrait-Led
 *
 * Gabriel is the proposition, so the portrait takes the larger share and
 * bleeds to the right edge of the viewport. The message compresses into a
 * narrow, high-contrast column — less copy, but every line load-bearing.
 *
 * On phones the order inverts deliberately: text and CTA first, portrait
 * beneath as a wide band, so the first screen is an offer rather than a face.
 */
export default function HeroVariation02() {
  return (
    <>
      <section className="field-sand relative overflow-hidden">
        <div className="w-full">
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0">
            {/* Content column keeps the site's normal measure by padding
                itself to where the container edge would have been. */}
            <div className="order-1 px-5 py-14 sm:px-8 md:py-20 lg:py-24 lg:pl-[max(3rem,calc((100vw-84rem)/2+3rem))] lg:pr-16">
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
                <p className="mt-7 max-w-md text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                  {heroCopy.ledeShort}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <ContactActions
                  size="lg"
                  whatsappLabel="Book a session"
                  className="mt-9"
                />
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-5 text-[0.9rem] font-semibold text-muted">
                  {heroCopy.microcopy}
                </p>
              </Reveal>

              <Reveal delay={350}>
                <div className="mt-9 border-t border-line-strong pt-7">
                  <div className="flex items-end justify-between gap-5 sm:justify-start sm:gap-10">
                    <div>
                      <p className="font-display text-[1.15rem] text-ink">
                        {heroCopy.practitioner.name}
                      </p>
                      <p className="mt-0.5 text-[0.85rem] text-muted">
                        {heroCopy.practitioner.role}
                      </p>
                    </div>
                    <YearsMark size="sm" align="left" />
                  </div>
                  <ArrowLink
                    href="/services"
                    className="mt-6 text-primary"
                  >
                    Explore our services
                  </ArrowLink>
                </div>
              </Reveal>
            </div>

            {/* Portrait: full-bleed right on desktop, a calm band on phones. */}
            <Reveal
              direction="fade"
              delay={140}
              className="order-2 px-5 sm:px-8 lg:h-full lg:px-0"
            >
              <div className="h-full overflow-hidden rounded-[2rem] lg:rounded-none lg:rounded-l-[2.5rem]">
                <Image
                  src="/gabriel-portrait.jpg"
                  alt={`${heroCopy.practitioner.name}, counsellor at New Horizon Counselling Service`}
                  width={1050}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="h-64 w-full object-cover object-[center_28%] sm:h-80 lg:h-full lg:min-h-[33rem]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <HeroTrustStrip variant="divided" />
    </>
  );
}
