import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles & Resources | New Horizon Counselling Service",
  description:
    "Insights, advice, and resources to support your mental health and relationship journey. Read about marriage counselling, family dynamics, and faith-based mental health support.",
};

export default function Articles() {
  return (
    <>
      <PageHero
        eyebrow="Reading room"
        title="Articles & resources"
        lede="Insights, advice, and resources to support your mental health and relationship journey."
      />

      <section className="border-t border-line bg-surface py-16 md:py-24">
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
                    <h2 className="mt-3 font-display text-[1.5rem] leading-snug text-ink transition-colors duration-400 group-hover:text-primary md:text-[1.75rem]">
                      {article.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted text-pretty">
                      {article.excerpt}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden justify-self-end self-center text-ink/25 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-primary md:block"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h13m0 0-5-5m5 5-5 5"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-12 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              These are starter articles for review. More writing on marriage,
              family life, and faith and mental health will be published here.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Does something here resonate?"
        body="If a piece of this speaks to your situation, we’re here to talk it through properly."
        message="Hello, I read one of your articles and would like to learn more about counselling."
      />
    </>
  );
}
