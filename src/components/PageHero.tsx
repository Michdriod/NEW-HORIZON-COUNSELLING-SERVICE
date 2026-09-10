import { type ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import PhotoBand from "./PhotoBand";
import type { Photo } from "@/lib/images";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
  /**
   * A full-bleed photographic band closing the hero, matching the home
   * page's opening. Pages that are purely textual (privacy, terms) leave
   * this off.
   */
  band?: {
    photo: Photo;
    objectPosition?: string;
    caption?: string;
  };
}

/**
 * Consistent opening for every interior page: left-aligned, generous top
 * space, and — where the page has a photograph worth showing — the same
 * full-bleed band the home page opens with, so the two read as one site.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
  band,
}: PageHeroProps) {
  return (
    <section
      className={`field-sand relative overflow-hidden pt-14 md:pt-20 ${
        band ? "" : "pb-16 md:pb-24"
      }`}
    >
      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <p className="eyebrow mb-7 flex items-center gap-3 text-highlight-text">
                <span className="h-px w-8 bg-current opacity-60" />
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delay={eyebrow ? 90 : 0}>
            <h1 className="display-tight text-[length:var(--text-h1)] text-ink">
              {title}
            </h1>
          </Reveal>
          {lede && (
            <Reveal delay={170}>
              <p className="mt-7 text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                {lede}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={250}>{children}</Reveal>}
        </div>
      </Container>

      {band && (
        <PhotoBand
          photo={band.photo}
          objectPosition={band.objectPosition}
          caption={band.caption}
          height="md"
          priority
          className="mt-12 md:mt-16"
        />
      )}
    </section>
  );
}
