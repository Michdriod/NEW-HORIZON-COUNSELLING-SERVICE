/**
 * Single source of truth for the practice's real-world details.
 *
 * Everything that repeats across pages, structured data, and metadata reads
 * from here, so a change of phone number, address, or domain is a one-line
 * edit rather than a hunt through the codebase.
 */
export const site = {
  name: "New Horizon Counselling Service",
  shortName: "New Horizon",
  tagline: "Guiding you to a Brighter Tomorrow",
  url: "https://newhorizonng.com",

  description:
    "Family counselling and mental health practice in Lagos, Nigeria. Marriage, family, premarital, faith-based, anxiety and depression, addiction recovery, and online counselling.",

  phone: "+234 803 452 2900",
  phoneE164: "+2348034522900",
  whatsapp: "2348034522900",

  /**
   * Set to null until the mailbox actually exists. A published address that
   * bounces is worse than none at all, so nothing renders while this is null.
   */
  email: "info@newhorizonng.com" as string | null,

  instagram: {
    handle: "@g.o.ajibade",
    url: "https://instagram.com/g.o.ajibade",
  },

  address: {
    street: "24 Abiodun Oshowole Close, Off Oluwaleimu Street, Alle Avenue",
    locality: "Ikeja",
    region: "Lagos",
    country: "NG",
    countryName: "Nigeria",
  },

  hours: {
    weekdays: { opens: "09:00", closes: "17:00" },
    note: "Saturday by appointment. Sunday closed.",
  },

  foundedYear: 2008,
  yearsOfExperience: 18,
} as const;

/** Builds a WhatsApp deep link with a prefilled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
