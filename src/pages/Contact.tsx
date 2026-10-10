import { Clock, Facebook, MapPin, Phone } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import ClinicHours from "@/components/ClinicHours";
import Reveal from "@/components/Reveal";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";

export default function Contact() {
  usePageSeo({
    title: "Contact NRM Mendoza Medical Clinic | Kapatagan",
    description:
      "Get in touch with NRM Mendoza Medical Clinic, Pharmacy and Laboratory — Unit 7 and 8, Town Center, Poblacion, Kapatagan, Lanao del Norte. Call 0917 798 8717.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Get in Touch"
        description="Call, message or visit the clinic — we are happy to assist during opening hours."
      />

      {/* Form + details ------------------------------------------------------ */}
      <section aria-labelledby="contact-details" className="shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-9">
              <SectionHeading
                eyebrow="Send a message"
                title="Contact the clinic"
                description="Fill in the form below and our team will get back to you during clinic hours."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="space-y-6">
              {/* Address */}
              <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7">
                <h3
                  id="contact-details"
                  className="flex items-center gap-2.5 text-base font-bold tracking-tight text-navy"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  Clinic Address
                </h3>

                <address className="mt-4 text-sm not-italic leading-relaxed text-ink">
                  <span className="font-semibold text-navy">{clinic.name}</span>
                  <br />
                  {clinic.address.line1},
                  <br />
                  {clinic.address.line2},
                  <br />
                  {clinic.address.line3}
                </address>
              </div>

              {/* Phones */}
              <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7">
                <h3 className="flex items-center gap-2.5 text-base font-bold tracking-tight text-navy">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  Phone
                </h3>

                <ul className="mt-4 space-y-3">
                  {clinic.phones.map((phone) => (
                    <li key={phone.id}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-sm font-semibold tabular-nums text-navy transition hover:border-brand/40 hover:text-brand"
                        aria-label={`Call the clinic at ${phone.display}`}
                      >
                        {phone.display}
                        <span className="text-xs font-medium text-muted">{phone.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={clinic.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-navy"
                  aria-label="Visit the clinic on Facebook (opens in a new tab)"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                  Official Facebook page
                </a>
              </div>

              {/* Hours */}
              <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7">
                <h3 className="flex items-center gap-2.5 text-base font-bold tracking-tight text-navy">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Clock className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  Opening Hours
                </h3>

                <ClinicHours variant="compact" tone="onLight" className="mt-4" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map ------------------------------------------------------------------ */}
      <section aria-labelledby="contact-map" className="border-t border-line bg-white">
        <div className="shell py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              id="contact-map"
              eyebrow="Directions"
              title="Find NRM Mendoza Medical Clinic"
              description="We are located at Town Center, Poblacion, Kapatagan, 9214 Lanao del Norte."
            />
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <MapSection variant="full" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
