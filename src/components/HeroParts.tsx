import Link from "next/link";
import { heroCopy } from "@/lib/hero";

/* ── Eyebrow ──────────────────────────────────────────────────────────── */

export function HeroEyebrow({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        tone === "dark" ? "text-highlight-text" : "text-highlight-soft"
      } ${className}`}
    >
      <span className="h-px w-8 bg-current opacity-60" />
      {heroCopy.eyebrow}
    </p>
  );
}

/* ── Arrow link ───────────────────────────────────────────────────────── */

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`link-underline py-2 text-[0.95rem] font-semibold ${className}`}
    >
      {children}
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
          d="M5 12h13m0 0-5-5m5 5-5 5"
        />
      </svg>
    </Link>
  );
}

/* ── Practitioner credit ──────────────────────────────────────────────── */

const { practitioner } = heroCopy;

/**
 * Name, role and the years marker as one caption block. `align` decides
 * whether the years sit beside the name (wide captions) or beneath it.
 */
export function PractitionerCaption({
  layout = "row",
  tone = "dark",
  className = "",
}: {
  layout?: "row" | "stack";
  tone?: "dark" | "light";
  className?: string;
}) {
  const onLight = tone === "dark";

  return (
    <div
      className={`${
        layout === "row"
          ? "flex items-center justify-between gap-5"
          : "flex flex-col gap-4"
      } ${className}`}
    >
      <div>
        <p
          className={`font-display text-[1.15rem] ${
            onLight ? "text-ink" : "text-white"
          }`}
        >
          {practitioner.name}
        </p>
        <p
          className={`mt-0.5 text-[0.85rem] ${
            onLight ? "text-muted" : "text-white/65"
          }`}
        >
          {practitioner.role}
        </p>
      </div>
      <YearsMark tone={tone} align={layout === "row" ? "right" : "left"} />
    </div>
  );
}

/**
 * The 28-years credibility marker. Large numeral, small tracked label — the
 * one place the gold is allowed to carry real size.
 */
export function YearsMark({
  size = "md",
  tone = "dark",
  align = "right",
}: {
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
  align?: "left" | "right";
}) {
  const numeral = {
    sm: "text-[1.75rem]",
    md: "text-[2.25rem]",
    lg: "text-[3.25rem]",
  }[size];

  return (
    <div
      className={`shrink-0 ${align === "right" ? "text-right" : "text-left"}`}
    >
      <p
        className={`font-display leading-none ${numeral} ${
          tone === "dark" ? "text-highlight" : "text-highlight-light"
        }`}
      >
        {practitioner.years}
      </p>
      <p
        className={`mt-1.5 font-body text-[0.58rem] font-semibold uppercase leading-tight tracking-[0.1em] sm:text-[0.62rem] sm:tracking-[0.12em] ${
          tone === "dark" ? "text-muted" : "text-white/55"
        }`}
      >
        Years of
        <br className="sm:hidden" /> practice
      </p>
    </div>
  );
}

/**
 * The same credibility fact rendered as one quiet line rather than a numeral,
 * for the layouts that cannot afford a second focal point.
 */
export function YearsLine({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`text-[0.9rem] ${
        tone === "dark" ? "text-muted" : "text-white/60"
      } ${className}`}
    >
      <span
        className={`font-semibold ${
          tone === "dark" ? "text-ink" : "text-white"
        }`}
      >
        {practitioner.years} years
      </span>{" "}
      of practice · Ikeja, Lagos &amp; online
    </p>
  );
}
