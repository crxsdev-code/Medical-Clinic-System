import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Phone } from "lucide-react";
import { clinic, weeklyHoursLabel } from "@/data/clinic";
/**
 * Slim information strip above the main navigation.
 *
 * Deliberately minimal: trust line · hours · phone number.
 * Collapses smoothly once the page is scrolled.
 */
export default function TopBar({ collapsed }) {
    const primary = clinic.phones[0];
    return (_jsx("div", { className: [
            "overflow-hidden bg-deep text-white transition-all duration-500 ease-soft",
            collapsed ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        ].join(" "), "aria-hidden": collapsed ? "true" : undefined, inert: collapsed, children: _jsxs("div", { className: "shell flex h-9 items-center justify-between gap-4 text-[13px]", children: [_jsxs("p", { className: "flex min-w-0 items-center gap-2 truncate", children: [_jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-leaf", "aria-hidden": "true" }), _jsx("span", { className: "font-medium text-white/85", children: clinic.tagline })] }), _jsxs("div", { className: "flex shrink-0 items-center gap-5", children: [_jsx("span", { className: "hidden text-white/55 md:inline", children: weeklyHoursLabel }), _jsxs("a", { href: `tel:${primary.tel}`, className: "inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-aqua", "aria-label": `Call the clinic at ${primary.display}`, children: [_jsx(Phone, { className: "h-3.5 w-3.5", "aria-hidden": "true" }), _jsx("span", { className: "tabular-nums tracking-tight", children: primary.display })] })] })] }) }));
}
