import { ArrowRight, Phone } from "lucide-react";

import { ButtonAnchor, ButtonLink } from "./Button";
import { clinic } from "@/data/clinic";

/**
 * Closing call-to-action band: a calm, solid deep-navy panel with one clear
 * action. Used at the end of several pages — copy can be overridden per page.
 */
export default function CTABand({
  heading = "Your Health Deserves Trusted Care.",
  description = "Visit NRM Mendoza Medical Clinic for healthcare, pharmacy, and laboratory services.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <section className="shell pb-20 pt-16 sm:pb-24 sm:pt-20" aria-labelledby="cta-band-title">
      <div className="relative overflow-hidden rounded-xl gradient-animate px-6 py-12 shadow-lift sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        {/* Restrained texture — no colour blobs, no gradients */}
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full"
          style={{ background: "rgba(22, 140, 197, 0.18)", filter: "blur(70px)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 -bottom-32 h-72 w-72 rounded-full"
          style={{ background: "rgba(32, 184, 216, 0.15)", filter: "blur(70px)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
              NRM Mendoza Medical Clinic
            </p>
            <h2
              id="cta-band-title"
              className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.25rem]"
            >
              {heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">{description}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink to="/contact" variant="primary" size="lg">
              Contact Clinic
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>

            <ButtonAnchor
              href={`tel:${clinic.phones[0].tel}`}
              variant="on-dark"
              size="lg"
              aria-label={`Call the clinic at ${clinic.phones[0].display}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {clinic.phones[0].display}
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
