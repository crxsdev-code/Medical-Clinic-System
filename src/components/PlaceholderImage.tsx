import { ImageOff, Camera } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "dark" | "light";

interface PlaceholderImageProps {
  /** Short label describing what will appear here. */
  label: string;
  /** Optional secondary line, e.g. "Replace in src/assets/images". */
  hint?: string;
  tone?: Tone;
  className?: string;
  /** Center icon override. */
  icon?: ReactNode;
  /** Small footer caption, usually hidden once a real photo exists. */
  showHint?: boolean;
}

/**
 * Replaceable photography placeholder.
 *
 * Nothing about the clinic's interiors has been photographed yet, so rather
 * than using unrelated stock images the site shows a deliberately designed,
 * quiet placeholder. Drop a real photo into `src/assets/images/` and pass its
 * imported URL as `<img src={…}>` in place of this component.
 */
export default function PlaceholderImage({
  label,
  hint = "Clinic photo to be added",
  tone = "dark",
  className = "",
  icon,
  showHint = true,
}: PlaceholderImageProps) {
  const dark = tone === "dark";

  return (
    <div
      className={[
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden",
        dark ? "bg-navy" : "bg-mist",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      {/* Restrained texture — no gradients, no glass */}
      <div
        className={[
          "pointer-events-none absolute inset-0 dot-grid",
          dark ? "opacity-30" : "opacity-100",
        ].join(" ")}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span
          className={[
            "flex h-12 w-12 items-center justify-center rounded-lg border",
            dark ? "border-white/15 bg-white/5 text-aqua" : "border-line bg-white text-brand",
          ].join(" ")}
        >
          {icon ?? <ImageOff className="h-5 w-5" aria-hidden="true" />}
        </span>

        <p
          className={[
            "mt-4 text-sm font-semibold tracking-tight",
            dark ? "text-white" : "text-navy",
          ].join(" ")}
        >
          {label}
        </p>

        {showHint && (
          <p
            className={[
              "mt-1 text-xs",
              dark ? "text-white/50" : "text-muted",
            ].join(" ")}
          >
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}

/** Portrait placeholder used until doctor photos are supplied. */
export function AvatarPlaceholder({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-navy ${className}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

      <span className="relative z-10 text-5xl font-bold tracking-tight text-white/85">
        {initials}
      </span>

      <span className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/70">
        <Camera className="h-3 w-3" aria-hidden="true" />
        Photo to be provided
      </span>
    </div>
  );
}
