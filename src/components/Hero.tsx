import { ArrowRight, Clock } from "lucide-react";

import { ButtonLink } from "./Button";
import { weeklyHoursLabel } from "@/data/clinic";

import heroImage from "@/assets/images/clinic-slide-1.jpg";

/**
 * Premium hero section - clean single-image composition.
 * Left-aligned text content with clear hierarchy: location, headline, tagline, description, CTA, hours.
 */
export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[42rem] items-center overflow-hidden lg:min-h-screen"
      aria-labelledby="hero-title"
    >
      {/* ── Background image ─────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NRM Mendoza Medical Clinic in Kapatagan, Lanao del Norte"
          className="h-full w-full object-cover object-[35%_35%]"
          loading="eager"
          draggable={false}
        />
      </div>

      {/* ── Gradient overlay for text readability ─────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7, 35, 45, 0.88) 0%, rgba(7, 35, 45, 0.70) 35%, rgba(7, 35, 45, 0.42) 65%, rgba(7, 35, 45, 0.18) 100%), linear-gradient(180deg, rgba(7, 35, 45, 0.12) 0%, rgba(7, 35, 45, 0.20) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="shell relative z-10 w-full pb-16 pt-[7.5rem] sm:pt-[8.5rem] lg:pb-24 lg:pt-[9.5rem]">
        {/* Location label */}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90 mb-6">
          KAPATAGAN, LANAO DEL NORTE
        </p>

        {/* Main headline */}
        <h1
          id="hero-title"
          className="text-[2.5rem] font-bold leading-[1.1] text-white mb-4 sm:text-[3rem] lg:text-[3.75rem] xl:text-[4rem]"
          style={{ letterSpacing: "-0.025em", maxWidth: "800px" }}
        >
          NRM Mendoza
          <br />
          Medical Clinic
        </h1>

        {/* Green supporting line */}
        <p className="text-lg font-semibold text-aqua mb-6 sm:text-xl lg:text-2xl">
          Compassionate care. Better health.
        </p>

        {/* Supporting description */}
        <p className="text-base leading-relaxed text-white/80 mb-8 max-w-lg sm:text-lg">
          Medical clinic, pharmacy, and laboratory in Kapatagan, Lanao del Norte.
        </p>

        {/* CTA */}
        <div className="mb-6">
          <ButtonLink
            to="/services"
            variant="white"
            size="lg"
          >
            View Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        {/* Hours information */}
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>{weeklyHoursLabel}</span>
        </div>
      </div>
    </section>
  );
}
