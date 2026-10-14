import { useId } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { Faq } from "@/data/faqs";
import ClinicHours from "./ClinicHours";

interface FAQItemProps {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
}

/**
 * Accessible accordion row: a button controls a labelled region and reports
 * its expanded state to assistive technology.
 */
export default function FAQItem({ faq, open, onToggle }: FAQItemProps) {
  const regionId = useId();
  const buttonId = useId();

  return (
    <div
      className={`rounded-xl border transition-colors duration-300 ${
        open ? "border-brand/40 bg-white shadow-soft" : "border-line bg-white hover:border-navy/15"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={regionId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-5 rounded-xl px-5 py-5 text-left sm:px-7 sm:py-6"
        >
          <span className="text-base font-semibold leading-snug tracking-tight text-navy sm:text-lg">
            {faq.question}
          </span>

          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ease-soft ${
              open
                ? "rotate-180 border-brand bg-brand text-white"
                : "border-line bg-mist text-navy"
            }`}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </button>
      </h3>

      <div
        id={regionId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-soft ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 sm:px-7 sm:pb-7">
            {faq.render === "clinic-hours" ? (
              <ClinicHours variant="card" className="shadow-none" />
            ) : (
              <>
                <p className="text-[0.95rem] leading-relaxed text-muted">{faq.answer}</p>
                {faq.link && (
                  <a
                    href={faq.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy"
                    aria-label={faq.link.text}
                  >
                    {faq.link.text}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
