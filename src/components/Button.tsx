import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "on-dark" | "white";
export type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight " +
  "transition-[background-color,color,box-shadow,transform,border-color] duration-300 ease-soft " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
  "disabled:cursor-not-allowed disabled:opacity-60 select-none whitespace-nowrap";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-[#1178ab] hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-brand/50 hover:bg-mist shadow-soft",
  ghost:
    "bg-transparent text-navy border border-line hover:border-navy/30 hover:bg-white",
  accent:
    "bg-navy text-white shadow-soft hover:bg-deep hover:-translate-y-0.5",
  "on-dark":
    "bg-white/10 text-white border border-white/25 hover:bg-white hover:text-deep hover:-translate-y-0.5",
  white:
    "bg-white text-brand hover:bg-white/90",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.95rem]",
  lg: "h-14 px-9 text-base",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = "",
): string {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
}

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

interface ButtonLinkProps {
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
}

interface ButtonAnchorProps {
  href: string;
  /** Opens external links (Facebook, Google Maps, tel:) in a new tab. */
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
}

/** Standard button element. */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClassName(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

/** Internal (React Router) link styled as a button. */
export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonClassName(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

/** External link (tel:, Facebook, Google Maps…) styled as a button. */
export function ButtonAnchor({
  href,
  external = true,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonAnchorProps) {
  return (
    <a
      href={href}
      className={buttonClassName(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
