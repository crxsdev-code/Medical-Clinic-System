import { Link } from "react-router-dom";
import { Facebook, MapPin, ArrowUpRight, Clock } from "lucide-react";

import Logo from "./Logo";
import { mainNav } from "@/data/navigation";
import { clinic, weeklyHoursLabel } from "@/data/clinic";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-deep text-white">
      {/* Restrained texture only — no colour blobs */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      <div className="shell relative z-10 pt-16 pb-10 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand ------------------------------------------------------ */}
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4">
              <Logo className="h-16 w-auto shrink-0" />
              <p className="max-w-[16rem] text-sm font-semibold leading-snug text-white">
                NRM Mendoza Medical Clinic,
                <br />
                Pharmacy and Laboratory
              </p>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Medical consultation, pharmacy and laboratory services in one location — serving
              patients in Kapatagan, Lanao del Norte.
            </p>

            <a
              href={clinic.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/50 hover:text-white"
              aria-label="NRM Mendoza Medical Clinic on Facebook (opens in a new tab)"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
              Facebook
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Quick links ------------------------------------------------ */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact ---------------------------------------------------- */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Contact
            </h2>

            <ul className="mt-5 space-y-3">
              {clinic.phones.map((phone) => (
                <li key={phone.id}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                    aria-label={`Call ${phone.display}`}
                  >
                    <span className="tabular-nums">{phone.display}</span>
                    <span className="text-white/30 transition-colors group-hover:text-aqua">
                      ({phone.label})
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <address className="mt-5 flex gap-3 text-sm not-italic leading-relaxed text-white/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
              <span>
                {clinic.address.line1},<br />
                {clinic.address.line2},<br />
                {clinic.address.line3}
              </span>
            </address>

            <a
              href={clinic.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua transition-colors hover:text-white"
            >
              Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Hours ------------------------------------------------------ */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Clinic Hours
            </h2>

            <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
              <span>{weeklyHoursLabel}</span>
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Sunday: schedule to be confirmed — please call the clinic or check our Facebook
              page.
            </p>
          </div>
        </div>

        {/* Bottom bar ---------------------------------------------------- */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-white/50">
              © {year} NRM Mendoza Medical Clinic, Pharmacy and Laboratory. All rights reserved.
            </p>

            <p className="text-xs leading-relaxed text-white/55">
              Information on this website is general and does not replace professional medical
              advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
