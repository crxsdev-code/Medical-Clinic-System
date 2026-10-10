import { useState } from "react";
import { CalendarCheck, Phone, ShieldCheck } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import DoctorModal from "@/components/DoctorModal";
import ClinicHours from "@/components/ClinicHours";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { doctors, type Doctor } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";

export default function Doctors() {
  usePageSeo({
    title: "Doctors | NRM Mendoza Medical Clinic",
    description:
      "Meet the physicians of NRM Mendoza Medical Clinic, Pharmacy and Laboratory in Kapatagan, Lanao del Norte — including our pediatrician and general physician.",
  });

  const [profile, setProfile] = useState<Doctor | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Meet Our Doctors"
        description="Consultation is provided by the clinic's physicians at Town Center, Poblacion, Kapatagan."
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

      {/* Doctor cards -------------------------------------------------------- */}
      <section aria-labelledby="doctors-list" className="shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            id="doctors-list"
            eyebrow="Physicians"
            title="The people behind the care"
            description="Select “View Profile” to learn more about each physician."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} delay={index * 100} onOpen={setProfile} />
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 flex max-w-2xl items-start gap-3 rounded-lg border border-dashed border-line bg-white/70 p-5 text-xs leading-relaxed text-muted">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
            <span>
              <strong className="text-navy">Editorial placeholder:</strong> full professional
              profiles — schedule, credentials and areas of focus — will be published on this page
              once confirmed by the clinic. Only verified information is shown.
            </span>
          </p>
        </Reveal>
      </section>

      {/* Hours --------------------------------------------------------------- */}
      <section aria-labelledby="doctors-hours" className="border-y border-line bg-white">
        <div className="shell grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              id="doctors-hours"
              eyebrow="Availability"
              title="Clinic Hours"
              description="Consultations are seen during the clinic's opening hours."
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Doctor schedules may vary. To confirm availability for a specific day, please call{" "}
              <a
                href={`tel:${clinic.phones[0].tel}`}
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                {clinic.phones[0].display}
              </a>{" "}
              before visiting.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ClinicHours />
          </Reveal>
        </div>
      </section>

      <CTABand
        heading="Book a consultation"
        description="Online booking is coming in a future version. For now, call the clinic or send an enquiry and our team will assist you."
      />

      <DoctorModal doctor={profile} onClose={() => setProfile(null)} />
    </>
  );
}
