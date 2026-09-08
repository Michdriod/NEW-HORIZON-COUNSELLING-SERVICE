import type { Metadata } from "next";
import { Fraunces, Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
  title:
    "New Horizon Counselling Service | Guiding you to a Brighter Tomorrow",
  description:
    "Family counselling and mental health practice in Lagos, Nigeria. Marriage counselling, premarital counselling, faith-based counselling, anxiety and depression counselling, addiction recovery counselling, and online counselling. 18 years of experience.",
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
