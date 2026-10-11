import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, DoorOpen, Sofa, Users, FlaskConical, Pill, ClipboardList } from "lucide-react";
import Modal from "./Modal";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import { facilities } from "@/data/facilities";
const ICONS = {
    door: DoorOpen,
    sofa: Sofa,
    users: Users,
    clipboard: ClipboardList,
    flask: FlaskConical,
    pill: Pill,
};
export default function FacilityGallery() {
    const [activeIndex, setActiveIndex] = useState(null);
    const open = activeIndex !== null;
    const active = open ? facilities[activeIndex] : null;
    const close = useCallback(() => setActiveIndex(null), []);
    const goNext = useCallback(() => {
        setActiveIndex((current) => (current === null ? current : (current + 1) % facilities.length));
    }, []);
    const goPrev = useCallback(() => {
        setActiveIndex((current) => current === null ? current : (current - 1 + facilities.length) % facilities.length);
    }, []);
    /* Arrow-key navigation while the lightbox is open */
    useEffect(() => {
        if (!open)
            return;
        const onKeyDown = (event) => {
            if (event.key === "ArrowRight")
                goNext();
            if (event.key === "ArrowLeft")
                goPrev();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, goNext, goPrev]);
    return (_jsxs(_Fragment, { children: [_jsx("ul", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: facilities.map((facility, index) => {
                    const Icon = ICONS[facility.icon];
                    return (_jsx(Reveal, { as: "li", delay: (index % 3) * 80, className: "h-full", children: _jsxs("button", { type: "button", onClick: () => setActiveIndex(index), className: "group card card-hover relative block h-full w-full overflow-hidden text-left", "aria-label": `Open ${facility.title} photo — ${facility.alt}`, children: [_jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [facility.image ? (_jsx("img", { src: facility.image, alt: facility.alt, loading: "lazy", decoding: "async", className: "h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.05]" })) : (_jsx(PlaceholderImage, { label: facility.title, hint: "Photo to be added", tone: "light", icon: _jsx(Icon, { className: "h-5 w-5", "aria-hidden": "true" }), className: "transition-transform duration-500 ease-soft group-hover:scale-[1.03]" })), _jsx("span", { className: "absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full border border-white/25 bg-deep/80 text-white opacity-0 transition-all duration-300 ease-soft group-hover:translate-y-0 group-hover:opacity-100", children: _jsx(Maximize2, { className: "h-4 w-4", "aria-hidden": "true" }) })] }), _jsxs("div", { className: "flex items-start gap-3 p-5 sm:p-6", children: [_jsx("span", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand", children: _jsx(Icon, { className: "h-4.5 w-4.5", "aria-hidden": "true" }) }), _jsxs("span", { className: "min-w-0", children: [_jsx("span", { className: "block text-base font-bold tracking-tight text-navy", children: facility.title }), _jsx("span", { className: "mt-1 block text-sm leading-relaxed text-muted", children: facility.description })] })] })] }) }, facility.id));
                }) }), _jsx(Modal, { open: open, onClose: close, labelledBy: "facility-lightbox-title", tone: "dark", hideCloseButton: true, panelClassName: "sm:max-w-4xl", children: active && (_jsxs("div", { children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "relative aspect-[4/3] w-full overflow-hidden bg-deep sm:aspect-[16/10]", children: active.image ? (_jsx("img", { src: active.image, alt: active.alt, className: "h-full w-full object-contain" })) : (_jsx(PlaceholderImage, { label: `${active.title} — photo pending`, hint: "Replace src/data/facilities.ts with a real image path", tone: "dark", icon: _jsx(Maximize2, { className: "h-6 w-6", "aria-hidden": "true" }) })) }), _jsx("button", { type: "button", onClick: goPrev, "aria-label": "Previous photo", className: "absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/85 text-white transition hover:bg-white hover:text-deep sm:left-5", children: _jsx(ChevronLeft, { className: "h-5 w-5", "aria-hidden": "true" }) }), _jsx("button", { type: "button", onClick: goNext, "aria-label": "Next photo", className: "absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/85 text-white transition hover:bg-white hover:text-deep sm:right-5", children: _jsx(ChevronRight, { className: "h-5 w-5", "aria-hidden": "true" }) }), _jsx("button", { type: "button", onClick: close, "aria-label": "Close photo viewer", className: "absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-deep/85 text-lg leading-none text-white transition hover:bg-white hover:text-deep sm:right-5 sm:top-5", children: "\u2715" })] }), _jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-5 sm:px-7", children: [_jsxs("div", { children: [_jsx("h2", { id: "facility-lightbox-title", className: "text-lg font-bold tracking-tight text-white", children: active.title }), _jsx("p", { className: "mt-1 text-sm text-white/60", children: active.description })] }), _jsxs("span", { className: "rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tabular-nums text-white/70", children: [(activeIndex ?? 0) + 1, " / ", facilities.length] })] }), _jsx("p", { className: "border-t border-white/10 bg-white/5 px-5 py-3 text-xs text-white/65 sm:px-7", children: "Placeholder gallery \u2014 no photographs of the facility have been supplied yet. Use \u2190 and \u2192 keys to browse." })] })) })] }));
}
