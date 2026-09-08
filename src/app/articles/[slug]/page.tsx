import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { articles } from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return { title: "Article not found" };

  return {
    title: `${article.title} | New Horizon Counselling Service`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  /* Render the framework's 404 rather than a soft "not found" page that
     still answers 200 — a soft 404 keeps dead URLs in the search index. */
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="field-sand relative overflow-hidden pb-14 pt-14 md:pb-20 md:pt-20">
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent-bright/10 blur-[120px]"
        />
        <Container className="relative">
          <Reveal>
            <Link
              href="/articles"
              className="link-underline mb-9 inline-flex py-2 text-[0.9rem] font-semibold text-muted transition-colors hover:text-ink"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H6m0 0 5-5m-5 5 5 5"
                />
              </svg>
              All articles
            </Link>
          </Reveal>

          <Reveal delay={70}>
            <p className="eyebrow mb-6 text-highlight-text">{article.category}</p>
          </Reveal>

          <Reveal delay={130}>
            <h1 className="display-tight max-w-4xl text-[length:var(--text-h1)] text-ink">
              {article.title}
            </h1>
          </Reveal>

          <Reveal direction="scale" delay={210}>
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-line md:rounded-[2.5rem]">
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                width={article.cover.width}
                height={article.cover.height}
                priority
                sizes="(max-width: 1024px) 100vw, 80rem"
                className="h-56 w-full object-cover sm:h-72 md:h-[26rem]"
              />
            </div>
          </Reveal>
        </Container>
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

      {related.length > 0 && (
        <section className="field-sand border-t border-line py-16 md:py-20">
          <Container>
            <h2 className="eyebrow mb-9 text-highlight-text">Keep reading</h2>
            <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-2">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 90} className="bg-surface">
                  <Link
                    href={`/articles/${item.slug}`}
                    className="group flex h-full flex-col transition-colors duration-400 hover:bg-sand"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={item.cover.src}
                        alt=""
                        width={item.cover.width}
                        height={item.cover.height}
                        sizes="(max-width: 768px) 100vw, 40rem"
                        className="h-44 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-8 md:p-10">
                    <span className="eyebrow text-highlight-text">
                      {item.category}
                    </span>
                    <h3 className="mt-5 font-display text-[1.3rem] leading-snug text-ink transition-colors duration-400 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted text-pretty">
                      {item.excerpt}
                    </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Need support?"
        body="If this article resonated with you, we’re here to help. Reach out to start a conversation about your unique situation."
        message="Hello, I read one of your articles and would like to learn more about counselling."
      />
    </>
  );
}
