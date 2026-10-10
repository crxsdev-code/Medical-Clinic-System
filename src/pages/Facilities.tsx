import { Images, Info } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FacilityGallery from "@/components/FacilityGallery";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { usePageSeo } from "@/lib/usePageSeo";

export default function Facilities() {
  usePageSeo({
    title: "Clinic Facilities | NRM Mendoza",
    description:
      "Explore the facilities of NRM Mendoza Medical Clinic, Pharmacy and Laboratory — clinic, reception, waiting area, consultation room, laboratory and pharmacy in Kapatagan, Lanao del Norte.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Our facilities"
        title="Clinic Facilities"
        description="A clean, comfortable environment for patients and their families."
      />

      {/* Intro + gallery ------------------------------------------------------ */}
      <section aria-labelledby="facilities-gallery" className="shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              id="facilities-gallery"
              eyebrow="Inside the clinic"
              title="Designed for comfort and privacy"
              description="From the waiting area to the consultation room, the clinic is arranged to keep visits calm, orderly and discreet."
            />
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="flex items-start gap-3 rounded-lg border border-dashed border-line bg-white/70 p-5">
              <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted">
                <strong className="text-navy">Photography pending:</strong> the gallery below shows
                replaceable placeholders for each area of the clinic. Approved photographs can be
                dropped into{" "}
                <code className="rounded bg-mist px-1.5 py-0.5 text-navy">
                  src/assets/images/facilities/
                </code>{" "}
                and wired up in{" "}
                <code className="rounded bg-mist px-1.5 py-0.5 text-navy">
                  src/data/facilities.ts
                </code>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <FacilityGallery />
        </div>

        <Reveal>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <Images className="h-4 w-4 text-brand" aria-hidden="true" />
            Select any tile to open the gallery viewer — use ← and → to browse.
          </p>
        </Reveal>
      </section>

      <CTABand
        heading="See the clinic in person"
        description="Visit us at Town Center, Poblacion, Kapatagan during clinic hours."
      />
    </>
  );
}
