import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  HeartHandshake,
  MapPin,
} from "lucide-react";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import DoctorModal from "@/components/DoctorModal";
import ClinicHours from "@/components/ClinicHours";
import FAQSection from "@/components/FAQSection";
// import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import MapSection from "@/components/MapSection";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { doctors, type Doctor } from "@/data/doctors";
import { faqs } from "@/data/faqs";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every visit is handled with patience and respect, with attention to the person behind the concern.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Healthcare",
    description:
      "Consultation is delivered by the clinic's physicians in a professional and discreet environment.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Find us at Town Center, Poblacion, Kapatagan — right in the middle of the town.",
  },
  {
    icon: Boxes,
    title: "Integrated Services",
    description:
      "Medical consultation, pharmacy and laboratory services are available in a single location.",
  },
];

export default function Home() {
  usePageSeo({
    title: "NRM Mendoza Medical Clinic, Pharmacy and Laboratory | Kapatagan",
    description:
      "Medical consultation, pharmacy and laboratory services in Poblacion, Kapatagan, Lanao del Norte. NRM Mendoza Medical Clinic — healthcare you can trust.",
  });

  const [profile, setProfile] = useState<Doctor | null>(null);

  return (
    <>
      <Hero />

      {/* Visit — map sits high on the homepage so location is easy to find */}
      <section aria-labelledby="visit-title" className="border-b border-line bg-white">
        <div className="shell py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              id="visit-title"
              eyebrow="Plan your visit"
              title="Clinic Hours & Location"
              description="We are open six days a week at Town Center, Poblacion, Kapatagan."
            />
          </Reveal>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            <Reveal>
              <ClinicHours className="h-full" />
            </Reveal>

            <Reveal delay={100}>
              <MapSection variant="compact" className="h-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-white">
        <svg className="w-full h-16" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#f7fafb"/>
        </svg>
      </div>

      {/* Core services ------------------------------------------------------ */}
      <section aria-labelledby="services-title" className="shell pb-20 pt-12 sm:pb-24 sm:pt-12 pattern-dots">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="What we offer"
            title="Healthcare Services in One Place"
            description="Access essential healthcare services through NRM Mendoza Medical Clinic, Pharmacy and Laboratory."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={index * 90} />
          ))}
        </div>
      </section>

      {/* Why choose us ------------------------------------------------------ */}
      <section aria-labelledby="why-title" className="border-y border-line bg-white pattern-lines">
        <div className="shell py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              id="why-title"
              eyebrow="Why NRM Mendoza"
              title="Care Built Around Patients"
              description="Three services, one location, and a team that treats every patient with dignity."
            />
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="group">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-navy/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview ------------------------------------------------------ */}
      <section aria-labelledby="about-preview-title" className="shell py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              id="about-preview-title"
              eyebrow="About NRM Mendoza"
              title="A clinic, pharmacy and laboratory working together"
              description={
                <>
                  NRM Mendoza Medical Clinic, Pharmacy and Laboratory serves patients from Unit 7
                  and 8, Town Center, Poblacion, Kapatagan — bringing medical consultation,
                  pharmacy services and laboratory services under one roof.
                </>
              }
            />

            <div className="mt-7 space-y-4 text-[0.95rem] leading-relaxed text-muted">
              <p>
                Our approach is straightforward: professional care, clear communication, and respect
                for every patient who comes through the door.
              </p>
              <p>
                Because the clinic, pharmacy and laboratory share the same location, patients can
                take care of several needs during a single visit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/about" variant="primary" size="md">
                More About the Clinic
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/doctors" variant="ghost" size="md">
                Meet Our Doctors
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-soft">
              <div className="aspect-[4/3] w-full">
                <PlaceholderImage
                  label="Inside the clinic"
                  hint="Add a photo of the clinic"
                  tone="light"
                  icon={<MapPin className="h-6 w-6" aria-hidden="true" />}
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-line bg-white p-5 shadow-lift sm:right-auto sm:w-80">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                One location
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-navy">
                Medical Clinic · Pharmacy · Laboratory
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {clinic.address.line1}, {clinic.address.line2}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Doctors preview ---------------------------------------------------- */}
      <section aria-labelledby="doctors-preview-title" className="border-y border-line bg-white">
        <div className="shell py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              id="doctors-preview-title"
              eyebrow="Our team"
              title="Meet Our Doctors"
              description="Consultation is provided by the clinic's physicians."
              align="center"
              link={{ label: "View all doctors", to: "/doctors" }}
            />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} delay={index * 100} onOpen={setProfile} />
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-white">
        <svg className="w-full h-12" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "scaleY(-1)"}}>
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z" fill="#f7fafb"/>
        </svg>
      </div>

      {/* FAQ preview -------------------------------------------------------- */}
      <section aria-labelledby="faq-preview-title" className="border-t border-line bg-white">
        <div className="shell py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionHeading
                id="faq-preview-title"
                eyebrow="Questions"
                title="Common Questions"
                description="Quick answers about the clinic, its services and how to reach us."
                link={{ label: "See all FAQs", to: "/faq" }}
              />
            </Reveal>

            <div className="lg:col-span-8">
              <FAQSection items={faqs.slice(0, 4)} />
            </div>
          </div>
        </div>
      </section>

      <CTABand />

      <DoctorModal doctor={profile} onClose={() => setProfile(null)} />
    </>
  );
}
