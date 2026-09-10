import type { ComponentType } from "react";
import HeroVariation01 from "./HeroVariation01";
import HeroVariation02 from "./HeroVariation02";
import HeroVariation03 from "./HeroVariation03";
import HeroVariation04 from "./HeroVariation04";
import HeroVariation05 from "./HeroVariation05";
import HeroVariation06 from "./HeroVariation06";

export interface HeroConcept {
  /** Stable id used in the review URL hash. */
  id: string;
  number: string;
  name: string;
  /** One line on what the composition is trying to do. */
  intent: string;
  Component: ComponentType;
}

/**
 * The six alternative hero compositions, for review at /hero-lab.
 *
 * The production home page is untouched and remains the baseline: nothing
 * here is rendered anywhere else in the application.
 */
export const heroConcepts: HeroConcept[] = [
  {
    id: "01",
    number: "01",
    name: "Editorial Split",
    intent:
      "The current 50/50, tightened: colour-only emphasis, a hairline lede rule, and the portrait credited beneath the frame rather than boxed inside it.",
    Component: HeroVariation01,
  },
  {
    id: "02",
    number: "02",
    name: "Portrait-Led",
    intent:
      "Gabriel takes the larger share and bleeds off the right edge; the message compresses into a narrow column. On phones the order flips so the CTA comes first.",
    Component: HeroVariation02,
  },
  {
    id: "03",
    number: "03",
    name: "Asymmetrical Editorial",
    intent:
      "A 12-column grid used unevenly: wide headline, portrait offset upward, CTA sitting low-left in the whitespace that offset creates.",
    Component: HeroVariation03,
  },
  {
    id: "04",
    number: "04",
    name: "Full-Width Calm (live)",
    intent:
      "Shipped — this is the live home page hero. Message alone on ivory, then a full-bleed band of the room with Gabriel's portrait overlapping it. No text set over photography.",
    Component: HeroVariation04,
  },
  {
    id: "05",
    number: "05",
    name: "Trust-Led",
    intent:
      "Experience stated as a ledger — 28 years, since 1998, seven areas — plus a short credential list, without tipping into a sales page.",
    Component: HeroVariation05,
  },
  {
    id: "06",
    number: "06",
    name: "Minimal Luxury",
    intent:
      "Six visible elements and a lot of air. The years marker drops to a quiet line so the headline is the only thing carrying weight.",
    Component: HeroVariation06,
  },
];
