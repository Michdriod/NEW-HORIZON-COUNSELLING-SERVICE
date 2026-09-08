import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import { photos } from "@/lib/images";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Gabriel Ajibade | New Horizon Counselling Service",
  description:
    "Meet Gabriel Ajibade , pastor, certified counsellor, mental health therapist with 18 years of experience in marriage counselling, family counselling, and faith-based counselling in Lagos, Nigeria.",
  keywords: [
    "mental health counsellor Ikeja",
    "Christian counselling Nigeria",
    "marriage counsellor Lagos",
  ],
};

const profile = [
  "Gabriel Ajibade is a pastor, certified counsellor, mental health therapist, marriage and family life counsellor, mentor, and counselling educator. He brings together pastoral wisdom, professional counselling training, and years of practical experience in supporting individuals, couples, families, leaders, and faith communities.",
  "He holds a Master’s degree in Theology with specialization in Leadership, a Master’s degree in Mental Health Counselling, and an Advanced Diploma in Marriage Counselling, and has received professional training in family counselling, cognitive behavioural therapy, psychotherapy, marriage counselling, mentoring, and pastoral care. He is also actively involved in counselling education and supervision, helping to train and guide emerging counsellors in ethical and competent practice.",
  "His professional memberships include the Counselling Association of Nigeria and the Africa Network of Professional Counsellors. He has also served in leadership, academic, supervisory, and mentoring capacities within counselling, ministry, and training institutions.",
];

const credentials = [
  "Master’s degree in Theology with specialization in Leadership",
  "Master’s degree in Mental Health Counselling",
  "Advanced Diploma in Marriage Counselling",
  "Professional training in family counselling",
  "Professional training in cognitive behavioural therapy",
  "Professional training in psychotherapy",
  "Professional training in mentoring and pastoral care",
];

const memberships = [
  "Counselling Association of Nigeria",
  "Africa Network of Professional Counsellors",
];

const areasOfCompetence = [
  "Marriage and family counselling",
  "Premarital counselling",
  "Relationship counselling",
  "Emotional wellness",
  "Faith-based counselling",
  "Mental health support",
  "Pastoral counselling",
  "Mentoring",
  "Personal development",
  "Trauma-sensitive support",
  "Parenting guidance",
  "Leadership development",
];

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
        lede="Pastor, certified counsellor, mental health therapist, marriage and family life counsellor, mentor, and counselling educator."
      />

      {/* Portrait + profile */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal direction="scale">
              <div className="lg:sticky lg:top-32">
                <div className="overflow-hidden rounded-[2.5rem] border border-line shadow-[0_40px_80px_-44px_rgba(12,27,51,0.4)]">
                  <Image
                    src="/gabriel.png"
                    alt="Gabriel Ajibade, counsellor at New Horizon Counselling Service"
                    width={1600}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="h-[24rem] w-full object-cover object-[center_28%] md:h-[32rem]"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-[3.5rem] leading-none text-highlight">
                    18
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
                {profile.map((para, i) => (
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
                    integrative , drawing from sound counselling principles
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
            items={credentials}
          />
          <DefinitionList
            label="Professional memberships"
            items={memberships}
          />

          <div className="grid gap-6 border-y border-line py-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <Reveal>
              <h2 className="eyebrow text-highlight-text">Areas of competence</h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="flex flex-wrap gap-2.5">
                {areasOfCompetence.map((area) => (
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
      <section className="border-t border-line bg-surface py-16 md:py-20">
        <Container>
          <Reveal direction="scale">
            <figure className="overflow-hidden rounded-[2rem] border border-line md:rounded-[2.5rem]">
              <Image
                src={photos.session.src}
                alt={photos.session.alt}
                width={photos.session.width}
                height={photos.session.height}
                sizes="(max-width: 1024px) 100vw, 80rem"
                className="h-56 w-full object-cover object-[center_35%] sm:h-72 md:h-[26rem]"
              />
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-muted text-pretty">
              Sessions run for 60 minutes, online via Google Meet or in person
              at the Ikeja office , whichever lets you speak most freely.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Ready to begin your journey?"
        body="Gabriel is here to support you with warmth, professionalism, and respect for your values and beliefs."
        message="Hello, I would like to learn more about Gabriel’s counselling approach."
      />
    </>
  );
}
