import { CalendarCheck, MapPin, Phone } from "lucide-react";

import Modal from "./Modal";
import { AvatarPlaceholder } from "./PlaceholderImage";
import { ButtonAnchor, ButtonLink } from "./Button";
import { clinic, primaryPhone } from "@/data/clinic";
import type { Doctor } from "@/data/doctors";

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

/**
 * Accessible profile dialog (keyboard: Escape closes, focus is trapped and
 * restored). Version 1 shows only confirmed information — credentials are
 * added here once the clinic provides them.
 */
export default function DoctorModal({ doctor, onClose }: DoctorModalProps) {
  const titleId = "doctor-modal-title";
  const descId = "doctor-modal-description";

  return (
    <Modal
      open={doctor !== null}
      onClose={onClose}
      labelledBy={titleId}
      describedBy={descId}
      panelClassName="sm:max-w-3xl"
    >
      {doctor && (
        <div className="sm:grid sm:grid-cols-5">
          {/* Portrait */}
          <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-auto sm:min-h-full">
            {doctor.photo ? (
              <img
                src={doctor.photo}
                alt={doctor.photoAlt}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <AvatarPlaceholder name={doctor.name} />
            )}
          </div>

          {/* Details */}
          <div className="p-6 pt-8 sm:col-span-3 sm:p-9 sm:pt-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {doctor.specialty}
            </p>

            <h2
              id={titleId}
              className="mt-3 pr-10 text-2xl font-bold leading-tight tracking-tight text-navy sm:text-[1.75rem]"
            >
              {doctor.name}
            </h2>

            <p id={descId} className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              {doctor.description}
            </p>

            <div className="mt-5 rounded-lg border border-line bg-mist p-5">
              <p className="text-sm leading-relaxed text-ink">{doctor.profile}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                <span className="font-semibold text-navy">Placeholder content:</span> professional
                details (schedule, credentials, areas of focus) will be published here once
                confirmed by the clinic.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink to="/contact" variant="primary" size="md">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book a Consultation
              </ButtonLink>

              <ButtonAnchor href={`tel:${primaryPhone.tel}`} variant="secondary" size="md">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {primaryPhone.display}
              </ButtonAnchor>
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              {clinic.address.full}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
}
