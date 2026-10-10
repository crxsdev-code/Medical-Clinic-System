import { ArrowRight, Info, Phone, Stethoscope, Pill, FlaskConical, CalendarCheck } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import FAQSection from "@/components/FAQSection";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { services, type ServiceIcon } from "@/data/services";
import { faqs } from "@/data/faqs";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";

const ICONS: Record<ServiceIcon, typeof Stethoscope> = {
  stethoscope: Stethoscope,
  pill: Pill,
  flask: FlaskConical,
};

const ACCENTS = {
  brand: "bg-brand/10 text-brand",
  magenta: "bg-magenta/10 text-magenta",
  leaf: "bg-leaf/10 text-leaf",
} as const;

export default function Services() {
  usePageSeo({
    title: "Medical, Pharmacy & Laboratory Services | NRM Mendoza",
    description:
      "Medical consultation, pharmacy and laboratory services at NRM Mendoza Medical Clinic, Pharmacy and Laboratory in Kapatagan, Lanao del Norte.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Medical, Pharmacy & Laboratory Services"
        description="Essential healthcare services available in one location at Town Center, Poblacion, Kapatagan."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact" variant="on-dark" size="md">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book a Consultation
          </ButtonLink>
          <ButtonAnchor
            href={`tel:${clinic.phones[0].tel}`}
            variant="on-dark"
            size="md"
            aria-label={`Call the clinic at ${clinic.phones[0].display}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.phones[0].display}
          </ButtonAnchor>
        </div>
      </PageHeader>

      {/* Service detail blocks ---------------------------------------------- */}
      <section aria-label="Service details" className="shell py-16 sm:py-20">
        <div className="space-y-16 sm:space-y-20">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.slug}
                className="grid scroll-mt-32 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${ACCENTS[service.accent]}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <p className="mt-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
                    {`0${index + 1}`} — {service.title}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-muted">{service.description}</p>

                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-line bg-white p-5 shadow-soft">
                    <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-muted">
                      This page describes services at category level. For specific examinations,
                      availability or requirements, please contact the clinic directly — our team
                      will be glad to assist.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink to="/contact" variant="primary" size="md">
                      Contact the Clinic
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                    <ButtonAnchor
                      href={`tel:${clinic.phones[0].tel}`}
                      variant="ghost"
                      size="md"
                      aria-label={`Call the clinic at ${clinic.phones[0].display}`}
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call
                    </ButtonAnchor>
                  </div>
                </Reveal>

                <Reveal delay={120} className={reversed ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-xl border border-line shadow-soft">
                    <div className="aspect-[4/3] w-full">
                      <PlaceholderImage
                        label={`${service.title} area`}
                        hint="Add an approved photograph"
                        tone="dark"
                        icon={<Icon className="h-6 w-6" aria-hidden="true" />}
                      />
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* FAQs ---------------------------------------------------------------- */}
      <section aria-labelledby="services-faq" className="border-t border-line bg-white">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionHeading
                id="services-faq"
                eyebrow="Good to know"
                title="Service questions"
                description="Answers to the questions patients ask most often."
                link={{ label: "See all FAQs", to: "/faq" }}
              />
            </Reveal>

            <div className="lg:col-span-8">
              <FAQSection items={faqs.filter((faq) =>
                ["hours", "services", "pharmacy-laboratory", "appointment"].includes(faq.id),
              )} />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Have a question about a service?"
        description="Call the clinic or send us a message — we will help you find the right next step."
      />
    </>
  );
}
