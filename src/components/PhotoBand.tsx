import Image from "next/image";
import { type ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import type { Photo } from "@/lib/images";

interface InsetProps {
  src: string;
  alt: string;
  name: string;
  role: string;
  /** A quiet third line — years of practice, location, and so on. */
  note?: ReactNode;
}

interface PhotoBandProps {
  photo: Photo;
  /** Where the crop should hold as the band gets shorter. */
  objectPosition?: string;
  height?: "sm" | "md" | "lg";
  priority?: boolean;
  /** Overlapping portrait with a credit line, anchored bottom-left. */
  inset?: InsetProps;
  /** Right-aligned marker opposite the inset — usually the years numeral. */
  marker?: ReactNode;
  /** Centred line beneath the band, for bands without an inset. */
  caption?: string;
  className?: string;
}

const heights = {
  sm: "h-44 sm:h-56 md:h-[18rem]",
  md: "h-56 sm:h-72 md:h-[26rem]",
  lg: "h-64 sm:h-80 md:h-[32rem]",
};

/**
 * A full-bleed photographic band — the site's main section transition.
 *
 * Nothing is ever set over the photograph: the credit sits on the ivory
 * beneath it, and the portrait inset overlaps the edge rather than floating
 * in the middle of the frame. That keeps every piece of text on a solid
 * ground, so contrast never depends on a scrim.
 *
 * On phones the inset drops into normal flow beneath the band, where there
 * is room for it to be legible.
 */
export default function PhotoBand({
  photo,
  objectPosition = "object-[center_38%]",
  height = "md",
  priority = false,
  inset,
  marker,
  caption,
  className = "",
}: PhotoBandProps) {
  return (
    <Reveal direction="fade" className={className}>
      <div className="relative">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={priority}
          sizes="100vw"
          className={`w-full object-cover ${objectPosition} ${heights[height]}`}
        />

        {(inset || marker) && (
          <Container className="relative">
            {inset && (
              <div className="mt-5 flex items-end gap-5 sm:absolute sm:-bottom-24 sm:left-8 sm:mt-0 lg:-bottom-28 lg:left-12">
                <div className="h-52 w-44 shrink-0 overflow-hidden rounded-[1.5rem] border-4 border-background bg-surface sm:h-64 sm:w-56 lg:h-[23rem] lg:w-[19rem]">
                  <Image
                    src={inset.src}
                    alt={inset.alt}
                    width={1050}
                    height={900}
                    priority={priority}
                    sizes="(max-width: 640px) 11rem, (max-width: 1024px) 14rem, 19rem"
                    className="h-full w-full object-cover object-[center_15%]"
                  />
                </div>
                <div className="pb-2">
                  <p className="font-display text-[1.1rem] text-ink">
                    {inset.name}
                  </p>
                  <p className="mt-0.5 text-[0.82rem] text-muted">
                    {inset.role}
                  </p>
                  {inset.note}
                </div>
              </div>
            )}

            {marker && (
              <div className="absolute -bottom-20 right-5 hidden sm:right-8 sm:block lg:-bottom-24 lg:right-12">
                {marker}
              </div>
            )}
          </Container>
        )}
      </div>

      {caption && (
        <Container>
          <p className="mx-auto mt-7 max-w-2xl text-center leading-relaxed text-muted text-pretty">
            {caption}
          </p>
        </Container>
      )}

      {/* Clearance for whatever overlaps the band's lower edge. */}
      {(inset || marker) && <div className="h-10 sm:h-36 lg:h-44" />}
    </Reveal>
  );
}
