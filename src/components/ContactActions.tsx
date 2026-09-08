import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

interface ContactActionsProps {
  /** Prefilled WhatsApp message for this context. */
  message?: string;
  whatsappLabel?: string;
  emailLabel?: string;
  size?: "sm" | "md" | "lg";
  /** `onDark` for use on the deep navy fields. */
  tone?: "light" | "onDark";
  className?: string;
}

const sizes = {
  sm: "px-5 py-2.5 text-[0.85rem]",
  md: "px-6 py-3.5 text-[0.95rem]",
  lg: "px-8 py-4 text-[1.02rem]",
};

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-body font-semibold tracking-[-0.01em] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985]";

/**
 * The site's standard call to action: WhatsApp for people who want a quick,
 * personal reply, and a written enquiry for those who would rather not open
 * a chat with a stranger about something private.
 */
export default function ContactActions({
  message = "Hello New Horizon Counselling Service, I would like to book a counselling session.",
  whatsappLabel = "Book on WhatsApp",
  emailLabel = "Send a message",
  size = "md",
  tone = "light",
  className = "",
}: ContactActionsProps) {
  const onDark = tone === "onDark";

  const primary = onDark
    ? "bg-white text-ink hover:bg-highlight hover:text-white shadow-[0_16px_38px_-18px_rgba(0,0,0,0.85)]"
    : "bg-ink text-white shadow-[0_14px_30px_-16px_rgba(12,27,51,0.9)] hover:bg-primary hover:shadow-[0_20px_42px_-16px_rgba(10,53,144,0.75)]";

  const secondary = onDark
    ? "border border-white/25 text-white hover:border-white hover:bg-white/10"
    : "border border-ink/20 text-ink hover:border-ink/45 hover:bg-white";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${primary} ${sizes[size]}`}
      >
        <WhatsAppIcon className="h-[1.15em] w-[1.15em] transition-transform duration-400 group-hover:scale-110" />
        {whatsappLabel}
      </a>

      <Link href="/contact#enquiry" className={`${base} ${secondary} ${sizes[size]}`}>
        <svg
          className="h-[1.05em] w-[1.05em]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 4.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
          />
        </svg>
        {emailLabel}
      </Link>
    </div>
  );
}
