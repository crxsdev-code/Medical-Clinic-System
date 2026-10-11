import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Building2, FlaskConical, HeartHandshake, Pill, Stethoscope } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClinicHours from "@/components/ClinicHours";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import { usePageSeo } from "@/lib/usePageSeo";
const SERVICE_ICONS = {
    "medical-clinic": Stethoscope,
    pharmacy: Pill,
    laboratory: FlaskConical,
};
const APPROACH = [
    {
        title: "Listen first",
        description: "Patients are received attentively so that each visit starts with understanding, not assumptions.",
    },
    {
        title: "Explain clearly",
        description: "Consultations are discussed in plain language so patients know what to do next.",
    },
    {
        title: "Follow through",
        description: "Pharmacy and laboratory services are available in the same location to support the next step of care.",
    },
];
export default function About() {
    usePageSeo({
        title: "About NRM Mendoza Medical Clinic | Kapatagan",
        description: "Learn about NRM Mendoza Medical Clinic, Pharmacy and Laboratory — a clinic in Poblacion, Kapatagan, Lanao del Norte offering medical consultation, pharmacy and laboratory services.",
    });
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "About us", title: "About NRM Mendoza", description: "A medical clinic, pharmacy and laboratory serving patients in Kapatagan, Lanao del Norte." }), _jsx("section", { "aria-labelledby": "about-story", className: "shell py-16 sm:py-20", children: _jsxs("div", { className: "grid items-start gap-10 lg:grid-cols-2 lg:gap-16", children: [_jsxs(Reveal, { children: [_jsx(SectionHeading, { id: "about-story", eyebrow: "Our clinic", title: "Healthcare brought together in one place" }), _jsxs("div", { className: "mt-6 space-y-4 text-[0.95rem] leading-relaxed text-muted", children: [_jsxs("p", { children: [_jsx("strong", { className: "text-navy", children: clinic.name }), " is located at", " ", clinic.address.line1, ", ", clinic.address.line2, ", ", clinic.address.line3, "."] }), _jsx("p", { children: "The clinic brings together three essential services \u2014 medical consultation, pharmacy, and laboratory \u2014 so that patients can access what they need without travelling from place to place." }), _jsx("p", { children: "The team's philosophy is simple: professional care delivered with patience, respect and clear communication, for every patient who visits." })] }), _jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [_jsx(ButtonLink, { to: "/services", variant: "primary", size: "md", children: "Explore Our Services" }), _jsx(ButtonLink, { to: "/contact", variant: "ghost", size: "md", children: "Contact the Clinic" })] })] }), _jsxs(Reveal, { delay: 120, children: [_jsx("div", { className: "overflow-hidden rounded-xl border border-line shadow-soft", children: _jsx("div", { className: "aspect-[4/3] w-full", children: _jsx(PlaceholderImage, { label: "Clinic exterior / interior", hint: "Add an approved clinic photograph", tone: "light", icon: _jsx(Building2, { className: "h-6 w-6", "aria-hidden": "true" }) }) }) }), _jsxs("p", { className: "mt-4 rounded-xl border border-dashed border-line px-4 py-3 text-xs leading-relaxed text-muted", children: [_jsx("span", { className: "font-semibold text-navy", children: "Editorial placeholder:" }), " [Clinic history / background to be provided by the clinic.]"] })] })] }) }), _jsx("section", { "aria-labelledby": "about-services", className: "border-y border-line bg-white", children: _jsxs("div", { className: "shell py-16 sm:py-20", children: [_jsx(Reveal, { children: _jsx(SectionHeading, { id: "about-services", eyebrow: "What we do", title: "Three services, one location", description: "Each service supports the others, so a single visit can cover several needs." }) }), _jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((service, index) => {
                                const Icon = SERVICE_ICONS[service.id];
                                return (_jsx(Reveal, { delay: index * 90, children: _jsxs("article", { className: "h-full rounded-xl border border-line bg-mist p-7 transition hover:border-brand/40 hover:bg-white hover:shadow-soft", children: [_jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand shadow-soft", children: _jsx(Icon, { className: "h-5.5 w-5.5", "aria-hidden": "true" }) }), _jsx("h3", { className: "mt-5 text-lg font-bold tracking-tight text-navy", children: service.title }), _jsx("p", { className: "mt-2.5 text-sm leading-relaxed text-muted", children: service.summary })] }) }, service.id));
                            }) })] }) }), _jsx("section", { "aria-labelledby": "about-approach", className: "shell py-16 sm:py-20", children: _jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-16", children: [_jsxs(Reveal, { className: "lg:col-span-5", children: [_jsx(SectionHeading, { id: "about-approach", eyebrow: "Our approach", title: "Care that feels personal", description: "A patient-focused way of working that applies across the clinic, pharmacy and laboratory." }), _jsxs("span", { className: "mt-8 inline-flex items-center gap-2 rounded-lg border border-magenta/25 bg-magenta/5 px-4 py-2.5 text-sm font-semibold text-magenta", children: [_jsx(HeartHandshake, { className: "h-4 w-4", "aria-hidden": "true" }), "Compassionate care"] })] }), _jsx("div", { className: "lg:col-span-7", children: _jsx("ol", { className: "space-y-5", children: APPROACH.map((item, index) => (_jsx(Reveal, { as: "li", delay: index * 90, children: _jsxs("div", { className: "flex gap-5 rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7", children: [_jsx("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white", children: index + 1 }), _jsxs("div", { children: [_jsx("h3", { className: "text-base font-bold tracking-tight text-navy", children: item.title }), _jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted", children: item.description })] })] }) }, item.title))) }) })] }) }), _jsx("section", { "aria-labelledby": "about-hours", className: "border-t border-line bg-white", children: _jsxs("div", { className: "shell grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-start", children: [_jsxs(Reveal, { children: [_jsx(SectionHeading, { id: "about-hours", eyebrow: "Plan your visit", title: "Clinic Hours", description: "Opening hours for the clinic, pharmacy and laboratory." }), _jsxs("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-muted", children: ["For the most current schedule \u2014 especially on Sundays \u2014 please call", " ", _jsx("a", { href: `tel:${clinic.phones[0].tel}`, className: "font-semibold text-brand underline-offset-4 hover:underline", children: clinic.phones[0].display }), " ", "or check our official Facebook page."] })] }), _jsx(Reveal, { delay: 100, children: _jsx(ClinicHours, {}) })] }) }), _jsx(CTABand, { heading: "Visit NRM Mendoza Medical Clinic", description: "We look forward to welcoming you at Town Center, Poblacion, Kapatagan." })] }));
}
