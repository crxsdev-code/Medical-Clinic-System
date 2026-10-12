import { Phone } from "lucide-react";
import { clinic, weeklyHoursLabel } from "@/data/clinic";

/**
 * Slim information strip above the main navigation.
 *
 * Displays: trust line · hours · phone number.
 */
export default function TopBar() {
  const primary = clinic.phones[0];

  return (
    <div className="bg-deep text-white">
      <div className="shell flex h-7 items-center justify-end gap-4 text-[12px]">
        {/* Hours + phone */}
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
