import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { trustItems } from "@/lib/hero";

type StripVariant =
  /** Hairline-divided row on white — the site's existing treatment, tightened. */
  | "divided"
  /** Lifts up over the hero's bottom edge, so the two read as one unit. */
  | "raised"
  /** Baselines staggered against a single rule, for the asymmetric layout. */
  | "stagger"
  /** Small-caps single line, no boxes — for the most restrained layouts. */
  | "quiet";

interface HeroTrustStripProps {
  variant?: StripVariant;
}

/**
 * The three assurances directly beneath the hero. Each hero variation picks
 * the treatment that makes its own bottom edge resolve naturally, which is
 * the only reason this takes a variant at all.
 */
export default function HeroTrustStrip({
  variant = "divided",
}: HeroTrustStripProps) {
  if (variant === "quiet") {
    return (
      <section className="border-y border-line bg-background">
        <Container>
          <ul className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:py-8">
            {trustItems.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 80}>
                  <p className="eyebrow flex items-center gap-3 text-muted-light">
                    <span className="h-1 w-1 rounded-full bg-highlight" />
                    {item.title}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }

  if (variant === "stagger") {
    return (
      <section className="bg-background">
        <Container>
          <ul className="grid border-t border-line-strong md:grid-cols-3">
            {trustItems.map((item, i) => (
              <li
                key={item.title}
                /* Each item hangs a little lower than the last, echoing the
                   uneven grid above it. */
                className="border-b border-line py-7 md:border-b-0 md:py-0"
                style={{ paddingTop: `${1.75 + i * 0.9}rem` }}
              >
                <Reveal delay={i * 90}>
                  <div className="md:pr-10">
                    <p className="font-display text-[0.95rem] text-highlight-text">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-display text-[1.1rem] text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="h-12 md:h-20" />
        </Container>
      </section>
    );
  }

  if (variant === "raised") {
    return (
      <section className="relative bg-background">
        <Container>
          {/* Pulled up so it sits astride the hero's lower edge. */}
          <div className="-mt-10 overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_20px_44px_-44px_rgba(12,27,51,0.35)] md:-mt-16">
            <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
              {trustItems.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 90}>
                    <div className="px-7 py-7 md:px-9 md:py-9">
                      <p className="font-display text-[1.05rem] text-ink">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-12 md:h-20" />
        </Container>
      </section>
    );
  }

  return (
    <section className="border-y border-line bg-surface">
      <Container>
        <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {trustItems.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 90}>
                <div className="py-8 md:px-9">
                  <p className="font-display text-[1.1rem] text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">
                    {item.body}
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
