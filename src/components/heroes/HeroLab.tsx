"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { heroConcepts } from "./index";

/**
 * Review-only switcher. Lives at /hero-lab, is excluded from the sitemap and
 * marked noindex, and imports nothing into the production home page.
 *
 * The selection is mirrored into the URL hash so a specific concept can be
 * linked to during review (/hero-lab#03).
 */
export default function HeroLab() {
  const [active, setActive] = useState(0);

  /* Read the hash on mount, and follow it if the user edits it or uses the
     back button. */
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace("#", "");
      const index = heroConcepts.findIndex((c) => c.id === id);
      if (index >= 0) setActive(index);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (index: number) => {
    setActive(index);
    history.replaceState(null, "", `#${heroConcepts[index].id}`);
  };

  const concept = heroConcepts[active];
  const Hero = concept.Component;

  return (
    <>
      {/* ── Review bar ─────────────────────────────────────────── */}
      <div className="sticky top-[4.25rem] z-40 border-b border-line bg-background/95 backdrop-blur-xl">
        <Container>
          <div className="flex flex-col gap-3 py-3.5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="eyebrow shrink-0 text-muted-light">
                Hero concepts
              </span>
              <div className="flex gap-1.5">
                {heroConcepts.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => select(i)}
                    aria-pressed={i === active}
                    title={c.name}
                    className={`shrink-0 rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-colors duration-300 ${
                      i === active
                        ? "bg-ink text-white"
                        : "border border-line-strong text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {c.number}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="link-underline shrink-0 self-start text-[0.82rem] font-semibold text-primary lg:self-auto"
            >
              View the live baseline hero
            </Link>
          </div>
        </Container>
      </div>

      {/* ── Concept note ───────────────────────────────────────── */}
      <div className="border-b border-line bg-sand">
        <Container>
          <div className="py-6">
            <p className="font-display text-[1.15rem] text-ink">
              {concept.number} · {concept.name}
            </p>
            <p className="mt-2 max-w-3xl text-[0.92rem] leading-relaxed text-muted">
              {concept.intent}
            </p>
            <p className="mt-3 text-[0.8rem] text-muted-light">
              Resize the window or use the browser&apos;s device toolbar to
              check the mobile composition — the layouts respond to the real
              viewport.
            </p>
          </div>
        </Container>
      </div>

      {/* ── The concept itself ─────────────────────────────────── */}
      {/* Keyed so each concept remounts and its scroll-reveals replay. */}
      <div key={concept.id}>
        <Hero />
      </div>
    </>
  );
}
