import { Phone } from "lucide-react";
import { clinic, weeklyHoursLabel } from "@/data/clinic";

interface TopBarProps {
  /** Collapsed state while the visitor scrolls down. */
  collapsed: boolean;
}

/**
 * Slim information strip above the main navigation.
 *
 * Deliberately minimal: trust line · hours · phone number.
 * Collapses smoothly once the page is scrolled.
 */
export default function TopBar({ collapsed }: TopBarProps) {
  const primary = clinic.phones[0];

  return (
    <div
      className={[
        "overflow-hidden bg-deep text-white transition-all duration-500 ease-soft",
        collapsed ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
      ].join(" ")}
      aria-hidden={collapsed ? "true" : undefined}
      inert={collapsed}
    >
      <div className="shell flex h-9 items-center justify-between gap-4 text-[13px]">
        {/* Left — trust line */}
        <p className="flex min-w-0 items-center gap-2 truncate">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
          <span className="font-medium text-white/85">{clinic.tagline}</span>
        </p>

        {/* Right — hours + phone */}
        <div className="flex shrink-0 items-center gap-5">
          <span className="hidden text-white/55 md:inline">{weeklyHoursLabel}</span>

          <a
            href={`tel:${primary.tel}`}
            className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-aqua"
            aria-label={`Call the clinic at ${primary.display}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="tabular-nums tracking-tight">{primary.display}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
