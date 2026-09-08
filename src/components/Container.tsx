import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** `wide` for full editorial spreads, `narrow` for reading columns. */
  size?: "wide" | "default" | "narrow";
}

const sizes = {
  wide: "max-w-[92rem]",
  default: "max-w-[84rem]",
  narrow: "max-w-4xl",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
