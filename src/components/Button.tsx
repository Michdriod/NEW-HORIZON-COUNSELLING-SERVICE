import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "onDark";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-body font-semibold tracking-[-0.01em] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  /* Ink rather than electric blue — the CTA carries weight through
     contrast and shadow depth instead of saturation. */
  primary:
    "bg-ink text-white shadow-[0_8px_20px_-14px_rgba(12,27,51,0.5)] hover:bg-primary hover:shadow-[0_12px_26px_-14px_rgba(10,53,144,0.4)]",
  accent:
    "bg-highlight text-white shadow-[0_8px_20px_-14px_rgba(197,127,46,0.5)] hover:bg-highlight-light hover:shadow-[0_12px_26px_-14px_rgba(197,127,46,0.42)]",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink hover:shadow-[0_10px_24px_-20px_rgba(12,27,51,0.28)]",
  outline:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink hover:text-white",
  ghost: "bg-transparent text-ink hover:bg-sand",
  /* For dark fields: a light chip that inverts on hover. */
  onDark:
    "bg-white text-ink hover:bg-highlight hover:text-white shadow-[0_10px_26px_-18px_rgba(0,0,0,0.5)]",
};

const sizes = {
  sm: "px-5 py-2.5 text-[0.85rem]",
  md: "px-6 py-3.5 text-[0.95rem]",
  lg: "px-8 py-4 text-[1.02rem]",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
