import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
/**
 * Deep-navy header used on every inner page. The sticky white navbar sits
 * above it, so the header stays quiet: texture only, no colour blobs.
 */
export default function PageHeader({ eyebrow, title, description, crumb, children, }) {
    return (_jsxs("header", { className: "relative overflow-hidden bg-deep", children: [_jsx("div", { className: "pointer-events-none absolute inset-0 dot-grid opacity-50", "aria-hidden": "true" }), _jsx("div", { className: "pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full", style: { background: "rgba(22, 140, 197, 0.16)", filter: "blur(80px)" }, "aria-hidden": "true" }), _jsx("div", { className: "shell relative z-10 py-14 sm:py-16 lg:py-20", children: _jsxs(Reveal, { children: [_jsx("nav", { "aria-label": "Breadcrumb", children: _jsxs("ol", { className: "flex flex-wrap items-center gap-1.5 text-sm text-white/55", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: "transition-colors hover:text-aqua", children: "Home" }) }), _jsx("li", { "aria-hidden": "true", children: _jsx(ChevronRight, { className: "h-4 w-4" }) }), _jsx("li", { className: "text-white/85", "aria-current": "page", children: crumb ?? title })] }) }), eyebrow && (_jsxs("p", { className: "mt-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-aqua", children: [_jsx("span", { className: "h-px w-6 bg-aqua/50", "aria-hidden": "true" }), eyebrow] })), _jsx("h1", { className: "mt-4 max-w-4xl text-[1.9rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.9rem]", children: title }), description && (_jsx("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg", children: description })), children && _jsx("div", { className: "mt-8", children: children })] }) })] }));
}
