import { type ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}

/**
 * Consistent opening for every interior page: left-aligned, generous
 * top space, and a hairline horizon rule that echoes the logo mark.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: PageHeroProps) {
  return (
    <section className="field-sand relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent-bright/10 blur-[120px]"
      />
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
    </section>
  );
}
