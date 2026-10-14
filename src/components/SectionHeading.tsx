import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  /** Optional "View all" link under the heading. */
  link?: { label: string; to: string };
  /** Heading level for correct document outline. */
  as?: "h2" | "h3";
  /** Optional id — lets the parent <section> reference it via aria-labelledby. */
  id?: string;
  className?: string;
}

/**
 * Shared section heading: eyebrow → title → supporting copy → optional link.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  link,
  as: Heading = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const isLight = tone === "light";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <p
          className={[
            "mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em]",
            isLight ? "text-aqua" : "text-brand",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className={[
              "h-px w-6",
              isLight ? "bg-aqua/60" : "bg-brand/50",
            ].join(" ")}
          />
          {eyebrow}
        </p>
      )}

      <Heading
        id={id}
        className={[
          "text-[1.75rem] font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem]",
          isLight ? "text-white" : "text-navy",
        ].join(" ")}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={[
            "mt-5 text-base leading-relaxed sm:text-lg",
            isLight ? "text-white/90" : "text-muted",
          ].join(" ")}
        >
          {description}
        </p>
      )}

      {link && (
        <div className={centered ? "mt-7 flex justify-center" : "mt-7"}>
          <Link
            to={link.to}
            className={[
              "group inline-flex items-center gap-2 text-sm font-semibold transition-colors",
              isLight ? "text-white hover:text-aqua" : "text-brand hover:text-navy",
            ].join(" ")}
          >
            {link.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
