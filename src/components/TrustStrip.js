import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FlaskConical, Pill, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/data/services";
const ICONS = {
    stethoscope: Stethoscope,
    pill: Pill,
    flask: FlaskConical,
};
/**
 * Slim horizontal trust strip directly under the hero: the clinic's three
 * primary services, one line each. Deliberately quiet — typography does the
 * work, the icon is only an orientation cue.
 */
export default function TrustStrip() {
    return (_jsx("section", { "aria-label": "Primary services", className: "border-b border-line bg-white", children: _jsx("div", { className: "shell", children: _jsx("ul", { className: "grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0", children: services.map((service, index) => {
                    const Icon = ICONS[service.icon];
                    return (_jsxs(Reveal, { as: "li", delay: index * 90, className: "flex items-start gap-4 py-7 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0 lg:px-8", children: [_jsx("span", { className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand", children: _jsx(Icon, { className: "h-5 w-5", "aria-hidden": "true" }) }), _jsxs("span", { className: "min-w-0", children: [_jsx("span", { className: "block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-navy", children: service.title }), _jsx("span", { className: "mt-1.5 block text-sm leading-relaxed text-muted", children: service.trustLine })] })] }, service.id));
                }) }) }) }));
}
