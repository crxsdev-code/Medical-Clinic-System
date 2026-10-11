import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Pill, FlaskConical } from "lucide-react";
const ICONS = {
    stethoscope: Stethoscope,
    pill: Pill,
    flask: FlaskConical,
};
const ACCENTS = {
    brand: {
        icon: "bg-brand/10 text-brand",
        line: "bg-brand",
        arrow: "text-brand",
    },
    magenta: {
        icon: "bg-magenta/10 text-magenta",
        line: "bg-magenta",
        arrow: "text-magenta",
    },
    leaf: {
        icon: "bg-leaf/10 text-leaf",
        line: "bg-leaf",
        arrow: "text-leaf",
    },
};
export default function ServiceCard({ service }) {
    const Icon = ICONS[service.icon];
    const accent = ACCENTS[service.accent];
    return (_jsxs("article", { className: "group card card-hover relative flex h-full flex-col overflow-hidden p-7 sm:p-8", children: [_jsx("span", { className: `absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-soft group-hover:scale-x-100 ${accent.line}`, "aria-hidden": "true" }), _jsx("span", { className: `flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 ${accent.icon}`, children: _jsx(Icon, { className: "h-6 w-6", "aria-hidden": "true" }) }), _jsx("h3", { className: "mt-6 text-xl font-bold tracking-tight text-navy", children: service.title }), _jsx("p", { className: "mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted", children: service.summary }), _jsxs(Link, { to: `/services#${service.slug}`, className: "mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy transition-colors hover:text-brand", "aria-label": `Learn more about ${service.title}`, children: ["Learn More", _jsx(ArrowRight, { className: `h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-1 ${accent.arrow}`, "aria-hidden": "true" })] })] }));
}
