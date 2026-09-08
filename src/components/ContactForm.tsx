"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const fieldStyles =
  "w-full rounded-2xl border border-field-border bg-surface px-5 py-4 text-body placeholder:text-muted-light transition-all duration-300 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

/**
 * Composes the enquiry into a WhatsApp message rather than posting it
 * anywhere — there is no backend, and nothing a visitor types is stored
 * or transmitted until they choose to send it themselves.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
    window.open(`https://wa.me/2348034522900?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2.5 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className={fieldStyles}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2.5 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted"
        >
          Your message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="How can we help you?"
          className={`${fieldStyles} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 font-semibold text-white shadow-[0_14px_30px_-16px_rgba(12,27,51,0.9)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary hover:shadow-[0_20px_42px_-16px_rgba(10,53,144,0.75)] active:scale-[0.985]"
      >
        <WhatsAppIcon className="h-5 w-5 transition-transform duration-400 group-hover:scale-110" />
        Send via WhatsApp
      </button>

      <p className="text-[0.85rem] leading-relaxed text-muted-light">
        This form does not store your details. It opens WhatsApp with your
        message ready to send, so nothing leaves your device until you press
        send.
      </p>
    </form>
  );
}
