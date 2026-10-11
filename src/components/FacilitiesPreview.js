import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, ClipboardList, DoorOpen, FlaskConical, Sofa, Users, Pill } from "lucide-react";
import Reveal from "./Reveal";
import PlaceholderImage from "./PlaceholderImage";
import { ButtonLink } from "./Button";
import { facilities } from "@/data/facilities";
const ICONS = {
    door: DoorOpen,
    sofa: Sofa,
    users: Users,
    clipboard: ClipboardList,
    flask: FlaskConical,
    pill: Pill,
};
/**
 * Compact static preview of the facilities gallery for the home page.
 * No lightbox here — the full, browsable gallery lives on /facilities.
 * Tiles with no photograph yet show a designed placeholder rather than
 * stock imagery.
 */
export default function FacilitiesPreview({ limit = 3 }) {
    const items = facilities.slice(0, limit);
    return (_jsx("ul", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: items.map((facility, index) => {
            const Icon = ICONS[facility.icon];
            return (_jsx(Reveal, { as: "li", delay: index * 80, className: "h-full", children: _jsxs("article", { className: "group card card-hover flex h-full flex-col overflow-hidden", children: [_jsx("div", { className: "aspect-[4/3] w-full overflow-hidden border-b border-line", children: facility.image ? (_jsx("img", { src: facility.image, alt: facility.alt, loading: "lazy", decoding: "async", className: "h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]" })) : (_jsx(PlaceholderImage, { label: facility.title, hint: "Photo to be added", tone: "light", icon: _jsx(Icon, { className: "h-5 w-5", "aria-hidden": "true" }) })) }), _jsxs("div", { className: "flex flex-1 items-start gap-3 p-5 sm:p-6", children: [_jsx("span", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand", children: _jsx(Icon, { className: "h-4.5 w-4.5", "aria-hidden": "true" }) }), _jsxs("span", { className: "min-w-0", children: [_jsx("span", { className: "block text-base font-bold tracking-tight text-navy", children: facility.title }), _jsx("span", { className: "mt-1 block text-sm leading-relaxed text-muted", children: facility.description })] })] })] }) }, facility.id));
        }) }));
}
/** "View all" link used beside the preview. */
export function FacilitiesLink() {
    return (_jsx("div", { className: "mt-9 flex justify-center", children: _jsxs(ButtonLink, { to: "/facilities", variant: "ghost", size: "md", children: ["View all facilities", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })] }) }));
}
