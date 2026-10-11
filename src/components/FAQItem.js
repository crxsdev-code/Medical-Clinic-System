import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { ChevronDown } from "lucide-react";
import ClinicHours from "./ClinicHours";
/**
 * Accessible accordion row: a button controls a labelled region and reports
 * its expanded state to assistive technology.
 */
export default function FAQItem({ faq, open, onToggle }) {
    const regionId = useId();
    const buttonId = useId();
    return (_jsxs("div", { className: `rounded-xl border transition-colors duration-300 ${open ? "border-brand/40 bg-white shadow-soft" : "border-line bg-white hover:border-navy/15"}`, children: [_jsx("h3", { children: _jsxs("button", { type: "button", id: buttonId, "aria-expanded": open, "aria-controls": regionId, onClick: onToggle, className: "flex w-full items-start justify-between gap-5 rounded-xl px-5 py-5 text-left sm:px-7 sm:py-6", children: [_jsx("span", { className: "text-base font-semibold leading-snug tracking-tight text-navy sm:text-lg", children: faq.question }), _jsx("span", { className: `mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ease-soft ${open
                                ? "rotate-180 border-brand bg-brand text-white"
                                : "border-line bg-mist text-navy"}`, "aria-hidden": "true", children: _jsx(ChevronDown, { className: "h-4 w-4" }) })] }) }), _jsx("div", { id: regionId, role: "region", "aria-labelledby": buttonId, className: `grid transition-[grid-template-rows,opacity] duration-300 ease-soft ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: _jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: "px-5 pb-6 sm:px-7 sm:pb-7", children: faq.render === "clinic-hours" ? (_jsx(ClinicHours, { variant: "card", className: "shadow-none" })) : (_jsx("p", { className: "text-[0.95rem] leading-relaxed text-muted", children: faq.answer })) }) }) })] }));
}
