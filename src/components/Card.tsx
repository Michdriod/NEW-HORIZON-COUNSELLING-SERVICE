import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  /** `sand` sits on white sections, `plain` sits on sand sections. */
  tone?: "plain" | "sand" | "outline";
}

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-7",
  lg: "p-8 md:p-10",
};

const tones = {
  plain: "bg-surface border border-line",
  sand: "bg-sand border border-line",
  outline: "bg-transparent border border-line-strong",
};

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  tone = "plain",
}: CardProps) {
  return (
    <div
      className={`rounded-[1.75rem] ${tones[tone]} ${paddings[padding]} ${
        hover ? "lift hover:border-line-strong" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
