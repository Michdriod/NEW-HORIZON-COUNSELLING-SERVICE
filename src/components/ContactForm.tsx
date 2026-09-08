"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  "w-full rounded-2xl border border-field-border bg-surface px-5 py-4 text-body placeholder:text-muted-light transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Written enquiry form. Posts to Web3Forms, which forwards the message to
 * the practice inbox — no backend or database of our own, and nothing is
 * stored on this site.
 *
 * Until an access key is configured the form degrades to composing a
 * WhatsApp message, so it is never a dead end.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!ACCESS_KEY) {
      window.open(
        whatsappLink(`Hello, my name is ${name}. ${message}`),
        "_blank"
      );
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Website enquiry from ${name}`,
          from_name: "New Horizon website",
          name,
          email,
          message,
          botcheck,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
      if (data.success) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-sand p-7 text-center"
      >
        <p className="font-display text-[1.35rem] text-ink">Message sent</p>
        <p className="mt-3 leading-relaxed text-muted">
          Thank you for reaching out. Gabriel will reply to you personally,
          usually within one working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-5 inline-flex py-2 text-[0.9rem] font-semibold text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      {/* Honeypot. Hidden from people and from screen readers; bots fill it
          in and Web3Forms then discards the submission as spam. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        checked={botcheck === "true"}
        onChange={(e) => setBotcheck(e.target.checked ? "true" : "")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="mb-2.5 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2.5 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="So we can reply to you"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2.5 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Let us know you would like to talk, and we will arrange a time."
          className={`${field} resize-y`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-highlight/40 bg-highlight/10 px-4 py-3 text-[0.9rem] text-ink">
          Something went wrong sending that. Please try again, or{" "}
          <a href={whatsappLink("Hello, I tried the website form and it did not send.")} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            message us on WhatsApp
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 font-semibold text-white shadow-[0_14px_30px_-16px_rgba(12,27,51,0.9)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary hover:shadow-[0_20px_42px_-16px_rgba(10,53,144,0.75)] active:scale-[0.985] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : ACCESS_KEY ? "Send message" : "Send via WhatsApp"}
        {!ACCESS_KEY && <WhatsAppIcon className="h-5 w-5" />}
      </button>

      {/* This form is not a confidential channel, so the caveat is given
          the weight of a notice rather than buried as fine print. */}
      <div className="flex gap-3.5 rounded-2xl border border-line bg-sand p-5">
        <svg
          className="mt-0.5 h-5 w-5 shrink-0 text-highlight-text"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.6}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l7.5 3.5v5c0 4.5-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5-7.5-9.5v-5L12 3Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5v3.5M12 16h.01" />
        </svg>
        <p className="text-[0.875rem] leading-relaxed text-body">
          <strong className="font-semibold text-ink">
            Please keep this message brief.
          </strong>{" "}
          Simply let us know you&apos;d like to talk and we&apos;ll arrange a
          private session where anything personal can be discussed
          confidentially. Your message is delivered to{" "}
          {site.email ?? "us"} and is not stored on this website.
        </p>
      </div>
    </form>
  );
}
