import type { Metadata } from "next";
import { Fraunces, Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/lib/site";
import "./globals.css";

/* Display: a warm, low-contrast serif. Reads considered and mature in a
   way the previous geometric sans could not, without turning cold. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

/* Body & UI: neutral, highly legible at small sizes. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Reserved for the wordmark, which matches the geometric sans in the logo. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  /* Lets Next resolve the social-preview image to an absolute URL, which
     WhatsApp, Facebook and X all require. */
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  keywords: [
    "marriage counselling Lagos",
    "family counselling Nigeria",
    "premarital counselling Lagos",
    "online counselling Nigeria",
    "Christian counselling Nigeria",
    "mental health counsellor Ikeja",
    "anxiety and depression counselling Lagos",
    "addiction recovery counselling Nigeria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
};

/**
 * Structured data describing the practice. This is what lets Google show the
 * address, phone number and opening hours directly in search results.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneE164,
  ...(site.email ? { email: site.email } : {}),
  image: `${site.url}/opengraph-image.jpg`,
  logo: `${site.url}/icon.png`,
  foundingDate: String(site.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: site.hours.weekdays.opens,
      closes: site.hours.weekdays.closes,
    },
  ],
  sameAs: [site.instagram.url],
  founder: {
    "@type": "Person",
    name: "Gabriel Ajibade",
    jobTitle: "Counsellor and Mental Health Therapist",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Counselling services",
    itemListElement: [
      "Marriage Counselling",
      "Family Counselling",
      "Premarital Counselling",
      "Faith-Based Counselling",
      "Anxiety & Depression Counselling",
      "Addiction Recovery Counselling",
      "Online Counselling",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      /* The inline script below adds `js-motion` to this element before
         hydration, so its class list intentionally differs from the
         server-rendered one. */
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${poppins.variable} h-full`}
    >
      <head>
        {/* Opt in to scroll-reveal motion only when scripting is available
            and motion is welcome; otherwise the CSS leaves content visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion')}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
