import { useState } from "react";

import FAQItem from "./FAQItem";
import { faqs, type Faq } from "@/data/faqs";

interface FAQSectionProps {
  /** Override the default list (e.g. show only the first three). */
  items?: Faq[];
  /** Allow several open rows at once (default: one at a time). */
  allowMultiple?: boolean;
  className?: string;
}

export default function FAQSection({
  items = faqs,
  allowMultiple = false,
  className = "",
}: FAQSectionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }
      return allowMultiple ? [...current, id] : [id];
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((faq) => (
        <FAQItem key={faq.id} faq={faq} open={openIds.includes(faq.id)} onToggle={() => toggle(faq.id)} />
      ))}
    </div>
  );
}
