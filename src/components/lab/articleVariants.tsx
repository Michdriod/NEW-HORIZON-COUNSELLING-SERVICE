import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoBand from "@/components/PhotoBand";
import ContactActions from "@/components/ContactActions";
import CtaBand from "@/components/CtaBand";
import { articles } from "@/lib/articles";

/* One representative article stands in for the template. */
const article = articles[0];
const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

function BackLink() {
  return (
    <Reveal>
      <Link
        href="/articles"
        className="link-underline mb-9 inline-flex py-2 text-[0.9rem] font-semibold text-muted transition-colors hover:text-ink"
      >
        ← All articles
      </Link>
    </Reveal>
  );
}

function Related() {
  return (
    <section className="field-sand border-t border-line py-14 md:py-20">
      <Container>
        <Reveal>
          <p className="eyebrow mb-8 text-highlight-text">Keep reading</p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 100}>
              <Link href={`/articles/${item.slug}`} className="group block">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.cover.src}
                    alt=""
                    width={item.cover.width}
                    height={item.cover.height}
                    sizes="(max-width: 768px) 100vw, 32rem"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="eyebrow mt-5 block text-highlight-text">
                  {item.category}
                </span>
                <h3 className="mt-3 font-display text-[1.2rem] leading-snug text-ink transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const closing = (
  <CtaBand
    title="Ready to talk it through?"
    body="Reading helps. A conversation helps more. Book a free 15-minute intro call."
    message="Hello, I would like to arrange a free intro call."
  />
);

/* ═══ A · Band opening ══════════════════════════════════════════════════ */

export function ArticleA() {
  return (
    <>
      <section className="field-sand relative overflow-hidden pt-14 md:pt-20">
        <Container>
          <BackLink />
          <Reveal delay={70}>
            <p className="eyebrow mb-6 text-highlight-text">
              {article.category}
            </p>
          </Reveal>
          <Reveal delay={130}>
            <h1 className="display-tight max-w-4xl text-[length:var(--text-h1)] text-ink">
              {article.title}
            </h1>
          </Reveal>
        </Container>

        <PhotoBand photo={article.cover} priority className="mt-12 md:mt-16" />
      </section>

      <article className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <div
              className="prose-nh prose-nh--lede mx-auto text-[1.075rem]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Reveal>
        </Container>
      </article>

      <Related />
      {closing}
    </>
  );
}

/* ═══ B · Sticky meta rail ══════════════════════════════════════════════ */

export function ArticleB() {
  return (
    <>
      <section className="field-sand relative overflow-hidden pt-14 md:pt-20">
        <Container>
          <BackLink />
          <Reveal delay={70}>
            <h1 className="display-tight max-w-4xl text-[length:var(--text-h1)] text-ink">
              {article.title}
            </h1>
          </Reveal>
        </Container>

        <PhotoBand photo={article.cover} priority className="mt-12 md:mt-16" />
      </section>

      <article className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            {/* The rail keeps the category and a booking prompt in view for
                the whole read, so the article always has somewhere to go. */}
            <div>
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <p className="eyebrow text-highlight-text">
                    {article.category}
                  </p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                    Written by Gabriel Ajibade, counsellor and mental health
                    therapist, Lagos.
                  </p>
                  <div className="mt-7 border-t border-line-strong pt-7">
                    <p className="font-display text-[1.05rem] leading-snug text-ink">
                      Talking is often the next step.
                    </p>
                    <ContactActions
                      size="sm"
                      className="mt-5"
                      whatsappLabel="Book a session"
                      message="Hello, I have just read one of your articles and would like to book a session."
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={90}>
              <div
                className="prose-nh prose-nh--lede text-[1.075rem]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </Reveal>
          </div>
        </Container>
      </article>

      <Related />
      {closing}
    </>
  );
}

/* ═══ C · Type-first ════════════════════════════════════════════════════ */

export function ArticleC() {
  return (
    <>
      {/* No cover above the fold: the title is the image. The photograph
          arrives further down, as a breath between sections. */}
      <section className="field-sand relative overflow-hidden pb-14 pt-14 md:pb-20 md:pt-20">
        <Container>
          <BackLink />
          <div className="mx-auto max-w-4xl">
            <Reveal delay={70}>
              <p className="eyebrow mb-7 text-highlight-text">
                {article.category}
              </p>
            </Reveal>
            <Reveal delay={130}>
              <h1 className="display-tight text-[length:var(--text-display)] leading-[1.06] text-ink">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={210}>
              <p className="mt-8 max-w-2xl text-[length:var(--text-lede)] leading-relaxed text-muted text-pretty">
                {article.excerpt}
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-8 border-t border-line-strong pt-6 text-[0.88rem] text-muted">
                Gabriel Ajibade · Counsellor &amp; Mental Health Therapist
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <article className="border-t border-line bg-surface pt-16 md:pt-24">
        <Container>
          <Reveal>
            <div
              className="prose-nh mx-auto text-[1.075rem]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Reveal>
        </Container>

        <PhotoBand
          photo={article.cover}
          height="sm"
          className="mt-16 md:mt-20"
        />
      </article>

      <Related />
      {closing}
    </>
  );
}
