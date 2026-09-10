import type { ComponentType } from "react";

import { ServicesA, ServicesB, ServicesC } from "./servicesVariants";
import { AboutA, AboutB, AboutC } from "./aboutVariants";
import { BookA, BookB, BookC } from "./bookVariants";
import { FaqA, FaqB, FaqC } from "./faqVariants";
import { ArticlesA, ArticlesB, ArticlesC } from "./articlesVariants";
import { ArticleA, ArticleB, ArticleC } from "./articleVariants";
import { ContactA, ContactB, ContactC } from "./contactVariants";
import { LegalA, LegalB } from "./legalVariants";

export interface Variant {
  id: string;
  name: string;
  /** One line on what this composition is trying to do differently. */
  intent: string;
  Component: ComponentType;
}

export interface Screen {
  id: string;
  name: string;
  /** The live route this screen corresponds to. */
  href: string;
  variants: Variant[];
}

/**
 * Every screen in the site, with up to three alternative compositions each.
 *
 * Nothing here is rendered in production: the live pages are untouched and
 * remain the baseline. Copy comes from `@/lib/content`, so the variants
 * differ in layout only.
 */
export const screens: Screen[] = [
  {
    id: "services",
    name: "Services",
    href: "/services",
    variants: [
      {
        id: "a",
        name: "Indexed spreads",
        intent:
          "An anchor index up front so the seven services are navigable, then alternating photo spreads with no card borders — the page reads as one document, not seven boxes.",
        Component: ServicesA,
      },
      {
        id: "b",
        name: "Full-bleed chapters",
        intent:
          "Each service becomes a chapter: a full-bleed band, then its text in a narrow measure beneath. Slowest to scan, strongest to read.",
        Component: ServicesB,
      },
      {
        id: "c",
        name: "Grid with detail on demand",
        intent:
          "All seven visible at once as a photo grid; the long 'what to expect' copy folds into an accordion so the page stays short.",
        Component: ServicesC,
      },
    ],
  },
  {
    id: "about",
    name: "About",
    href: "/about",
    variants: [
      {
        id: "a",
        name: "Profile column",
        intent:
          "Sticky portrait beside a flowing profile — the closest to today, with the credential lists tightened into hairline rows.",
        Component: AboutA,
      },
      {
        id: "b",
        name: "Dossier",
        intent:
          "Portrait as a full-bleed band with an overlapping inset, then credentials set as a specification table. Reads as a professional record.",
        Component: AboutB,
      },
      {
        id: "c",
        name: "Quote-led",
        intent:
          "Opens on Gabriel's own words at display size, with the biography and credentials arranged as supporting evidence beneath.",
        Component: AboutC,
      },
    ],
  },
  {
    id: "book",
    name: "Book",
    href: "/book",
    variants: [
      {
        id: "a",
        name: "Numbered rail",
        intent:
          "Three steps as a horizontal rail with the practical notes directly beneath — the fastest read of the three.",
        Component: BookA,
      },
      {
        id: "b",
        name: "Vertical thread",
        intent:
          "The steps as one continuous thread down the page, each connected by a rule, ending on the action. Feels like a conversation rather than a process diagram.",
        Component: BookB,
      },
      {
        id: "c",
        name: "Steps beside answers",
        intent:
          "Steps on the left, notes and FAQ on the right, so someone who is hesitating finds their objection answered without scrolling.",
        Component: BookC,
      },
    ],
  },
  {
    id: "faq",
    name: "FAQ",
    href: "/faq",
    variants: [
      {
        id: "a",
        name: "Grouped accordions",
        intent:
          "Categories stacked, each a set of accordions — compact, and the closest to today.",
        Component: FaqA,
      },
      {
        id: "b",
        name: "Open Q&A",
        intent:
          "Nothing hidden: every answer set in full in a two-column editorial rhythm. Longer page, zero interaction cost.",
        Component: FaqB,
      },
      {
        id: "c",
        name: "Sticky category rail",
        intent:
          "A sticky category list on the left tracks where you are while the questions scroll past on the right.",
        Component: FaqC,
      },
    ],
  },
  {
    id: "articles",
    name: "Articles",
    href: "/articles",
    variants: [
      {
        id: "a",
        name: "Editorial rows",
        intent:
          "Wide rows with a thumbnail, category and excerpt — closest to today, tuned for scanning.",
        Component: ArticlesA,
      },
      {
        id: "b",
        name: "Lead story",
        intent:
          "The newest piece takes a full-bleed lead position; the rest follow as a quiet three-column set.",
        Component: ArticlesB,
      },
      {
        id: "c",
        name: "Typographic index",
        intent:
          "No thumbnails at all — a numbered index of titles and categories, the way a journal lists its contents.",
        Component: ArticlesC,
      },
    ],
  },
  {
    id: "article",
    name: "Article",
    href: "/articles/5-conversations-to-have-before-you-marry",
    variants: [
      {
        id: "a",
        name: "Band opening",
        intent:
          "Title on ivory, full-bleed cover band, then a centred reading column — matches the rest of the site's openings.",
        Component: ArticleA,
      },
      {
        id: "b",
        name: "Sticky meta rail",
        intent:
          "A slim rail holds category, reading time and a book prompt while the article scrolls, so the CTA is never far away.",
        Component: ArticleB,
      },
      {
        id: "c",
        name: "Type-first",
        intent:
          "No cover image above the fold: the title carries the page and the photograph appears later, as a breath mid-article.",
        Component: ArticleC,
      },
    ],
  },
  {
    id: "contact",
    name: "Contact",
    href: "/contact",
    variants: [
      {
        id: "a",
        name: "Channels first",
        intent:
          "The four ways to reach Gabriel across the top, then the office details and the written enquiry — closest to today.",
        Component: ContactA,
      },
      {
        id: "b",
        name: "Form beside details",
        intent:
          "The written enquiry takes the left column with the office, hours and channels stacked at its side.",
        Component: ContactB,
      },
      {
        id: "c",
        name: "Quiet directory",
        intent:
          "A hairline directory rather than cards, with the form held back to the end for people who would rather not chat.",
        Component: ContactC,
      },
    ],
  },
  {
    id: "legal",
    name: "Privacy / Terms",
    href: "/privacy",
    variants: [
      {
        id: "a",
        name: "Contents rail",
        intent:
          "A sticky table of contents beside the reading column, for documents people scan for one clause.",
        Component: LegalA,
      },
      {
        id: "b",
        name: "Plain column",
        intent:
          "One narrow measure, generous leading, no chrome — the document as a document.",
        Component: LegalB,
      },
    ],
  },
];
