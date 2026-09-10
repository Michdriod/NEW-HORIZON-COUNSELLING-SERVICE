import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import { photos } from "@/lib/images";
import { faqGroups, slugify } from "@/lib/content";

const hero = {
  eyebrow: "Frequently asked",
  title: "Questions, answered honestly.",
  lede: "Common questions about our counselling services, sessions, and how we can support you.",
};

const band = {
  photo: photos.anxietyDepression,
  objectPosition: "object-[center_35%]",
};

const closing = (
  <CtaBand
    title="Still have a question?"
    body="Ask it directly — Gabriel would rather answer than have you guess."
    message="Hello, I have a question about counselling."
  />
);

/* ═══ A · Grouped accordions ════════════════════════════════════════════ */

export function FaqA() {
  return (
    <>
      <PageHero {...hero} band={band} />

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="space-y-20">
            {faqGroups.map((group) => (
              <div
                key={group.label}
                className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16"
              >
                <Reveal>
                  <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                    {group.label}
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <Accordion items={group.items} defaultOpen={null} />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ B · Open Q&A ══════════════════════════════════════════════════════ */

export function FaqB() {
  return (
    <>
      <PageHero {...hero} band={band} />

      {/* Nothing folded away: someone worried about confidentiality should
          not have to click to find out. */}
      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          {faqGroups.map((group, gi) => (
            <div key={group.label} className={gi > 0 ? "mt-16 md:mt-24" : ""}>
              <Reveal>
                <p className="eyebrow border-b border-line-strong pb-5 text-highlight-text">
                  {group.label}
                </p>
              </Reveal>

              <div className="grid gap-x-16 md:grid-cols-2">
                {group.items.map((item, i) => (
                  <Reveal key={item.question} delay={(i % 2) * 90}>
                    <div className="border-b border-line py-9">
                      <h2 className="font-display text-[1.2rem] leading-snug text-ink">
                        {item.question}
                      </h2>
                      <p className="mt-4 text-[0.95rem] leading-relaxed text-muted text-pretty">
                        {item.answer}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ C · Sticky category rail ══════════════════════════════════════════ */

export function FaqC() {
  return (
    <>
      <PageHero {...hero} band={band} />

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
            {/* A quiet index rather than a navigation widget. */}
            <div>
              <Reveal>
                <nav className="lg:sticky lg:top-32">
                  <p className="eyebrow mb-5 text-muted-light">Sections</p>
                  <ul className="space-y-1 border-l border-line-strong">
                    {faqGroups.map((group) => (
                      <li key={group.label}>
                        <Link
                          href={`#${slugify(group.label)}`}
                          className="-ml-px block border-l border-transparent py-2 pl-5 text-[0.98rem] text-muted transition-colors hover:border-highlight hover:text-ink"
                        >
                          {group.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            </div>

            <div className="space-y-16">
              {faqGroups.map((group) => (
                <div
                  key={group.label}
                  id={slugify(group.label)}
                  className="scroll-mt-32"
                >
                  <Reveal>
                    <h2 className="display-tight mb-7 text-[length:var(--text-h3)] text-ink">
                      {group.label}
                    </h2>
                  </Reveal>
                  <Reveal delay={80}>
                    <Accordion items={group.items} defaultOpen={null} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}
