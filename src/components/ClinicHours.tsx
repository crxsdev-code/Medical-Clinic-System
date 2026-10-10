import { useId } from "react";
import { Clock, CalendarClock } from "lucide-react";
import { clinic, type DaySchedule } from "@/data/clinic";

interface ClinicHoursProps {
  /** "card" = bordered panel; "compact" = flush list (footer, sidebar). */
  variant?: "card" | "compact";
  /** Colour scheme — "onDark" is used inside the navy footer. */
  tone?: "onDark" | "onLight";
  /** Marks the current weekday with a visible "Today" chip. */
  highlightToday?: boolean;
  className?: string;
}

/** Index of today within the Mon→Sun schedule array. */
function todayIndex(): number {
  return (new Date().getDay() + 6) % 7;
}

function Row({
  entry,
  isToday,
  compact,
  onDark,
}: {
  entry: DaySchedule;
  isToday: boolean;
  compact: boolean;
  onDark: boolean;
}) {
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

  return (
    <li
      className={[
        "flex items-center justify-between gap-3",
        compact ? "py-2" : "px-4 py-3 sm:px-5",
        isToday && !compact ? (onDark ? "bg-white/5" : "bg-mist") : "",
        isToday && !compact ? "rounded-xl" : "",
      ].join(" ")}
    >
      <span className="flex items-center gap-2">
        <span
          className={[
            "text-sm",
            isToday ? "font-semibold" : "font-medium",
            dayColor,
          ].join(" ")}
        >
          <span className="hidden sm:inline">{entry.day}</span>
          <span className="sm:hidden">{entry.short}</span>
        </span>

        {isToday && (
          <span
            className={[
              "rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
              onDark ? "bg-aqua/15 text-aqua" : "bg-brand/10 text-brand",
            ].join(" ")}
          >
            Today
          </span>
        )}
      </span>

      {pending ? (
        <span className={`text-right text-xs font-semibold ${pendingColor}`}>
          <span className="hidden sm:inline">To be confirmed</span>
          <span className="sm:hidden">To confirm</span>
        </span>
      ) : (
        <span
          className={`whitespace-nowrap text-sm font-semibold tabular-nums ${timeColor}`}
        >
          {entry.hours}
        </span>
      )}
    </li>
  );
}

/**
 * Clinic opening hours — always rendered from `src/data/clinic.ts`.
 * Sunday is deliberately marked "to be confirmed" while the clinic verifies
 * its schedule; update the data file and every view updates automatically.
 */
export default function ClinicHours({
  variant = "card",
  tone = "onLight",
  highlightToday = true,
  className = "",
}: ClinicHoursProps) {
  const compact = variant === "compact";
  const onDark = tone === "onDark";
  const active = highlightToday ? todayIndex() : -1;
  const pendingNote = clinic.hours.find((h) => h.status === "pending")?.note;
  /* Unique ids — the card can appear more than once on a page (e.g. the
     hours card plus the hours FAQ accordion). */
  const titleId = useId();

  const list = (
    <ul className={compact ? "divide-y divide-white/10" : "divide-y divide-line"}>
      {clinic.hours.map((entry, index) => (
        <Row
          key={entry.day}
          entry={entry}
          isToday={index === active}
          compact={compact}
          onDark={onDark}
        />
      ))}
    </ul>
  );

  if (compact) {
    return (
      <div className={className}>
        <p
          className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            onDark ? "text-aqua" : "text-brand"
          }`}
        >
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          Clinic Hours
        </p>

        {list}

        {pendingNote && (
          <p
            className={`mt-3 text-xs leading-relaxed ${
              onDark ? "text-white/50" : "text-muted"
            }`}
          >
            {pendingNote}
          </p>
        )}
      </div>
    );
  }

  return (
    <section
      aria-labelledby={titleId}
      className={`overflow-hidden rounded-xl border border-line bg-white shadow-soft ${className}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-line bg-mist px-5 py-4 sm:px-6">
        <h3
          id={titleId}
          className="flex items-center gap-2.5 text-base font-bold tracking-tight text-navy"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Clock className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          Clinic Hours
        </h3>
        <span className="hidden items-center gap-1.5 rounded-md border border-line bg-white px-3 py-1 text-xs font-medium text-muted sm:flex">
          <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
          Kapatagan
        </span>
      </div>

      <div className="p-3 sm:p-4">{list}</div>

      {pendingNote && (
        <p className="border-t border-line bg-mist px-5 py-3.5 text-xs leading-relaxed text-muted sm:px-6">
          <span className="font-semibold text-magenta">Note:</span> {pendingNote}
        </p>
      )}
    </section>
  );
}
