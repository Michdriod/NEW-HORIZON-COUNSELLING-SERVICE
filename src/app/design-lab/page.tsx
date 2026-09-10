import type { Metadata } from "next";
import DesignLab from "@/components/lab/DesignLab";

/**
 * Internal review route for the per-screen layout concepts.
 *
 * Not linked from the site, kept out of the sitemap, and marked noindex.
 * The live pages remain the baseline and are unaffected by anything here.
 */
export const metadata: Metadata = {
  title: "Screen concepts · internal review",
  robots: { index: false, follow: false },
};

export default function DesignLabPage() {
  return <DesignLab />;
}
