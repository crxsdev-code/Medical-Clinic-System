import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { CalendarCheck, Phone, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import DoctorModal from "@/components/DoctorModal";
import ClinicHours from "@/components/ClinicHours";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";
export default function Doctors() {
    usePageSeo({
        title: "Doctors | NRM Mendoza Medical Clinic",
        description: "Meet the physicians of NRM Mendoza Medical Clinic, Pharmacy and Laboratory in Kapatagan, Lanao del Norte — including our pediatrician and general physician.",
    });
    const [profile, setProfile] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Our team", title: "Meet Our Doctors", description: "Consultation is provided by the clinic's physicians at Town Center, Poblacion, Kapatagan.", children: _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs(ButtonLink, { to: "/contact", variant: "on-dark", size: "md", children: [_jsx(CalendarCheck, { className: "h-4 w-4", "aria-hidden": "true" }), "Book a Consultation"] }), _jsxs(ButtonAnchor, { href: `tel:${clinic.phones[0].tel}`, variant: "on-dark", size: "md", "aria-label": `Call the clinic at ${clinic.phones[0].display}`, children: [_jsx(Phone, { className: "h-4 w-4", "aria-hidden": "true" }), clinic.phones[0].display] })] }) }), _jsxs("section", { "aria-labelledby": "doctors-list", className: "shell py-16 sm:py-20", children: [_jsx(Reveal, { children: _jsx(SectionHeading, { id: "doctors-list", eyebrow: "Physicians", title: "The people behind the care", description: "Select \u201CView Profile\u201D to learn more about each physician." }) }), _jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl", children: doctors.map((doctor, index) => (_jsx(DoctorCard, { doctor: doctor, delay: index * 100, onOpen: setProfile }, doctor.id))) }), _jsx(Reveal, { delay: 200, children: _jsxs("p", { className: "mt-8 flex max-w-2xl items-start gap-3 rounded-lg border border-dashed border-line bg-white/70 p-5 text-xs leading-relaxed text-muted", children: [_jsx(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-leaf", "aria-hidden": "true" }), _jsxs("span", { children: [_jsx("strong", { className: "text-navy", children: "Editorial placeholder:" }), " full professional profiles \u2014 schedule, credentials and areas of focus \u2014 will be published on this page once confirmed by the clinic. Only verified information is shown."] })] }) })] }), _jsx("section", { "aria-labelledby": "doctors-hours", className: "border-y border-line bg-white", children: _jsxs("div", { className: "shell grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-start", children: [_jsxs(Reveal, { children: [_jsx(SectionHeading, { id: "doctors-hours", eyebrow: "Availability", title: "Clinic Hours", description: "Consultations are seen during the clinic's opening hours." }), _jsxs("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-muted", children: ["Doctor schedules may vary. To confirm availability for a specific day, please call", " ", _jsx("a", { href: `tel:${clinic.phones[0].tel}`, className: "font-semibold text-brand underline-offset-4 hover:underline", children: clinic.phones[0].display }), " ", "before visiting."] })] }), _jsx(Reveal, { delay: 100, children: _jsx(ClinicHours, {}) })] }) }), _jsx(CTABand, { heading: "Book a consultation", description: "Online booking is coming in a future version. For now, call the clinic or send an enquiry and our team will assist you." }), _jsx(DoctorModal, { doctor: profile, onClose: () => setProfile(null) })] }));
}
