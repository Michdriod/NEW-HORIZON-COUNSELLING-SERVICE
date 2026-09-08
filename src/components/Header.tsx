"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

const WHATSAPP_HREF =
  "https://wa.me/2348034522900?text=" +
  encodeURIComponent(
    "Hello New Horizon Counselling Service, I would like to book a counselling session."
  );

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* Close the drawer whenever the route changes. Adjusting state during
     render is React’s sanctioned pattern for this and avoids the extra
     commit an effect would cost. */
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  /* Condense the bar once the page moves, so the hero reads full-bleed
     and the navigation gets quieter as you read down the page. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled || menuOpen
          ? "border-b border-line bg-background/88 shadow-[0_1px_24px_-14px_rgba(12,27,51,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-background"
      }`}
    >
      <nav className="mx-auto max-w-[84rem] px-5 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-[4.25rem]" : "h-[5.5rem]"
          }`}
        >
          <Link href="/" aria-label="New Horizon Counselling Service, home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors duration-300 ${
                    active
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-highlight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.875rem] font-semibold text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_12px_28px_-12px_rgba(10,53,144,0.7)] active:scale-[0.98]"
            >
              Book a Session
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h13m0 0-5-5m5 5-5 5"
                />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-sand lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="animate-drawer border-t border-line pb-8 pt-6 lg:hidden"
          >
            <div className="flex flex-col">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{ animationDelay: `${60 + i * 45}ms` }}
                  className="animate-drawer border-b border-line/60 py-4 font-display text-2xl text-ink transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white"
            >
              Book a Session on WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
