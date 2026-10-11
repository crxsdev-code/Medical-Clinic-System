import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
/**
 * Shared section heading: eyebrow → title → supporting copy → optional link.
 */
export default function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark", link, as: Heading = "h2", id, className = "", }) {
    const centered = align === "center";
    const isLight = tone === "light";
    return (_jsxs("div", { className: `${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`, children: [eyebrow && (_jsxs("p", { className: [
                    "mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em]",
                    isLight ? "text-aqua" : "text-brand",
                ].join(" "), children: [_jsx("span", { "aria-hidden": "true", className: [
                            "h-px w-6",
                            isLight ? "bg-aqua/60" : "bg-brand/50",
                        ].join(" ") }), eyebrow] })), _jsx(Heading, { id: id, className: [
                    "text-[1.75rem] font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem]",
                    isLight ? "text-white" : "text-navy",
                ].join(" "), children: title }), description && (_jsx("p", { className: [
                    "mt-5 text-base leading-relaxed sm:text-lg",
                    isLight ? "text-white/70" : "text-muted",
                ].join(" "), children: description })), link && (_jsx("div", { className: centered ? "mt-7 flex justify-center" : "mt-7", children: _jsxs(Link, { to: link.to, className: [
                        "group inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                        isLight ? "text-white hover:text-aqua" : "text-brand hover:text-navy",
                    ].join(" "), children: [link.label, _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-1", "aria-hidden": "true" })] }) }))] }));
}
