import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PhotoBand from "@/components/PhotoBand";
import { photos } from "@/lib/images";
import {
  aboutProfile,
  aboutCredentials,
  aboutMemberships,
  aboutAreas,
} from "@/lib/content";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Gabriel Ajibade | New Horizon Counselling Service",
  description:
    "Meet Gabriel Ajibade, a pastor, certified counsellor, and Mental Health Therapist with 28 years of experience in marriage counselling, family counselling, and faith-based counselling in Lagos, Nigeria.",
  keywords: [
    "mental health counsellor Ikeja",
    "Christian counselling Nigeria",
    "marriage counsellor Lagos",
  ],
};

function DefinitionList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="grid gap-6 border-t border-line py-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
      <Reveal>
        <h2 className="eyebrow text-highlight-text">{label}</h2>
      </Reveal>
      <Reveal delay={80}>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4 text-body">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Meet your counsellor"
        title="Gabriel Ajibade"
        lede="Pastor, certified counsellor, Mental Health Therapist, marriage and family life counsellor, mentor, and counselling educator."
      />

      {/* Portrait + profile */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal direction="scale">
              <div className="lg:sticky lg:top-32">
                <div className="overflow-hidden rounded-[2rem] border border-line bg-surface">
                  <Image
                    src="/gabriel-portrait.jpg"
                    alt="Gabriel Ajibade, counsellor at New Horizon Counselling Service"
                    width={1050}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="h-[24rem] w-full object-cover object-center md:h-[32rem]"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-[3.5rem] leading-none text-highlight">
                    28
                  </span>
                  <p className="text-[0.95rem] leading-snug text-muted">
                    years of counselling
                    <br />
                    and ministry experience
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="display-tight text-[length:var(--text-h2)] text-ink">
                  Professional profile
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {aboutProfile.map((para, i) => (
                  <Reveal key={i} delay={80 + i * 70}>
                    <p className="leading-relaxed text-body text-pretty">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={320}>
                <blockquote className="mt-12 border-l-2 border-highlight pl-7">
                  <p className="font-display text-[length:var(--text-h3)] leading-[1.45] text-ink text-pretty">
                    &ldquo;My approach is warm, ethical, practical, and
                    integrative, drawing from sound counselling principles
                    while respectfully incorporating Christian values where
                    clients desire a faith-based process.&rdquo;
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="field-sand py-20 md:py-28">
        <Container>
          <DefinitionList
            label="Education & credentials"
            items={aboutCredentials}
          />
          <DefinitionList
            label="Professional memberships"
            items={aboutMemberships}
          />

          <div className="grid gap-6 border-y border-line py-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <Reveal>
              <h2 className="eyebrow text-highlight-text">Areas of competence</h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="flex flex-wrap gap-2.5">
                {aboutAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-line-strong bg-surface px-4 py-2 text-[0.9rem] text-body transition-colors duration-300 hover:border-ink/30"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* A glimpse of the work itself, not just the practitioner */}
      <section className="border-t border-line bg-background py-16 md:py-20">
        <PhotoBand
          photo={photos.session}
          objectPosition="object-[center_35%]"
          caption="Sessions run for 60 minutes, online via Google Meet or in person at the Ikeja office, whichever lets you speak most freely."
        />
      </section>

      <CtaBand
        title="Ready to begin your journey?"
        body="Gabriel is here to support you with warmth, professionalism, and respect for your values and beliefs."
        message="Hello, I would like to learn more about Gabriel’s counselling approach."
      />
    </>
  );
}
