import { Home, Search } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import { ButtonLink } from "@/components/Button";
import { usePageSeo } from "@/lib/usePageSeo";

export default function NotFound() {
  usePageSeo({
    title: "Page Not Found | NRM Mendoza Medical Clinic",
    description: "The page you are looking for could not be found.",
  });

  return (
    <>
      <PageHeader eyebrow="404" title="Page not found" />

      <section className="shell py-16 text-center sm:py-24">
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
          The page you are looking for may have been moved or does not exist. Please use the
          navigation to find what you need.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink to="/" variant="primary" size="md">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary" size="md">
            <Search className="h-4 w-4" aria-hidden="true" />
            Contact the Clinic
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
