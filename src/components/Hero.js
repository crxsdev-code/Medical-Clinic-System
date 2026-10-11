import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, Clock } from "lucide-react";
import { ButtonLink } from "./Button";
import PhoneButton from "./PhoneButton";
import { clinic, weeklyHoursLabel, primaryPhone } from "@/data/clinic";
import heroImage from "@/assets/images/clinic-slide-1.jpg";
/**
 * Premium hero section - clean single-image composition.
 * Two-column layout with clear hierarchy: brand label, location, headline, description, CTAs.
 */
export default function Hero() {
    return (_jsxs("section", { className: "relative isolate flex min-h-[42rem] items-center overflow-hidden lg:min-h-screen", "aria-labelledby": "hero-title", children: [_jsx("div", { className: "absolute inset-0", children: _jsx("img", { src: heroImage, alt: "NRM Mendoza Medical Clinic in Kapatagan, Lanao del Norte", className: "h-full w-full object-cover object-[center_20%]", loading: "eager", draggable: false }) }), _jsx("div", { className: "pointer-events-none absolute inset-0", style: {
                    background: "linear-gradient(to right, rgba(11,39,51,0.90) 0%, rgba(11,39,51,0.75) 50%, rgba(11,39,51,0.40) 75%, rgba(11,39,51,0.20) 100%)",
                }, "aria-hidden": "true" }), _jsx("div", { className: "pointer-events-none absolute inset-0", style: {
                    background: "linear-gradient(to top, rgba(11,39,51,0.85) 0%, transparent 50%)",
                }, "aria-hidden": "true" }), _jsxs("div", { className: "shell relative z-10 grid w-full gap-10 pb-16 pt-[7.5rem] sm:pt-[8.5rem] lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-24 lg:pt-[9.5rem]", children: [_jsxs("div", { className: "lg:col-span-7 xl:col-span-8", children: [_jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-aqua mb-4", children: "NRM MENDOZA MEDICAL CLINIC" }), _jsx("p", { className: "text-sm font-medium text-white/80 mb-6", children: "KAPATAGAN, LANAO DEL NORTE" }), _jsxs("h1", { id: "hero-title", className: "text-[2.5rem] font-bold leading-[1.1] text-white mb-6 sm:text-[3rem] lg:text-[3.75rem] xl:text-[4rem]", style: { letterSpacing: "-0.025em", maxWidth: "800px" }, children: ["Compassionate Care.", _jsx("br", {}), _jsx("span", { style: { color: "#20b8d8" }, children: "Better Health." })] }), _jsx("p", { className: "text-base leading-relaxed text-white/80 mb-8 max-w-lg sm:text-lg", children: "Medical clinic, pharmacy, and laboratory services for you and your family in Kapatagan, Lanao del Norte." }), _jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center mb-8", children: [_jsxs(ButtonLink, { to: "/services", variant: "primary", size: "lg", children: ["Explore Our Services", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })] }), _jsx(ButtonLink, { to: "/contact", variant: "on-dark", size: "lg", children: "Contact the Clinic" })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-6 text-sm text-white/70", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-4 w-4", "aria-hidden": "true" }), _jsx("span", { children: weeklyHoursLabel })] }), _jsx(PhoneButton, { variant: "text", showLabel: true, className: "text-white/70 hover:text-white", ariaLabel: `Call the clinic at ${primaryPhone.display}` })] })] }), _jsx("div", { className: "hidden lg:block lg:col-span-5 xl:col-span-4" })] })] }));
}
