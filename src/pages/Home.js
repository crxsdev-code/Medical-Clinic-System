import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Boxes, HeartHandshake, MapPin, } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import DoctorModal from "@/components/DoctorModal";
import ClinicHours from "@/components/ClinicHours";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import MapSection from "@/components/MapSection";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { faqs } from "@/data/faqs";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";
const PILLARS = [
    {
        icon: HeartHandshake,
        title: "Patient-Centered Care",
        description: "Every visit is handled with patience and respect, with attention to the person behind the concern.",
    },
    {
        icon: BadgeCheck,
        title: "Professional Healthcare",
        description: "Consultation is delivered by the clinic's physicians in a professional and discreet environment.",
    },
    {
        icon: MapPin,
        title: "Convenient Location",
        description: "Find us at Town Center, Poblacion, Kapatagan — right in the middle of the town.",
    },
    {
        icon: Boxes,
        title: "Integrated Services",
        description: "Medical consultation, pharmacy and laboratory services are available in a single location.",
    },
];
export default function Home() {
    usePageSeo({
        title: "NRM Mendoza Medical Clinic, Pharmacy and Laboratory | Kapatagan",
        description: "Medical consultation, pharmacy and laboratory services in Poblacion, Kapatagan, Lanao del Norte. NRM Mendoza Medical Clinic — healthcare you can trust.",
    });
    const [profile, setProfile] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx("section", { "aria-labelledby": "visit-title", className: "border-b border-line bg-white", children: _jsxs("div", { className: "shell py-16 sm:py-20", children: [_jsx(SectionHeading, { id: "visit-title", eyebrow: "Plan your visit", title: "Clinic Hours & Location", description: "We are open six days a week at Town Center, Poblacion, Kapatagan." }), _jsxs("div", { className: "mt-10 grid items-stretch gap-6 lg:grid-cols-2", children: [_jsx(ClinicHours, { className: "h-full" }), _jsx(MapSection, { variant: "compact", className: "h-full" })] })] }) }), _jsxs("section", { "aria-labelledby": "services-title", className: "shell py-20 sm:py-24", children: [_jsx(SectionHeading, { id: "services-title", eyebrow: "What we offer", title: "Healthcare Services in One Place", description: "Access essential healthcare services through NRM Mendoza Medical Clinic, Pharmacy and Laboratory.", align: "center" }), _jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((service) => (_jsx(ServiceCard, { service: service }, service.id))) })] }), _jsx("section", { "aria-labelledby": "why-title", className: "border-y border-line bg-white", children: _jsxs("div", { className: "shell py-20 sm:py-24", children: [_jsx(SectionHeading, { id: "why-title", eyebrow: "Why NRM Mendoza", title: "Care Built Around Patients", description: "Three services, one location, and a team that treats every patient with dignity." }), _jsx("div", { className: "mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", children: PILLARS.map(({ icon: Icon, title, description }, index) => (_jsxs("article", { className: "group", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white", children: _jsx(Icon, { className: "h-5.5 w-5.5", "aria-hidden": "true" }) }), _jsxs("span", { className: "text-xs font-semibold tabular-nums text-navy/25", children: ["0", index + 1] })] }), _jsx("h3", { className: "mt-5 text-lg font-bold tracking-tight text-navy", children: title }), _jsx("p", { className: "mt-2.5 text-sm leading-relaxed text-muted", children: description })] }, title))) })] }) }), _jsx("section", { "aria-labelledby": "about-preview-title", className: "shell py-20 sm:py-24", children: _jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16", children: [_jsxs("div", { children: [_jsx(SectionHeading, { id: "about-preview-title", eyebrow: "About NRM Mendoza", title: "A clinic, pharmacy and laboratory working together", description: _jsx(_Fragment, { children: "NRM Mendoza Medical Clinic, Pharmacy and Laboratory serves patients from Unit 7 and 8, Town Center, Poblacion, Kapatagan \u2014 bringing medical consultation, pharmacy services and laboratory services under one roof." }) }), _jsxs("div", { className: "mt-7 space-y-4 text-[0.95rem] leading-relaxed text-muted", children: [_jsx("p", { children: "Our approach is straightforward: professional care, clear communication, and respect for every patient who comes through the door." }), _jsx("p", { children: "Because the clinic, pharmacy and laboratory share the same location, patients can take care of several needs during a single visit." })] }), _jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [_jsxs(ButtonLink, { to: "/about", variant: "primary", size: "md", children: ["More About the Clinic", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })] }), _jsx(ButtonLink, { to: "/doctors", variant: "ghost", size: "md", children: "Meet Our Doctors" })] })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "overflow-hidden rounded-[2rem] border border-line shadow-soft", children: _jsx("div", { className: "aspect-[4/3] w-full", children: _jsx(PlaceholderImage, { label: "Inside the clinic", hint: "Add a photo of the clinic", tone: "light", icon: _jsx(MapPin, { className: "h-6 w-6", "aria-hidden": "true" }) }) }) }), _jsxs("div", { className: "absolute -bottom-6 left-6 right-6 rounded-2xl border border-line bg-white p-5 shadow-lift sm:right-auto sm:w-80", children: [_jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand", children: "One location" }), _jsx("p", { className: "mt-2 text-sm font-semibold leading-snug text-navy", children: "Medical Clinic \u00B7 Pharmacy \u00B7 Laboratory" }), _jsxs("p", { className: "mt-1.5 text-xs leading-relaxed text-muted", children: [clinic.address.line1, ", ", clinic.address.line2] })] })] })] }) }), _jsx("section", { "aria-labelledby": "doctors-preview-title", className: "border-y border-line bg-white", children: _jsxs("div", { className: "shell py-20 sm:py-24", children: [_jsx(SectionHeading, { id: "doctors-preview-title", eyebrow: "Our team", title: "Meet Our Doctors", description: "Consultation is provided by the clinic's physicians.", align: "center", link: { label: "View all doctors", to: "/doctors" } }), _jsx("div", { className: "mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2", children: doctors.map((doctor) => (_jsx(DoctorCard, { doctor: doctor, onOpen: setProfile }, doctor.id))) })] }) }), _jsx("section", { "aria-labelledby": "faq-preview-title", className: "border-t border-line bg-white", children: _jsx("div", { className: "shell py-20 sm:py-24", children: _jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-16", children: [_jsx("div", { className: "lg:col-span-4", children: _jsx(SectionHeading, { id: "faq-preview-title", eyebrow: "Questions", title: "Common Questions", description: "Quick answers about the clinic, its services and how to reach us.", link: { label: "See all FAQs", to: "/faq" } }) }), _jsx("div", { className: "lg:col-span-8", children: _jsx(FAQSection, { items: faqs.slice(0, 4) }) })] }) }) }), _jsx(CTABand, {}), _jsx(DoctorModal, { doctor: profile, onClose: () => setProfile(null) })] }));
}
