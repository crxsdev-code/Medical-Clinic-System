import { UserRound } from "lucide-react";

import Reveal from "./Reveal";
import { AvatarPlaceholder } from "./PlaceholderImage";
import type { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  delay?: number;
  onOpen: (doctor: Doctor) => void;
}

export default function DoctorCard({ doctor, delay = 0, onOpen }: DoctorCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group card card-hover flex h-full flex-col overflow-hidden">
        {/* Portrait — replaceable once the clinic supplies photos */}
        <div className="relative aspect-[4/5] overflow-hidden border-b border-line">
          {doctor.photo ? (
            <img
              src={doctor.photo}
              alt={doctor.photoAlt}
              loading="lazy"
              decoding="async"
              className="doctor-card-image h-full w-full object-cover object-top"
            />
          ) : (
            <AvatarPlaceholder name={doctor.name} />
          )}

          <span className="doctor-card-badge relative z-10 absolute left-4 top-4 rounded-lg border border-white/30 bg-deep/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {doctor.specialty}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-navy">
            {doctor.name}
          </h3>

          <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
            {doctor.specialty}
          </p>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{doctor.description}</p>

          <button
            type="button"
            onClick={() => onOpen(doctor)}
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 self-start rounded-lg border border-navy/15 bg-white px-6 text-sm font-semibold text-navy transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand hover:shadow-soft"
            aria-haspopup="dialog"
          >
            <UserRound className="h-4 w-4" aria-hidden="true" />
            View Profile
          </button>
        </div>
      </article>
    </Reveal>
  );
}
