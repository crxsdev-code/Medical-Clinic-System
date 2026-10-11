import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowRight, Info, Phone, Stethoscope, Pill, FlaskConical, CalendarCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import FAQSection from "@/components/FAQSection";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";
const ICONS = {
    stethoscope: Stethoscope,
    pill: Pill,
    flask: FlaskConical,
};
const ACCENTS = {
    brand: "bg-brand/10 text-brand",
    magenta: "bg-magenta/10 text-magenta",
    leaf: "bg-leaf/10 text-leaf",
};
export default function Services() {
    usePageSeo({
        title: "Medical, Pharmacy & Laboratory Services | NRM Mendoza",
        description: "Medical consultation, pharmacy and laboratory services at NRM Mendoza Medical Clinic, Pharmacy and Laboratory in Kapatagan, Lanao del Norte.",
    });
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Our services", title: "Medical, Pharmacy & Laboratory Services", description: "Essential healthcare services available in one location at Town Center, Poblacion, Kapatagan.", children: _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs(ButtonLink, { to: "/contact", variant: "on-dark", size: "md", children: [_jsx(CalendarCheck, { className: "h-4 w-4", "aria-hidden": "true" }), "Book a Consultation"] }), _jsxs(ButtonAnchor, { href: `tel:${clinic.phones[0].tel}`, variant: "on-dark", size: "md", "aria-label": `Call the clinic at ${clinic.phones[0].display}`, children: [_jsx(Phone, { className: "h-4 w-4", "aria-hidden": "true" }), clinic.phones[0].display] })] }) }), _jsx("section", { "aria-label": "Service details", className: "shell py-16 sm:py-20", children: _jsx("div", { className: "space-y-16 sm:space-y-20", children: services.map((service, index) => {
                        const Icon = ICONS[service.icon];
                        const reversed = index % 2 === 1;
                        return (_jsxs("article", { id: service.slug, className: "grid scroll-mt-32 items-center gap-8 lg:grid-cols-2 lg:gap-14", children: [_jsxs(Reveal, { className: reversed ? "lg:order-2" : "", children: [_jsx("span", { className: `flex h-12 w-12 items-center justify-center rounded-lg ${ACCENTS[service.accent]}`, children: _jsx(Icon, { className: "h-6 w-6", "aria-hidden": "true" }) }), _jsxs("p", { className: "mt-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand", children: [_jsx("span", { className: "h-px w-6 bg-brand/50", "aria-hidden": "true" }), `0${index + 1}`, " \u2014 ", service.title] }), _jsx("h2", { className: "mt-3 text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl", children: service.title }), _jsx("p", { className: "mt-5 text-base leading-relaxed text-muted", children: service.description }), _jsxs("div", { className: "mt-6 flex items-start gap-3 rounded-lg border border-line bg-white p-5 shadow-soft", children: [_jsx(Info, { className: "mt-0.5 h-4.5 w-4.5 shrink-0 text-brand", "aria-hidden": "true" }), _jsx("p", { className: "text-sm leading-relaxed text-muted", children: "This page describes services at category level. For specific examinations, availability or requirements, please contact the clinic directly \u2014 our team will be glad to assist." })] }), _jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [_jsxs(ButtonLink, { to: "/contact", variant: "primary", size: "md", children: ["Contact the Clinic", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })] }), _jsxs(ButtonAnchor, { href: `tel:${clinic.phones[0].tel}`, variant: "ghost", size: "md", "aria-label": `Call the clinic at ${clinic.phones[0].display}`, children: [_jsx(Phone, { className: "h-4 w-4", "aria-hidden": "true" }), "Call"] })] })] }), _jsx(Reveal, { delay: 120, className: reversed ? "lg:order-1" : "", children: _jsx("div", { className: "overflow-hidden rounded-xl border border-line shadow-soft", children: _jsx("div", { className: "aspect-[4/3] w-full", children: _jsx(PlaceholderImage, { label: `${service.title} area`, hint: "Add an approved photograph", tone: "dark", icon: _jsx(Icon, { className: "h-6 w-6", "aria-hidden": "true" }) }) }) }) })] }, service.id));
                    }) }) }), _jsx("section", { "aria-labelledby": "services-faq", className: "border-t border-line bg-white", children: _jsx("div", { className: "shell py-16 sm:py-20", children: _jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-16", children: [_jsx(Reveal, { className: "lg:col-span-4", children: _jsx(SectionHeading, { id: "services-faq", eyebrow: "Good to know", title: "Service questions", description: "Answers to the questions patients ask most often.", link: { label: "See all FAQs", to: "/faq" } }) }), _jsx("div", { className: "lg:col-span-8", children: _jsx(FAQSection, { items: faqs.filter((faq) => ["hours", "services", "pharmacy-laboratory", "appointment"].includes(faq.id)) }) })] }) }) }), _jsx(CTABand, { heading: "Have a question about a service?", description: "Call the clinic or send us a message \u2014 we will help you find the right next step." })] }));
}
