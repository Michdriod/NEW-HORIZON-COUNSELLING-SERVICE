import Reveal from "./Reveal";
import Container from "./Container";
import ContactActions from "./ContactActions";

interface CtaBandProps {
  title: string;
  body: string;
  message?: string;
  label?: string;
}

/** Closing call to action on interior pages. */
export default function CtaBand({
  title,
  body,
  message = "Hello New Horizon Counselling Service, I would like to book a counselling session.",
  label = "Book on WhatsApp",
}: CtaBandProps) {
  return (
    <section className="field-deep grain relative overflow-hidden py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-highlight/10 blur-[120px]"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div>
            <Reveal>
              <h2 className="display-tight max-w-2xl text-[length:var(--text-h2)] text-white">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 max-w-xl leading-relaxed text-white/65 text-pretty">
                {body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <ContactActions
              tone="onDark"
              size="lg"
              whatsappLabel={label}
              message={message}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
