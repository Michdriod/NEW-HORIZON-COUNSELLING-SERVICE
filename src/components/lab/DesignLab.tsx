"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { screens } from "./registry";

/**
 * Review-only switcher for the per-screen layout concepts.
 *
 * Two axes: which screen, and which variant of it. The selection is mirrored
 * into the URL hash (`#services-b`) so a specific concept can be linked to.
 * Nothing here runs in production — the live pages are untouched.
 */
export default function DesignLab() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const fromHash = () => {
      const [screenId, variantId] = window.location.hash
        .replace("#", "")
        .split("-");
      const si = screens.findIndex((s) => s.id === screenId);
      if (si < 0) return;
      const vi = screens[si].variants.findIndex((v) => v.id === variantId);
      setScreenIndex(si);
      setVariantIndex(vi < 0 ? 0 : vi);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const screen = screens[screenIndex];
  const variant = screen.variants[Math.min(variantIndex, screen.variants.length - 1)];
  const Variant = variant.Component;

  const select = (si: number, vi: number) => {
    setScreenIndex(si);
    setVariantIndex(vi);
    history.replaceState(
      null,
      "",
      `#${screens[si].id}-${screens[si].variants[vi].id}`
    );
  };

  return (
    <>
      <div className="sticky top-[4.25rem] z-40 border-b border-line bg-background/95 backdrop-blur-xl">
        <Container>
          <div className="flex flex-col gap-3 py-3.5">
            {/* Screens */}
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="eyebrow shrink-0 text-muted-light">Screen</span>
              <div className="flex gap-1.5">
                {screens.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => select(i, 0)}
                    aria-pressed={i === screenIndex}
                    className={`shrink-0 rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-colors duration-300 ${
                      i === screenIndex
                        ? "bg-ink text-white"
                        : "border border-line-strong text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Variants of the chosen screen */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow shrink-0 text-muted-light">Variant</span>
              <div className="flex flex-wrap gap-1.5">
                {screen.variants.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => select(screenIndex, i)}
                    aria-pressed={v.id === variant.id}
                    className={`rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-colors duration-300 ${
                      v.id === variant.id
                        ? "bg-highlight text-white"
                        : "border border-line-strong text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {v.id.toUpperCase()} · {v.name}
                  </button>
                ))}
              </div>

              <div className="ml-auto flex shrink-0 gap-5">
                <Link
                  href={screen.href}
                  className="link-underline text-[0.82rem] font-semibold text-primary"
                >
                  View live {screen.name}
                </Link>
                <Link
                  href="/hero-lab"
                  className="link-underline text-[0.82rem] font-semibold text-muted"
                >
                  Home hero concepts
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-b border-line bg-sand">
        <Container>
          <div className="py-6">
            <p className="font-display text-[1.15rem] text-ink">
              {screen.name} · {variant.id.toUpperCase()} — {variant.name}
            </p>
            <p className="mt-2 max-w-3xl text-[0.92rem] leading-relaxed text-muted">
              {variant.intent}
            </p>
          </div>
        </Container>
      </div>

      {/* Keyed so each concept remounts and its scroll-reveals replay. */}
      <div key={`${screen.id}-${variant.id}`}>
        <Variant />
      </div>
    </>
  );
}
