"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Direction = "up" | "fade" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  /** Motion the element travels as it enters. */
  direction?: Direction;
  /** Milliseconds of stagger before this element animates. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Reveals its child once it scrolls into view. Uses IntersectionObserver
 * plus CSS transitions rather than an animation library — the whole
 * behaviour is a class toggle, so it costs nothing on the client and
 * degrades to "visible" when JS or motion is unavailable.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={direction === "up" ? "" : direction}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
