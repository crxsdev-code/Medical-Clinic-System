import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageOff, Camera } from "lucide-react";
/**
 * Replaceable photography placeholder.
 *
 * Nothing about the clinic's interiors has been photographed yet, so rather
 * than using unrelated stock images the site shows a deliberately designed,
 * quiet placeholder. Drop a real photo into `src/assets/images/` and pass its
 * imported URL as `<img src={…}>` in place of this component.
 */
export default function PlaceholderImage({ label, hint = "Clinic photo to be added", tone = "dark", className = "", icon, showHint = true, }) {
    const dark = tone === "dark";
    return (_jsxs("div", { className: [
            "relative flex h-full w-full flex-col items-center justify-center overflow-hidden",
            dark ? "bg-navy" : "bg-mist",
            className,
        ].join(" "), "aria-hidden": "true", children: [_jsx("div", { className: [
                    "pointer-events-none absolute inset-0 dot-grid",
                    dark ? "opacity-30" : "opacity-100",
                ].join(" ") }), _jsxs("div", { className: "relative z-10 flex flex-col items-center px-6 text-center", children: [_jsx("span", { className: [
                            "flex h-12 w-12 items-center justify-center rounded-lg border",
                            dark ? "border-white/15 bg-white/5 text-aqua" : "border-line bg-white text-brand",
                        ].join(" "), children: icon ?? _jsx(ImageOff, { className: "h-5 w-5", "aria-hidden": "true" }) }), _jsx("p", { className: [
                            "mt-4 text-sm font-semibold tracking-tight",
                            dark ? "text-white" : "text-navy",
                        ].join(" "), children: label }), showHint && (_jsx("p", { className: [
                            "mt-1 text-xs",
                            dark ? "text-white/50" : "text-muted",
                        ].join(" "), children: hint }))] })] }));
}
/** Portrait placeholder used until doctor photos are supplied. */
export function AvatarPlaceholder({ name, className = "", }) {
    const initials = name
        .replace(/^Dr\.?\s*/i, "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("");
    return (_jsxs("div", { className: `relative flex h-full w-full items-center justify-center overflow-hidden bg-navy ${className}`, "aria-hidden": "true", children: [_jsx("div", { className: "pointer-events-none absolute inset-0 dot-grid opacity-30" }), _jsx("span", { className: "relative z-10 text-5xl font-bold tracking-tight text-white/85", children: initials }), _jsxs("span", { className: "absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/70", children: [_jsx(Camera, { className: "h-3 w-3", "aria-hidden": "true" }), "Photo to be provided"] })] }));
}
