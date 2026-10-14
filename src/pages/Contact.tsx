import { Clock, MapPin, Phone } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClinicHours from "@/components/ClinicHours";
import Reveal from "@/components/Reveal";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";

import facebookIcon from "@/assets/images/icons/facebook.png";

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

      {/* Contact details ------------------------------------------------------ */}
      <section aria-labelledby="contact-details" className="shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            id="contact-details"
            eyebrow="Contact information"
            title="Reach Out to Us"
            description="Get in touch through phone, Facebook, or visit us at the clinic."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={90}>
            {/* Address */}
            <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7">
              <h3 className="flex items-center gap-2.5 text-base font-bold tracking-tight text-navy">
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
          </Reveal>

          <Reveal delay={120}>
            {/* Phones */}
            <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-7">
              <h3 className="flex items-center gap-2.5 text-base font-bold tracking-tight text-navy">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                Phone Numbers
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
                <img src={facebookIcon} alt="Facebook" className="h-4 w-4" aria-hidden="true" />
                Official Facebook page
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
