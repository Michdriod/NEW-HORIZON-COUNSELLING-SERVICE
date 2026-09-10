import type { Metadata } from "next";
import HeroLab from "@/components/heroes/HeroLab";

/**
 * Internal review route for the six alternative hero compositions.
 *
 * Not linked from the site, kept out of the sitemap, and marked noindex —
 * it exists so the concepts can be compared against the live home page
 * without any of them affecting production behaviour.
 */
export const metadata: Metadata = {
  title: "Hero concepts · internal review",
  robots: { index: false, follow: false },
};

export default function HeroLabPage() {
  return <HeroLab />;
}
