import { Phone } from "lucide-react";
import { clinic, primaryPhone, type PhoneNumber } from "@/data/clinic";

type Variant = "text" | "solid" | "outline" | "light";
type Size = "sm" | "md" | "lg";

interface PhoneButtonProps {
  variant?: Variant;
  size?: Size;
  /** Defaults to the clinic's primary mobile number. */
  number?: PhoneNumber;
  /** Render "Call 0917 798 8717" instead of the bare number. */
  showLabel?: boolean;
  showIcon?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VARIANTS: Record<Variant, string> = {
  // "text" carries no colour on purpose — callers set it (dark vs light bg).
  text: "",
  solid: "rounded-lg bg-navy text-white shadow-soft hover:-translate-y-0.5 hover:bg-deep hover:shadow-lift",
  outline:
    "rounded-lg border border-navy/20 bg-white text-navy hover:-translate-y-0.5 hover:border-navy/45 hover:shadow-soft",
  light: "rounded-lg bg-white/10 text-white ring-1 ring-white/25 hover:bg-white hover:text-deep",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-3 text-sm",
  md: "h-11 gap-2 px-4 text-sm sm:text-[0.95rem]",
  lg: "h-14 gap-2.5 px-7 text-base",
};

/**
 * Clickable phone CTA (tel: link). Used in the top bar, hero, contact page
 * and footer so call actions stay consistent across the site.
 */
export default function PhoneButton({
  variant = "text",
  size = "md",
  number = primaryPhone,
  showLabel = false,
  showIcon = true,
  className = "",
  ariaLabel,
}: PhoneButtonProps) {
  const label = showLabel ? `Call ${number.display}` : number.display;

  return (
    <a
      href={`tel:${number.tel}`}
      className={[
        "inline-flex items-center justify-center font-semibold tracking-tight",
        "transition-[background-color,color,box-shadow,transform,border-color] duration-300 ease-soft",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        variant === "text" ? "h-auto px-0 text-sm sm:text-[0.95rem]" : SIZES[size],
        VARIANTS[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={ariaLabel ?? `Call ${clinic.nameShort} at ${number.display}`}
    >
      {showIcon && <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
