import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PhotoBand from "@/components/PhotoBand";
import CtaBand from "@/components/CtaBand";
import { YearsMark, YearsLine } from "@/components/HeroParts";
import { photos } from "@/lib/images";
import { heroCopy } from "@/lib/hero";
import {
  aboutProfile,
  aboutCredentials,
  aboutMemberships,
  aboutAreas,
} from "@/lib/content";

const QUOTE =
  "My approach is warm, ethical, practical, and integrative, drawing from sound counselling principles while respectfully incorporating Christian values where clients desire a faith-based process.";

const hero = {
  eyebrow: "Meet your counsellor",
  title: "Gabriel Ajibade",
  lede: "Pastor, certified counsellor, Mental Health Therapist, marriage and family life counsellor, mentor, and counselling educator.",
};

const closing = (
  <CtaBand
    title="Ready to begin your journey?"
    body="Gabriel is here to support you with warmth, professionalism, and respect for your values and beliefs."
    message="Hello, I would like to learn more about Gabriel’s counselling approach."
  />
);

function DefinitionRow({ label, items }: { label: string; items: readonly string[] }) {
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

function AreasOfCompetence() {
  return (
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
  );
}

/* ═══ A · Profile column ════════════════════════════════════════════════ */

export function AboutA() {
  return (
    <>
      <PageHero {...hero} />

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
                <div className="mt-6 flex items-end justify-between gap-5 border-t border-line-strong pt-5">
                  <div>
                    <p className="font-display text-[1.15rem] text-ink">
                      {heroCopy.practitioner.name}
                    </p>
                    <p className="mt-0.5 text-[0.85rem] text-muted">
                      {heroCopy.practitioner.role}
                    </p>
                  </div>
                  <YearsMark size="sm" />
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
                    &ldquo;{QUOTE}&rdquo;
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="field-sand py-20 md:py-28">
        <Container>
          <DefinitionRow label="Education & credentials" items={aboutCredentials} />
          <DefinitionRow label="Professional memberships" items={aboutMemberships} />
          <AreasOfCompetence />
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ B · Dossier ═══════════════════════════════════════════════════════ */

export function AboutB() {
  return (
    <>
      <PageHero
        {...hero}
        band={{ photo: photos.session, objectPosition: "object-[center_35%]" }}
      />

      {/* The portrait arrives as the page's own opening inset, exactly as it
          does on the home page, rather than as a card in a column. */}
      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
            <Reveal>
              <div>
                <div className="overflow-hidden rounded-[2rem] border border-line bg-surface">
                  <Image
                    src="/gabriel-portrait.jpg"
                    alt="Gabriel Ajibade, counsellor at New Horizon Counselling Service"
                    width={1050}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="h-72 w-full object-cover object-[center_18%] md:h-[26rem]"
                  />
                </div>
                <YearsLine className="mt-5" />
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
                  <Reveal key={i} delay={80 + i * 60}>
                    <p className="leading-relaxed text-body text-pretty">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials as a specification table: label left, fact right, one
          hairline per row. Reads as a record rather than a list of claims. */}
      <section className="field-sand py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow mb-8 text-highlight-text">The record</p>
          </Reveal>

          <dl className="border-t border-line-strong">
            {[
              ...aboutCredentials.map((c) => ["Qualification", c] as const),
              ...aboutMemberships.map((m) => ["Membership", m] as const),
            ].map(([label, value], i) => (
              <Reveal key={value} delay={Math.min(i * 40, 240)}>
                <div className="grid gap-2 border-b border-line py-5 md:grid-cols-[14rem_1fr] md:gap-8 md:py-6">
                  <dt className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-muted-light">
                    {label}
                  </dt>
                  <dd className="text-body">{value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <div className="mt-12">
            <AreasOfCompetence />
          </div>
        </Container>
      </section>

      {closing}
    </>
  );
}

/* ═══ C · Quote-led ═════════════════════════════════════════════════════ */

export function AboutC() {
  return (
    <>
      <section className="field-sand relative overflow-hidden pt-14 md:pt-20">
        <Container>
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-highlight-text">
              <span className="h-px w-8 bg-current opacity-60" />
              Meet your counsellor
            </p>
          </Reveal>

          {/* His own words at display size — the page opens on the approach,
              not on the credentials. */}
          <Reveal delay={90}>
            <blockquote className="max-w-3xl">
              <p className="display-tight text-[length:var(--text-h2)] leading-[1.22] text-ink text-pretty">
                &ldquo;{QUOTE}&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex items-end gap-5 border-t border-line-strong pt-6">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[1rem]">
                <Image
                  src="/gabriel-portrait.jpg"
                  alt=""
                  width={1050}
                  height={900}
                  sizes="5rem"
                  className="h-full w-full object-cover object-[center_15%]"
                />
              </div>
              <div className="pb-1">
                <p className="font-display text-[1.15rem] text-ink">
                  {heroCopy.practitioner.name}
                </p>
                <p className="mt-0.5 text-[0.85rem] text-muted">
                  {heroCopy.practitioner.role}
                </p>
              </div>
              <div className="ml-auto hidden pb-1 sm:block">
                <YearsMark size="md" />
              </div>
            </div>
          </Reveal>
        </Container>

        <PhotoBand
          photo={photos.session}
          objectPosition="object-[center_35%]"
          className="mt-14 md:mt-20"
        />
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
            <Reveal>
              <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                Professional profile
              </h2>
            </Reveal>
            <div className="space-y-6">
              {aboutProfile.map((para, i) => (
                <Reveal key={i} delay={60 + i * 60}>
                  <p className="leading-relaxed text-body text-pretty">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="field-sand py-16 md:py-24">
        <Container>
          <DefinitionRow label="Education & credentials" items={aboutCredentials} />
          <DefinitionRow label="Professional memberships" items={aboutMemberships} />
          <AreasOfCompetence />
        </Container>
      </section>

      {closing}
    </>
  );
}
