import HomeHero from "@/components/HomeHero";
import HeroTrustStrip from "./HeroTrustStrip";

/**
 * 04 · Full-Width Calm — the concept that shipped.
 *
 * This renders the live `HomeHero` rather than a copy of it, so the lab
 * always shows what the home page actually does. The other five remain
 * as-built, for comparison.
 */
export default function HeroVariation04() {
  return (
    <>
      <HomeHero />
      <HeroTrustStrip variant="divided" />
    </>
  );
}
