import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqs } from "@/data/faqs";
export default function FAQSection({ items = faqs, allowMultiple = false, className = "", }) {
    const [openIds, setOpenIds] = useState([]);
    const toggle = (id) => {
        setOpenIds((current) => {
            if (current.includes(id)) {
                return current.filter((item) => item !== id);
            }
            return allowMultiple ? [...current, id] : [id];
        });
    };
    return (_jsx("div", { className: `space-y-4 ${className}`, children: items.map((faq) => (_jsx(FAQItem, { faq: faq, open: openIds.includes(faq.id), onToggle: () => toggle(faq.id) }, faq.id))) }));
}
