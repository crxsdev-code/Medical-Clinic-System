import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Images, Info } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FacilityGallery from "@/components/FacilityGallery";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { usePageSeo } from "@/lib/usePageSeo";
export default function Facilities() {
    usePageSeo({
        title: "Clinic Facilities | NRM Mendoza",
        description: "Explore the facilities of NRM Mendoza Medical Clinic, Pharmacy and Laboratory — clinic, reception, waiting area, consultation room, laboratory and pharmacy in Kapatagan, Lanao del Norte.",
    });
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Our facilities", title: "Clinic Facilities", description: "A clean, comfortable environment for patients and their families." }), _jsxs("section", { "aria-labelledby": "facilities-gallery", className: "shell py-16 sm:py-20", children: [_jsxs("div", { className: "grid gap-8 lg:grid-cols-12 lg:gap-14", children: [_jsx(Reveal, { className: "lg:col-span-5", children: _jsx(SectionHeading, { id: "facilities-gallery", eyebrow: "Inside the clinic", title: "Designed for comfort and privacy", description: "From the waiting area to the consultation room, the clinic is arranged to keep visits calm, orderly and discreet." }) }), _jsx(Reveal, { delay: 100, className: "lg:col-span-7", children: _jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-dashed border-line bg-white/70 p-5", children: [_jsx(Info, { className: "mt-0.5 h-4.5 w-4.5 shrink-0 text-brand", "aria-hidden": "true" }), _jsxs("p", { className: "text-sm leading-relaxed text-muted", children: [_jsx("strong", { className: "text-navy", children: "Photography pending:" }), " the gallery below shows replaceable placeholders for each area of the clinic. Approved photographs can be dropped into", " ", _jsx("code", { className: "rounded bg-mist px-1.5 py-0.5 text-navy", children: "src/assets/images/facilities/" }), " ", "and wired up in", " ", _jsx("code", { className: "rounded bg-mist px-1.5 py-0.5 text-navy", children: "src/data/facilities.ts" }), "."] })] }) })] }), _jsx("div", { className: "mt-10", children: _jsx(FacilityGallery, {}) }), _jsx(Reveal, { children: _jsxs("p", { className: "mt-8 flex items-center gap-2 text-sm text-muted", children: [_jsx(Images, { className: "h-4 w-4 text-brand", "aria-hidden": "true" }), "Select any tile to open the gallery viewer \u2014 use \u2190 and \u2192 to browse."] }) })] }), _jsx(CTABand, { heading: "See the clinic in person", description: "Visit us at Town Center, Poblacion, Kapatagan during clinic hours." })] }));
}
