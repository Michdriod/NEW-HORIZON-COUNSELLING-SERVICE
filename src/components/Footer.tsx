import Link from "next/link";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Gabriel", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Book a Session", href: "/book" },
  { name: "FAQ", href: "/faq" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
];

function PinIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t border-white/10 bg-[#061530] text-white">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -left-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-accent-bright/10 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        {/* Columns */}
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/60">
              Guiding you to a Brighter Tomorrow. Professional counselling for
              individuals, couples, and families in Lagos, Nigeria.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-6 text-white/45">Explore</h2>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link-underline py-2 text-[0.95rem] text-white/70 transition-colors hover:text-highlight-soft"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-6 text-white/45">Get in touch</h2>
            <ul className="space-y-1.5 text-[0.95rem] text-white/70">
              <li>
                <a
                  href="tel:+2348034522900"
                  className="inline-flex items-center gap-3 py-2 transition-colors hover:text-highlight-soft"
                >
                  <PhoneIcon />
                  +234 803 452 2900
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348034522900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 py-2 transition-colors hover:text-highlight-soft"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/g.o.ajibade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 py-2 transition-colors hover:text-highlight-soft"
                >
                  <InstagramIcon />
                  @g.o.ajibade
                </a>
              </li>
              <li className="flex items-start gap-3 py-2 leading-relaxed">
                <PinIcon />
                <span>
                  24 Abiodun Oshowole Close, Off Oluwaleimu Street,
                  <br className="hidden sm:block" /> Alle Avenue, Ikeja, Lagos
                </span>
              </li>
            </ul>

            <h2 className="eyebrow mb-4 mt-9 text-white/45">Legal</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link-underline py-2 text-[0.9rem] text-white/60 transition-colors hover:text-highlight-soft"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Crisis disclaimer */}
        <div className="rounded-[1.5rem] border border-highlight/25 bg-highlight/[0.07] p-6">
          <p className="text-[0.9rem] leading-relaxed text-white/75">
            <strong className="font-semibold text-highlight-soft">
              Crisis disclaimer:
            </strong>{" "}
            New Horizon Counselling Service is not an emergency service. If you
            are in crisis or danger, contact a local emergency number or
            hospital immediately.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[0.85rem] text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} New Horizon Counselling Service.
            All rights reserved.
          </p>
          <p>Guiding you to a Brighter Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
