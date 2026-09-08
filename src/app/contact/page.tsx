import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact Us | New Horizon Counselling Service",
  description:
    "Get in touch with New Horizon Counselling Service in Lagos, Nigeria. WhatsApp, phone, or visit our office in Ikeja. We’re here to support your mental health journey.",
};

const channels = [
  {
    label: "WhatsApp",
    value: "+234 803 452 2900",
    href: "https://wa.me/2348034522900?text=Hello%20New%20Horizon%20Counselling%20Service",
    action: "Chat now",
    external: true,
    icon: <WhatsAppIcon className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: "+234 803 452 2900",
    href: "tel:+2348034522900",
    action: "Call now",
    external: false,
    icon: (
      <svg
        className="h-5 w-5"
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
    ),
  },
  {
    label: "Instagram",
    value: "@g.o.ajibade",
    href: "https://instagram.com/g.o.ajibade",
    action: "Follow",
    external: true,
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const hours = [
  { day: "Monday to Friday", time: "9:00 AM to 5:00 PM" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We’re here when you’re ready."
        lede="Reach out via WhatsApp, phone, or visit the office in Ikeja, Lagos. Gabriel replies personally."
      />

      {/* Channels */}
      <section className="border-y border-line bg-surface">
        <Container>
          <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {channels.map((channel, i) => (
              <li key={channel.label}>
                <Reveal delay={i * 90}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full flex-col py-9 transition-colors duration-400 md:px-9"
                  >
                    <span className="text-muted-light transition-colors duration-400 group-hover:text-highlight">
                      {channel.icon}
                    </span>
                    <span className="mt-5 font-display text-[1.2rem] text-ink">
                      {channel.label}
                    </span>
                    <span className="mt-1 text-[0.95rem] text-muted">
                      {channel.value}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-primary">
                      {channel.action}
                      <svg
                        className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
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
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Office + form */}
      <section className="field-sand py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h2 className="eyebrow mb-8 text-highlight-text">The office</h2>
              </Reveal>

              <Reveal delay={80}>
                <address className="not-italic">
                  <p className="font-display text-[length:var(--text-h3)] leading-[1.5] text-ink">
                    24 Abiodun Oshowole Close,
                    <br />
                    Off Oluwaleimu Street,
                    <br />
                    Alle Avenue, Ikeja,
                    <br />
                    Lagos, Nigeria
                  </p>
                </address>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=24+Abiodun+Oshowole+Close+Alle+Avenue+Ikeja+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-6 inline-flex py-2 text-[0.95rem] font-semibold text-primary"
                >
                  Open in Google Maps
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
                      d="M7 17 17 7m0 0H8m9 0v9"
                    />
                  </svg>
                </a>
              </Reveal>

              <Reveal delay={220}>
                <h3 className="eyebrow mb-5 mt-12 text-muted-light">
                  Opening hours
                </h3>
                <dl className="divide-y divide-line border-y border-line">
                  {hours.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex items-baseline justify-between gap-6 py-4"
                    >
                      <dt className="text-body">{slot.day}</dt>
                      <dd className="text-[0.95rem] text-muted">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="rounded-[2rem] border border-line bg-surface p-8 md:p-10">
                <h2 className="display-tight text-[1.65rem] text-ink">
                  Send a message
                </h2>
                <p className="mb-8 mt-3 leading-relaxed text-muted">
                  Write a few lines and we&apos;ll continue the conversation on
                  WhatsApp.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
