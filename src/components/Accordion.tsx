"use client";

import { useId, useState } from "react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index open on first paint. Pass `null` for all closed. */
  defaultOpen?: number | null;
}

/**
 * Animated disclosure list. The panel animates via a `grid-template-rows`
 * 0fr -> 1fr transition, which eases to the content's natural height with
 * no JS measurement and no snap on first paint.
 */
export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <AccordionRow
          key={item.question}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
          id={`${baseId}-${i}`}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="group">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors duration-300"
        >
          <span
            className={`font-display text-[1.15rem] leading-snug transition-colors duration-300 md:text-[1.3rem] ${
              isOpen ? "text-primary" : "text-ink group-hover:text-primary"
            }`}
          >
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={`relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "rotate-[135deg] border-primary bg-primary text-white"
                : "border-line-strong text-ink group-hover:border-ink"
            }`}
          >
            <span className="absolute h-px w-3 bg-current" />
            <span className="absolute h-3 w-px bg-current" />
          </span>
        </button>
      </h3>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-8 pr-6 leading-relaxed text-muted md:pr-12">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
