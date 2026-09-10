import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PhotoBand from "@/components/PhotoBand";
import CtaBand from "@/components/CtaBand";
import { photos } from "@/lib/images";
import { articles } from "@/lib/articles";

const hero = {
  eyebrow: "Reading room",
  title: "Articles & resources",
  lede: "Insights, advice, and resources to support your mental health and relationship journey.",
};

const band = { photo: photos.online, objectPosition: "object-[center_35%]" };

const closing = (
  <CtaBand
    title="Would rather talk than read?"
    body="A free 15-minute intro call is often the quickest way to know whether counselling is right for you."
    message="Hello, I would like to arrange a free intro call."
  />
);

/* ═══ A · Editorial rows ════════════════════════════════════════════════ */

export function ArticlesA() {
  return (
    <>
      <PageHero {...hero} band={band} />

      <section className="border-t border-line bg-surface py-14 md:py-20">
        <Container>
          <div className="border-t border-line">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group grid gap-x-10 gap-y-5 border-b border-line py-8 transition-colors duration-400 hover:bg-sand/60 md:grid-cols-[16rem_1fr_2.5rem] md:items-center md:py-10"
                >
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={article.cover.src}
                      alt={article.cover.alt}
                      width={article.cover.width}
                      height={article.cover.height}
                      sizes="(max-width: 768px) 100vw, 16rem"
                      className="h-48 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] md:h-36"
                    />
                  </div>
                  <div>
                    <span className="eyebrow text-highlight-text">
                      {article.category}
                    </span>
                    <h2 className="mt-4 font-display text-[1.4rem] leading-snug text-ink transition-colors duration-400 group-hover:text-primary md:text-[1.6rem]">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted text-pretty">
                      {article.excerpt}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden justify-self-end text-ink/25 transition-all duration-400 group-hover:translate-x-1 group-hover:text-primary md:block"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ B · Lead story ════════════════════════════════════════════════════ */

export function ArticlesB() {
  const [lead, ...rest] = articles;

  return (
    <>
      <section className="field-sand relative overflow-hidden pt-14 md:pt-20">
        <Container>
          <Reveal>
            <p className="eyebrow mb-7 flex items-center gap-3 text-highlight-text">
              <span className="h-px w-8 bg-current opacity-60" />
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-tight max-w-3xl text-[length:var(--text-h1)] text-ink">
              {hero.title}
            </h1>
          </Reveal>

          {/* The newest piece is promoted into the hero itself. */}
          <Reveal delay={180}>
            <Link href={`/articles/${lead.slug}`} className="group mt-10 block">
              <span className="eyebrow text-highlight-text">
                {lead.category}
              </span>
              <h2 className="mt-4 max-w-3xl font-display text-[length:var(--text-h2)] leading-[1.15] text-ink transition-colors duration-400 group-hover:text-primary">
                {lead.title}
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted text-pretty">
                {lead.excerpt}
              </p>
              <span className="link-underline mt-6 inline-flex py-2 text-[0.9rem] font-semibold text-primary">
                Read the article →
              </span>
            </Link>
          </Reveal>
        </Container>

        <PhotoBand
          photo={lead.cover}
          priority
          className="mt-12 md:mt-16"
        />
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow mb-10 text-muted-light">More reading</p>
          </Reveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 100}>
                <Link href={`/articles/${article.slug}`} className="group block">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={article.cover.src}
                      alt={article.cover.alt}
                      width={article.cover.width}
                      height={article.cover.height}
                      sizes="(max-width: 768px) 100vw, 24rem"
                      className="h-48 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="eyebrow mt-6 block text-highlight-text">
                    {article.category}
                  </span>
                  <h3 className="mt-3 font-display text-[1.25rem] leading-snug text-ink transition-colors duration-400 group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-muted text-pretty">
                    {article.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ C · Typographic index ═════════════════════════════════════════════ */

export function ArticlesC() {
  return (
    <>
      <PageHero {...hero} />

      {/* No thumbnails: the titles carry the page, the way a journal lists
          its contents. Fastest to scan, quietest to look at. */}
      <section className="border-t border-line bg-background py-14 md:py-20">
        <Container>
          <div className="border-t border-line-strong">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group grid items-baseline gap-x-8 gap-y-2 border-b border-line py-8 md:grid-cols-[3.5rem_1fr_10rem] md:py-10"
                >
                  <span className="font-display text-[0.95rem] text-highlight-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-[1.5rem] leading-snug text-ink transition-colors duration-400 group-hover:text-primary md:text-[1.9rem]">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted text-pretty">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="eyebrow text-muted-light md:justify-self-end md:text-right">
                    {article.category}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}
