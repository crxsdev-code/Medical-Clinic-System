import { FlaskConical, HeartHandshake, Pill, Stethoscope } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClinicHours from "@/components/ClinicHours";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import MapSection from "@/components/MapSection";
import { ButtonLink } from "@/components/Button";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import { usePageSeo } from "@/lib/usePageSeo";

const SERVICE_ICONS = {
  "medical-clinic": Stethoscope,
  pharmacy: Pill,
  laboratory: FlaskConical,
} as const;

const SERVICE_ACCENTS = {
  "medical-clinic": "bg-gradient-to-br from-brand/10 to-brand/5 text-brand",
  pharmacy: "bg-gradient-to-br from-magenta/10 to-magenta/5 text-magenta",
  laboratory: "bg-gradient-to-br from-leaf/10 to-leaf/5 text-leaf",
} as const;

const SERVICE_BORDER_ACCENTS = {
  "medical-clinic": "hover:border-brand/40",
  pharmacy: "hover:border-magenta/40",
  laboratory: "hover:border-leaf/40",
} as const;

const APPROACH = [
  {
    title: "Listen first",
    description: "Patients are received attentively so that each visit starts with understanding, not assumptions.",
  },
  {
    title: "Explain clearly",
    description: "Consultations are discussed in plain language so patients know what to do next.",
  },
  {
    title: "Follow through",
    description: "Pharmacy and laboratory services are available in the same location to support the next step of care.",
  },
];

export default function About() {
  usePageSeo({
    title: "About NRM Mendoza Medical Clinic | Kapatagan",
    description:
      "Learn about NRM Mendoza Medical Clinic, Pharmacy and Laboratory — a clinic in Poblacion, Kapatagan, Lanao del Norte offering medical consultation, pharmacy and laboratory services.",
  });

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="About NRM Mendoza"
        description="A medical clinic, pharmacy and laboratory serving patients in Kapatagan, Lanao del Norte."
      />

      {/* Story ------------------------------------------------------------ */}
      <section aria-labelledby="about-story" className="shell py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              id="about-story"
              eyebrow="Our clinic"
              title="Healthcare brought together in one place"
            />

            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-muted">
              <p>
                <strong className="text-navy">{clinic.name}</strong> is located at{" "}
                {clinic.address.line1}, {clinic.address.line2}, {clinic.address.line3}.
              </p>
              <p>
                The clinic brings together three essential services — medical consultation,
                pharmacy, and laboratory — so that patients can access what they need without
                travelling from place to place.
              </p>
              <p>
                The team's philosophy is simple: professional care delivered with patience, respect
                and clear communication, for every patient who visits.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/services" variant="primary" size="md">
                Explore Our Services
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost" size="md">
                Contact the Clinic
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <MapSection variant="compact" showSatelliteToggle={true} />
          </Reveal>
        </div>
      </section>

      {/* Services overview -------------------------------------------------- */}
      <section aria-labelledby="about-services" className="border-y border-line bg-white">
        <div className="shell py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              id="about-services"
              eyebrow="What we do"
              title="Three services, one location"
              description="Each service supports the others, so a single visit can cover several needs."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = SERVICE_ICONS[service.id];
              return (
                <Reveal key={service.id} delay={index * 90}>
                  <article className={`h-full rounded-xl border border-line bg-mist p-7 transition ${SERVICE_BORDER_ACCENTS[service.id]} hover:bg-white hover:shadow-soft`}>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${SERVICE_ACCENTS[service.id]}`}>
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach ----------------------------------------------------------- */}
      <section aria-labelledby="about-approach" className="shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              id="about-approach"
              eyebrow="Our approach"
              title="Care that feels personal"
              description="A patient-focused way of working that applies across the clinic, pharmacy and laboratory."
            />

            <span className="mt-8 inline-flex items-center gap-2 rounded-lg border border-magenta/25 bg-magenta/5 px-4 py-2.5 text-sm font-semibold text-magenta">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              Compassionate care
            </span>
          </Reveal>

          <div className="lg:col-span-7">
            <ol className="space-y-5">
              {APPROACH.map((item, index) => (
                <Reveal key={item.title} as="li" delay={index * 90}>
                  <div className="flex gap-5 rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-navy">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Hours -------------------------------------------------------------- */}
      <section aria-labelledby="about-hours" className="border-t border-line bg-white">
        <div className="shell grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              id="about-hours"
              eyebrow="Plan your visit"
              title="Clinic Hours"
              description="Opening hours for the clinic, pharmacy and laboratory."
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              For the most current schedule or any changes, please call{" "}
              <a
                href={`tel:${clinic.phones[0].tel}`}
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                {clinic.phones[0].display}
              </a>{" "}
              or check our official Facebook page.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ClinicHours />
          </Reveal>
        </div>
      </section>

      <CTABand
        heading="Visit NRM Mendoza Medical Clinic"
        description="We look forward to welcoming you at Town Center, Poblacion, Kapatagan."
      />
    </>
  );
}
