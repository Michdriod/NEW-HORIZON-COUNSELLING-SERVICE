"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const HREF =
  "https://wa.me/2348034522900?text=" +
  encodeURIComponent(
    "Hello New Horizon Counselling Service, I would like to book a counselling session."
  );

/**
 * Appears once the visitor has started reading rather than sitting on the
 * hero from the first frame, and expands to a labelled pill on hover.
 */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-6 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#1FA855] py-4 pl-4 pr-4 text-white shadow-[0_18px_40px_-16px_rgba(31,168,85,0.9)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#17914A] hover:gap-2.5 hover:pr-6 sm:bottom-8 sm:right-8 ${
        visible
          ? "animate-halo translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="max-w-0 whitespace-nowrap text-[0.9rem] font-semibold opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[10rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
