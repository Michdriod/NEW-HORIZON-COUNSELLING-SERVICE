import Reveal from "./Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Small tracked label above the title. */
  eyebrow?: string;
  centered?: boolean;
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = true,
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const onLight = tone === "dark";

  return (
    <div
      className={`mb-14 md:mb-20 ${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Reveal delay={0}>
          <p
            className={`eyebrow mb-5 flex items-center gap-3 ${
              centered ? "justify-center" : ""
            } ${onLight ? "text-highlight-text" : "text-highlight-soft"}`}
          >
            <span className="h-px w-7 bg-current opacity-50" />
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal delay={eyebrow ? 90 : 0}>
        <h2
          className={`display-tight text-[length:var(--text-h2)] ${
            onLight ? "text-ink" : "text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={eyebrow ? 180 : 110}>
          <p
            className={`mt-5 text-[length:var(--text-lede)] leading-relaxed text-pretty ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            } ${onLight ? "text-muted" : "text-white/70"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
