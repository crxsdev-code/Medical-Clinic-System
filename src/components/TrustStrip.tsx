import { FlaskConical, Pill, Stethoscope, type LucideIcon } from "lucide-react";

import Reveal from "./Reveal";
import { services } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  pill: Pill,
  flask: FlaskConical,
};

/**
 * Slim horizontal trust strip directly under the hero: the clinic's three
 * primary services, one line each. Deliberately quiet — typography does the
 * work, the icon is only an orientation cue.
 */
export default function TrustStrip() {
  return (
    <section aria-label="Primary services" className="border-b border-line bg-white">
      <div className="shell">
        <ul className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];

            return (
              <Reveal
                key={service.id}
                as="li"
                delay={index * 90}
                className="flex items-start gap-4 py-7 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0 lg:px-8"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-navy">
                    {service.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                    {service.trustLine}
                  </span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
