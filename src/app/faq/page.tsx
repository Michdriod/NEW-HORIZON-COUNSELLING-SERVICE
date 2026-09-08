import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ | New Horizon Counselling Service",
  description:
    "Get answers to common questions about counselling sessions, confidentiality, online sessions, and booking at New Horizon Counselling Service in Lagos, Nigeria.",
};

const groups = [
  {
    label: "Sessions",
    items: [
      {
        question: "What should I expect in my first session?",
        answer:
          "In your first session, we will get to know each other and discuss your reasons for seeking counselling or mentoring. This initial meeting is an opportunity for you to share your concerns and goals. We will also go over the structure of our sessions, confidentiality, and any other questions you may have. This helps create a safe and comfortable environment for your journey.",
      },
      {
        question: "How long does therapy take?",
        answer:
          "Each session usually lasts one hour. The duration of therapy varies depending on individual needs and goals. Some people may benefit from a few sessions, while others may require a more extended period. During our initial meetings, we can discuss your specific situation and develop a tailored plan that suits you best. Our goal is to ensure you receive the support you need at your own pace.",
      },
      {
        question: "Is therapy confidential?",
        answer:
          "Yes, therapy sessions are confidential. Your privacy is of utmost importance, and all information shared during our sessions is kept strictly confidential. The details of exceptions will be discussed during the session.",
      },
      {
        question: "Do you offer online sessions?",
        answer:
          "Yes, we offer online sessions for both counselling and mentoring. This allows you to receive support from the comfort of your home or any location that is convenient for you. Online sessions are conducted via secure video conferencing platforms to ensure your privacy and confidentiality.",
      },
    ],
  },
  {
    label: "Booking & fees",
    items: [
      {
        question: "What are your fees?",
        answer:
          "Our session fees are shared during the booking process. Payment is made via bank transfer after you book your session. We offer a free 15-minute intro call so you can learn more about our services before committing.",
      },
      {
        question: "How do I book a session?",
        answer:
          "Booking is simple — send us a message on WhatsApp and we’ll guide you through the process. You can also visit our Book a Session page for more details.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We kindly ask for at least 24 hours’ notice to reschedule or cancel a session. This allows us to better serve all our clients.",
      },
    ],
  },
  {
    label: "Approach",
    items: [
      {
        question: "Do you offer faith-based counselling?",
        answer:
          "Yes, we clearly offer faith-based counselling as an option. Our approach is warm, ethical, practical, and integrative, drawing from sound counselling principles while respectfully incorporating Christian values where clients desire a faith-based process.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked"
        title="Questions, answered honestly."
        lede="Common questions about our counselling services, sessions, and how we can support you."
      />

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <div className="space-y-20">
            {groups.map((group, gi) => (
              <div
                key={group.label}
                className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16"
              >
                <Reveal>
                  <h2 className="eyebrow text-highlight-text lg:sticky lg:top-32">
                    {group.label}
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <Accordion items={group.items} defaultOpen={gi === 0 ? 0 : null} />
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-16 text-muted">
              Still deciding?{" "}
              <Link
                href="/book"
                className="link-underline font-semibold text-primary"
              >
                See how booking works
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Still have questions?"
        body="We’re happy to answer anything else you may have. Reach out on WhatsApp and we’ll get back to you promptly."
        message="Hello, I have a question about your counselling services."
        label="Ask on WhatsApp"
      />
    </>
  );
}
