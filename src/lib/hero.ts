/**
 * Single source of copy for every hero variation.
 *
 * The variations differ in composition, never in message: keeping the words
 * in one place makes the six concepts genuinely comparable, and means a copy
 * change during review updates all of them at once.
 */
import { site } from "@/lib/site";

export const heroCopy = {
  eyebrow: `Lagos, Nigeria · Since ${site.foundedYear}`,

  /* The headline is split so each layout can break the line where its own
     measure wants it, rather than inheriting one fixed wrap. */
  headline: {
    lead: "Guiding you to a",
    emphasis: "brighter",
    tail: "tomorrow.",
  },

  lede:
    "Counselling for individuals, couples, and families. Held with twenty-eight years of practice, complete confidentiality, and a pace that belongs to you.",

  /* A shorter cut for the layouts that deliberately show less above the fold. */
  ledeShort:
    "Counselling for individuals, couples, and families — held with complete confidentiality, at a pace that belongs to you.",

  microcopy: "Free 15-minute intro call",

  practitioner: {
    name: "Gabriel Ajibade",
    role: "Counsellor & Mental Health Therapist",
    years: site.yearsOfExperience,
    yearsLabel: "Years of practice",
  },

  credentials: [
    "Certified counsellor & mental health therapist",
    "Marriage and family life counsellor",
    "Counselling educator and mentor",
    "Faith-sensitive only where you want it",
  ],
} as const;

export interface TrustItem {
  title: string;
  body: string;
}

export const trustItems: TrustItem[] = [
  {
    title: "Strictly confidential",
    body: "What is said in the room stays in the room.",
  },
  {
    title: "60-minute sessions",
    body: "Online via Google Meet, or in person in Ikeja.",
  },
  {
    title: "Faith-optional",
    body: "A Christian process only where you want one.",
  },
];
