import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactActions from "@/components/ContactActions";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { photos } from "@/lib/images";
import { officeHours } from "@/lib/content";
import { site } from "@/lib/site";

const hero = {
  eyebrow: "Contact",
  title: "We’re here when you’re ready.",
  lede: "Reach out via WhatsApp, phone, or visit the office in Ikeja, Lagos. Gabriel replies personally.",
};

const band = { photo: photos.premarital, objectPosition: "object-[center_35%]" };

const channels = [
  {
    label: "WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.whatsapp}`,
    action: "Chat now",
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneE164}`,
    action: "Call now",
  },
  {
    label: "Instagram",
    value: site.instagram.handle,
    href: site.instagram.url,
    action: "Follow",
  },
  ...(site.email
    ? [
        {
          label: "Email",
          value: site.email,
          href: `mailto:${site.email}`,
          action: "Send an email",
        },
      ]
    : []),
];

function OfficeDetails() {
  return (
    <div>
      <p className="eyebrow mb-5 text-highlight-text">The office</p>
      <address className="not-italic leading-relaxed text-body">
        {site.address.street}
        <br />
        {site.address.locality}, {site.address.region}
        <br />
        {site.address.countryName}
      </address>

      <dl className="mt-8 border-t border-line">
        {officeHours.map((row) => (
          <div
            key={row.day}
            className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
          >
            <dt className="text-[0.95rem] text-ink">{row.day}</dt>
            <dd className="text-[0.92rem] text-muted">{row.time}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[0.88rem] text-muted-light">{site.hours.note}</p>
    </div>
  );
}

/* ═══ A · Channels first ════════════════════════════════════════════════ */

export function ContactA() {
  return (
    <>
      <PageHero {...hero} band={band} />

      <section className="border-y border-line bg-surface">
        <Container>
          <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {channels.map((channel, i) => (
              <li key={channel.label}>
                <Reveal delay={i * 90}>
                  <a
                    href={channel.href}
                    className="group block px-0 py-8 transition-colors sm:px-8"
                  >
                    <p className="font-display text-[1.1rem] text-ink">
                      {channel.label}
                    </p>
                    <p className="mt-1.5 text-[0.92rem] text-muted">
                      {channel.value}
                    </p>
                    <span className="link-underline mt-4 inline-flex text-[0.85rem] font-semibold text-primary">
                      {channel.action} →
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <OfficeDetails />
            </Reveal>
            <Reveal delay={90}>
              <div
                id="enquiry"
                className="scroll-mt-28 rounded-[2rem] border border-line bg-surface p-8 md:p-10"
              >
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ═══ B · Form beside details ═══════════════════════════════════════════ */

export function ContactB() {
  return (
    <>
      <PageHero {...hero}>
        <div className="mt-9">
          <ContactActions size="lg" whatsappLabel="Message on WhatsApp" />
        </div>
      </PageHero>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* The written enquiry leads, for people who would rather not
                open a chat with a stranger about something private. */}
            <Reveal>
              <div id="enquiry" className="scroll-mt-28">
                <p className="eyebrow mb-6 text-highlight-text">
                  Write to Gabriel
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <div className="lg:pt-14">
              <Reveal delay={90}>
                <div className="rounded-[2rem] border border-line bg-sand p-8">
                  <p className="font-display text-[1.15rem] text-ink">
                    Prefer to talk?
                  </p>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">
                    WhatsApp is the fastest route — Gabriel replies personally.
                  </p>
                  <ul className="mt-6 space-y-4 border-t border-line-strong pt-6">
                    {channels.map((channel) => (
                      <li
                        key={channel.label}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span className="text-[0.9rem] text-muted">
                          {channel.label}
                        </span>
                        <a
                          href={channel.href}
                          className="link-underline text-[0.92rem] font-semibold text-ink"
                        >
                          {channel.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-10">
                  <OfficeDetails />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ═══ C · Quiet directory ═══════════════════════════════════════════════ */

export function ContactC() {
  return (
    <>
      <PageHero {...hero} band={band} />

      <section className="border-t border-line bg-background py-16 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* A hairline directory rather than four cards. */}
            <div>
              <Reveal>
                <p className="eyebrow mb-7 text-highlight-text">Direct lines</p>
              </Reveal>
              <ul className="border-t border-line-strong">
                {channels.map((channel, i) => (
                  <li key={channel.label}>
                    <Reveal delay={i * 80}>
                      <a
                        href={channel.href}
                        className="group grid items-baseline gap-x-6 gap-y-1 border-b border-line py-6 sm:grid-cols-[8rem_1fr_auto]"
                      >
                        <span className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-muted-light">
                          {channel.label}
                        </span>
                        <span className="font-display text-[1.15rem] text-ink transition-colors group-hover:text-primary">
                          {channel.value}
                        </span>
                        <span className="text-[0.85rem] font-semibold text-primary sm:justify-self-end">
                          {channel.action} →
                        </span>
                      </a>
                    </Reveal>
                  </li>
                ))}
              </ul>

              <Reveal delay={220}>
                <div className="mt-10 flex items-start gap-4 rounded-[1.5rem] border border-line bg-surface p-6">
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1FA855]" />
                  <p className="text-[0.93rem] leading-relaxed text-muted">
                    WhatsApp gets the quickest reply. Everything you send is
                    read by Gabriel himself and held in confidence.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <OfficeDetails />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The form comes last: an alternative, not the main route. */}
      <section className="field-sand border-t border-line py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div id="enquiry" className="scroll-mt-28">
                <p className="eyebrow mb-6 text-highlight-text">
                  Or write instead
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
