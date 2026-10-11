import { ArrowRight, Clock } from "lucide-react";

import { ButtonLink } from "./Button";
import { weeklyHoursLabel } from "@/data/clinic";

import heroImage from "@/assets/images/clinic-slides-1.jpg";

/**
 * Premium hero section - clean single-image composition.
 * Left-aligned text content with clear hierarchy: location, headline, tagline, description, CTA, hours.
 */
export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[45vh] sm:min-h-[55vh] lg:min-h-screen items-center overflow-hidden !bg-transparent -mt-[6.5rem]"
      aria-labelledby="hero-title"
    >
      {/* ── Background image ─────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NRM Mendoza Medical Clinic in Kapatagan, Lanao del Norte"
          className="h-full w-full object-cover object-[25%_30%] sm:object-[30%_30%] md:object-[35%_30%] lg:object-[40%_30%] xl:object-[45%_30%] 2xl:object-[50%_30%] !shadow-none !filter-none"
          loading="eager"
          draggable={false}
        />
        {/* Slanted gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-deep/30 to-transparent" />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="shell relative z-10 w-full pb-12 pt-[6.5rem] sm:pb-16 sm:pt-[7.5rem] lg:pb-24 lg:pt-[8.5rem] xl:pt-[9.5rem] 2xl:pt-[10rem]">
        {/* Location label
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90 mb-6">
          KAPATAGAN, LANAO DEL NORTE
        </p> */}

        {/* Main headline */}
        <h1
          id="hero-title"
          className="text-[2rem] font-bold leading-[1.1] text-white mb-4 sm:text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem]"
          style={{ letterSpacing: "-0.025em", maxWidth: "900px" }}
        >
          NRM <span className="parisienne font-bold text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[5.5rem]">Mendoza</span>
          <br />
          <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem]">Medical Clinic</span>
        </h1>

        {/* Green supporting line */}
        <p className="text-base font-semibold text-aqua mb-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Compassionate care. Better health.
        </p>

        {/* Supporting description */}
        <p className="text-sm leading-relaxed text-white/80 mb-8 max-w-md sm:text-base md:text-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
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
        <div className="flex items-center gap-2 text-xs text-white/70 sm:text-sm md:text-base">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          <span>{weeklyHoursLabel}</span>
        </div>
      </div>
    </section>
  );
}
