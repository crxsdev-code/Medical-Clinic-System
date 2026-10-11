import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Facebook, MessageCircleQuestion, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";
export default function FAQ() {
    usePageSeo({
        title: "FAQs | NRM Mendoza Medical Clinic",
        description: "Answers to frequently asked questions about NRM Mendoza Medical Clinic, Pharmacy and Laboratory — hours, location, services and how to contact the clinic.",
    });
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Help centre", title: "Frequently Asked Questions", description: "Quick, factual answers about the clinic, its services and how to reach us." }), _jsx("section", { "aria-labelledby": "faq-list", className: "shell py-16 sm:py-20", children: _jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-14", children: [_jsx(Reveal, { className: "lg:col-span-4", children: _jsxs("div", { className: "lg:sticky lg:top-28", children: [_jsx(SectionHeading, { id: "faq-list", eyebrow: "Questions", title: "How can we help?", description: "Can't find what you are looking for? The clinic team is happy to assist." }), _jsxs("div", { className: "mt-8 space-y-3", children: [_jsxs(ButtonAnchor, { href: `tel:${clinic.phones[0].tel}`, variant: "primary", size: "md", className: "w-full", "aria-label": `Call the clinic at ${clinic.phones[0].display}`, children: [_jsx(Phone, { className: "h-4 w-4", "aria-hidden": "true" }), "Call ", clinic.phones[0].display] }), _jsxs(ButtonAnchor, { href: clinic.facebook, variant: "secondary", size: "md", className: "w-full", "aria-label": "Message us on Facebook (opens in a new tab)", children: [_jsx(Facebook, { className: "h-4 w-4", "aria-hidden": "true" }), "Message on Facebook"] }), _jsxs(ButtonLink, { to: "/contact", variant: "ghost", size: "md", className: "w-full", children: [_jsx(MessageCircleQuestion, { className: "h-4 w-4", "aria-hidden": "true" }), "Send an enquiry"] })] })] }) }), _jsx("div", { className: "lg:col-span-8", children: _jsx(FAQSection, {}) })] }) }), _jsx(CTABand, { heading: "Still have a question?", description: "Reach the clinic by phone, Facebook or the contact form \u2014 we will get back to you during opening hours." })] }));
}
