import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Breadcrumb label (defaults to `title`). */
  crumb?: string;
  children?: ReactNode;
}

/**
 * Deep-navy header used on every inner page. The sticky white navbar sits
 * above it, so the header stays quiet: texture only, no colour blobs.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  crumb,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-deep">
      {/* Restrained texture */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full"
        style={{ background: "rgba(22, 140, 197, 0.16)", filter: "blur(80px)" }}
        aria-hidden="true"
      />

      <div className="shell relative z-10 py-14 sm:py-16 lg:py-20">
        <Reveal>
          {eyebrow && (
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
              <span className="h-px w-6 bg-aqua/50" aria-hidden="true" />
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 max-w-4xl text-[1.9rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.9rem]">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </header>
  );
}
