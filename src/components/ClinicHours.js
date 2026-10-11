import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { Clock, CalendarClock } from "lucide-react";
import { clinic } from "@/data/clinic";
/** Index of today within the Mon→Sun schedule array. */
function todayIndex() {
    return (new Date().getDay() + 6) % 7;
}
function Row({ entry, isToday, compact, onDark, }) {
    const pending = entry.status === "pending";
    const dayColor = onDark
        ? isToday
            ? "text-white"
            : "text-white/80"
        : isToday
            ? "text-navy"
            : "text-navy/80";
    const timeColor = onDark ? "text-white" : "text-ink";
    const pendingColor = onDark ? "text-aqua" : "text-magenta";
    return (_jsxs("li", { className: [
            "flex items-center justify-between gap-3",
            compact ? "py-2" : "px-4 py-3 sm:px-5",
            isToday && !compact ? (onDark ? "bg-white/5" : "bg-mist") : "",
            isToday && !compact ? "rounded-xl" : "",
        ].join(" "), children: [_jsxs("span", { className: "flex items-center gap-2", children: [_jsxs("span", { className: [
                            "text-sm",
                            isToday ? "font-semibold" : "font-medium",
                            dayColor,
                        ].join(" "), children: [_jsx("span", { className: "hidden sm:inline", children: entry.day }), _jsx("span", { className: "sm:hidden", children: entry.short })] }), isToday && (_jsx("span", { className: [
                            "rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                            onDark ? "bg-aqua/15 text-aqua" : "bg-brand/10 text-brand",
                        ].join(" "), children: "Today" }))] }), pending ? (_jsxs("span", { className: `text-right text-xs font-semibold ${pendingColor}`, children: [_jsx("span", { className: "hidden sm:inline", children: "To be confirmed" }), _jsx("span", { className: "sm:hidden", children: "To confirm" })] })) : (_jsx("span", { className: `whitespace-nowrap text-sm font-semibold tabular-nums ${timeColor}`, children: entry.hours }))] }));
}
/**
 * Clinic opening hours — always rendered from `src/data/clinic.ts`.
 * Sunday is deliberately marked "to be confirmed" while the clinic verifies
 * its schedule; update the data file and every view updates automatically.
 */
export default function ClinicHours({ variant = "card", tone = "onLight", highlightToday = true, className = "", }) {
    const compact = variant === "compact";
    const onDark = tone === "onDark";
    const active = highlightToday ? todayIndex() : -1;
    const pendingNote = clinic.hours.find((h) => h.status === "pending")?.note;
    /* Unique ids — the card can appear more than once on a page (e.g. the
       hours card plus the hours FAQ accordion). */
    const titleId = useId();
    const list = (_jsx("ul", { className: compact ? "divide-y divide-white/10" : "divide-y divide-line", children: clinic.hours.map((entry, index) => (_jsx(Row, { entry: entry, isToday: index === active, compact: compact, onDark: onDark }, entry.day))) }));
    if (compact) {
        return (_jsxs("div", { className: className, children: [_jsxs("p", { className: `mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${onDark ? "text-aqua" : "text-brand"}`, children: [_jsx(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }), "Clinic Hours"] }), list, pendingNote && (_jsx("p", { className: `mt-3 text-xs leading-relaxed ${onDark ? "text-white/50" : "text-muted"}`, children: pendingNote }))] }));
    }
    return (_jsxs("section", { "aria-labelledby": titleId, className: `overflow-hidden rounded-xl border border-line bg-white shadow-soft ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between gap-4 border-b border-line bg-mist px-5 py-4 sm:px-6", children: [_jsxs("h3", { id: titleId, className: "flex items-center gap-2.5 text-base font-bold tracking-tight text-navy", children: [_jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand", children: _jsx(Clock, { className: "h-4.5 w-4.5", "aria-hidden": "true" }) }), "Clinic Hours"] }), _jsxs("span", { className: "hidden items-center gap-1.5 rounded-md border border-line bg-white px-3 py-1 text-xs font-medium text-muted sm:flex", children: [_jsx(CalendarClock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }), "Kapatagan"] })] }), _jsx("div", { className: "p-3 sm:p-4", children: list }), pendingNote && (_jsxs("p", { className: "border-t border-line bg-mist px-5 py-3.5 text-xs leading-relaxed text-muted sm:px-6", children: [_jsx("span", { className: "font-semibold text-magenta", children: "Note:" }), " ", pendingNote] }))] }));
}
