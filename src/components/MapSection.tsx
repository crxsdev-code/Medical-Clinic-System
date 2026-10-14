import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, MapPin, Phone, Navigation, Satellite } from "lucide-react";
import { useState } from "react";

import { ButtonAnchor } from "./Button";
import { clinic } from "@/data/clinic";

interface MapSectionProps {
  /** "full" = map + address panel (Contact page); "compact" = map only. */
  variant?: "full" | "compact";
  className?: string;
  /** Show satellite view toggle button */
  showSatelliteToggle?: boolean;
}

/**
 * Location block.
 *
 * The map uses a key-less Google Maps embed, so no API key is bundled with
 * the site. If the clinic prefers a keyed embed later, replace the iframe
 * `src` with the provider URL — the surrounding UI does not change.
 */
export default function MapSection({ variant = "full", className = "", showSatelliteToggle = false }: MapSectionProps) {
  const [isSatellite, setIsSatellite] = useState(false);

  const renderMap = () => (
    <div
      className={`relative w-full overflow-hidden rounded-3xl border border-line bg-mist shadow-soft ${
        variant === "full"
          ? "h-72 sm:h-96 lg:h-full lg:min-h-[26rem]"
          : "h-full min-h-[20rem] sm:min-h-[24rem] lg:min-h-[26rem]"
      }`}
    >
      <iframe
        title={`Map showing the location of ${clinic.name}`}
        src={isSatellite ? clinic.mapEmbedUrl.replace("output=embed", "t=k&output=embed") : clinic.mapEmbedUrl}
        key={isSatellite ? "satellite" : "map"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-deep/55 to-transparent" />

      <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3">
        {variant !== "compact" && (
          <p className="max-w-[16rem] rounded-2xl bg-white/92 px-3.5 py-2.5 text-xs leading-snug text-navy shadow-soft backdrop-blur-sm">
            <span className="flex items-start gap-2 font-semibold">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              {clinic.address.line1}
            </span>
            <span className="mt-0.5 block pl-5 text-muted">{clinic.address.line2}</span>
          </p>
        )}

        <div className="flex flex-wrap items-end gap-3">
          {showSatelliteToggle && (
            <button
              onClick={() => setIsSatellite(!isSatellite)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-lift transition hover:-translate-y-0.5 hover:bg-mist"
              aria-label={isSatellite ? "Switch to map view" : "Switch to satellite view"}
            >
              <Satellite className="h-4 w-4" aria-hidden="true" />
              {isSatellite ? "Map" : "Satellite"}
            </button>
          )}

          <a
            href={clinic.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-deep"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Open in Google Maps
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );

  if (variant === "compact") {
    return (
      <div className={`h-full ${className}`}>
        {renderMap()}
        <div className="mt-4 sm:hidden rounded-2xl border border-line bg-white p-4 shadow-soft">
          <p className="text-base font-semibold text-navy leading-tight">
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              {clinic.address.line1}
            </span>
          </p>
          <p className="mt-2 text-sm text-muted pl-7 leading-relaxed">{clinic.address.line2}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid items-stretch gap-6 lg:grid-cols-5 ${className}`}>
      {/* Details */}
      <div className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8 lg:col-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Visit us</p>
        <h3 className="mt-3 text-xl font-bold tracking-tight text-navy sm:text-2xl">
          {clinic.nameShort} Medical Clinic
        </h3>

        <address className="mt-5 flex gap-3 not-italic">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
          <span className="text-sm leading-relaxed text-ink">
            {clinic.address.line1}
            <br />
            {clinic.address.line2}
            <br />
            {clinic.address.line3}
          </span>
        </address>

        <ul className="mt-5 space-y-3 border-t border-line pt-5">
          {clinic.phones.map((phone) => (
            <li key={phone.id}>
              <a
                href={`tel:${phone.tel}`}
                className="group flex items-center gap-3 text-sm text-ink transition-colors hover:text-brand"
                aria-label={`Call the clinic at ${phone.display}`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-semibold tabular-nums">{phone.display}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonAnchor href={`tel:${clinic.phones[0].tel}`} variant="primary" size="md" className="flex-1">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call the Clinic
          </ButtonAnchor>

          <ButtonAnchor
            href={clinic.googleMaps}
            variant="secondary"
            size="md"
            className="flex-1"
            aria-label="Get directions to the clinic in Google Maps (opens in a new tab)"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </ButtonAnchor>

          <ButtonAnchor
            href={clinic.facebook}
            variant="ghost"
            size="md"
            className="flex-1"
            aria-label="Visit the clinic on Facebook (opens in a new tab)"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            Visit Facebook
          </ButtonAnchor>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted">
          Need something specific?{" "}
          <Link
            to="/faq"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            Check our FAQs
          </Link>
        </p>
      </div>

      {renderMap()}
    </div>
  );
}
