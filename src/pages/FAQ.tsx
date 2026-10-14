import { MessageCircleQuestion, Phone } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { clinic } from "@/data/clinic";
import { usePageSeo } from "@/lib/usePageSeo";

import facebookIcon from "@/assets/images/icons/facebook.png";

export default function FAQ() {
  usePageSeo({
    title: "FAQs | NRM Mendoza Medical Clinic",
    description:
      "Answers to frequently asked questions about NRM Mendoza Medical Clinic, Pharmacy and Laboratory — hours, location, services and how to contact the clinic.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        description="Quick, factual answers about the clinic, its services and how to reach us."
      />

      <section aria-labelledby="faq-list" className="shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Sidebar ------------------------------------------------------ */}
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="faq-list"
                eyebrow="Questions"
                title="How can we help?"
                description="Can't find what you are looking for? The clinic team is happy to assist."
              />

              <div className="mt-8 space-y-3">
                <ButtonAnchor
                  href={`tel:${clinic.phones[0].tel}`}
                  variant="primary"
                  size="md"
                  className="w-full"
                  aria-label={`Call the clinic at ${clinic.phones[0].display}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {clinic.phones[0].display}
                </ButtonAnchor>

                <ButtonAnchor
                  href={clinic.facebook}
                  variant="secondary"
                  size="md"
                  className="w-full"
                  aria-label="Message us on Facebook (opens in a new tab)"
                >
                  <img src={facebookIcon} alt="Facebook" className="h-5 w-5" aria-hidden="true" />
                  Message on Facebook
                </ButtonAnchor>

                <ButtonLink to="/contact" variant="ghost" size="md" className="w-full">
                  <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
                  Send an enquiry
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Accordion ----------------------------------------------------- */}
          <div className="lg:col-span-8">
            <FAQSection />
          </div>
        </div>
      </section>

      <CTABand
        heading="Still have a question?"
        description="Reach the clinic by phone, Facebook or the contact form — we will get back to you during opening hours."
      />
    </>
  );
}
