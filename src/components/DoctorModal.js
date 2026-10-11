import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import Modal from "./Modal";
import { AvatarPlaceholder } from "./PlaceholderImage";
import { ButtonAnchor, ButtonLink } from "./Button";
import { clinic, primaryPhone } from "@/data/clinic";
/**
 * Accessible profile dialog (keyboard: Escape closes, focus is trapped and
 * restored). Version 1 shows only confirmed information — credentials are
 * added here once the clinic provides them.
 */
export default function DoctorModal({ doctor, onClose }) {
    const titleId = "doctor-modal-title";
    const descId = "doctor-modal-description";
    return (_jsx(Modal, { open: doctor !== null, onClose: onClose, labelledBy: titleId, describedBy: descId, panelClassName: "sm:max-w-3xl", children: doctor && (_jsxs("div", { className: "sm:grid sm:grid-cols-5", children: [_jsx("div", { className: "relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-auto sm:min-h-full", children: doctor.photo ? (_jsx("img", { src: doctor.photo, alt: doctor.photoAlt, className: "h-full w-full object-cover object-top" })) : (_jsx(AvatarPlaceholder, { name: doctor.name })) }), _jsxs("div", { className: "p-6 pt-8 sm:col-span-3 sm:p-9 sm:pt-9", children: [_jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand", children: doctor.specialty }), _jsx("h2", { id: titleId, className: "mt-3 pr-10 text-2xl font-bold leading-tight tracking-tight text-navy sm:text-[1.75rem]", children: doctor.name }), _jsx("p", { id: descId, className: "mt-4 text-[0.95rem] leading-relaxed text-muted", children: doctor.description }), _jsxs("div", { className: "mt-5 rounded-lg border border-line bg-mist p-5", children: [_jsx("p", { className: "text-sm leading-relaxed text-ink", children: doctor.profile }), _jsxs("p", { className: "mt-3 text-xs leading-relaxed text-muted", children: [_jsx("span", { className: "font-semibold text-navy", children: "Placeholder content:" }), " professional details (schedule, credentials, areas of focus) will be published here once confirmed by the clinic."] })] }), _jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-3", children: [_jsxs(ButtonLink, { to: "/contact", variant: "primary", size: "md", children: [_jsx(CalendarCheck, { className: "h-4 w-4", "aria-hidden": "true" }), "Book a Consultation"] }), _jsxs(ButtonAnchor, { href: `tel:${primaryPhone.tel}`, variant: "secondary", size: "md", children: [_jsx(Phone, { className: "h-4 w-4", "aria-hidden": "true" }), primaryPhone.display] })] }), _jsxs("p", { className: "mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted", children: [_jsx(MapPin, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brand", "aria-hidden": "true" }), clinic.address.full] })] })] })) }));
}
