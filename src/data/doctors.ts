/**
 * Doctors of NRM Mendoza Medical Clinic.
 *
 * Only information confirmed by the clinic is stored here.
 * Fields such as education, board certifications, affiliations, awards or
 * years of experience are deliberately NOT present — they must not be
 * invented. When the clinic supplies them, add the fields to `Doctor` and
 * render them in `DoctorModal`.
 */

export interface Doctor {
  id: string;
  /** Full name exactly as the clinic writes it. */
  name: string;
  /** Title prefix used in cards, e.g. "Dr." */
  honorific: string;
  specialty: string;
  /** Short, factual description. No claims beyond the stated specialty. */
  description: string;
  /** Longer text for the profile modal. */
  profile: string;
  /** Path to a portrait. `null` renders a replaceable placeholder. */
  photo: string | null;
  /** Alt text for the portrait. */
  photoAlt: string;
}

/**
 * Portraits are picked up automatically from
 * `src/assets/images/doctors/` when a file is named after the doctor's id,
 * e.g. `dr-nilda-s-mendoza.jpg`. Until then a placeholder is shown.
 */
const photoModules = import.meta.glob<string>(
  "../assets/images/doctors/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" },
);

function resolveDoctorPhoto(id: string): string | null {
  const match = Object.entries(photoModules).find(([path]) => {
    const file = path.split("/").pop() ?? "";
    return file.replace(/\.[^.]+$/, "") === id;
  });
  return match?.[1] ?? null;
}

export const doctors: Doctor[] = [
  {
    id: "dr-nikhil-rhoul-s-mendoza",
    name: "Dr. Nikhil Rhoul S. Mendoza",
    honorific: "Dr.",
    specialty: "Pediatrician",
    description:
      "Provides medical consultation for children at NRM Mendoza Medical Clinic, Pharmacy and Laboratory.",
    profile:
      "Dr. Nikhil Rhoul S. Mendoza sees patients at NRM Mendoza Medical Clinic, Pharmacy and Laboratory in Kapatagan, Lanao del Norte. A full professional profile — including clinic schedule and areas of focus — will be published here once confirmed by the clinic.",
    photo: resolveDoctorPhoto("dr-nikhil-rhoul-s-mendoza"),
    photoAlt: "Portrait of Dr. Nikhil Rhoul S. Mendoza",
  },
  {
    id: "dr-nilda-s-mendoza",
    name: "Dr. Nilda S. Mendoza",
    honorific: "Dr.",
    specialty: "General Physician",
    description:
      "Provides general medical consultation for patients of NRM Mendoza Medical Clinic, Pharmacy and Laboratory.",
    profile:
      "Dr. Nilda S. Mendoza sees patients at NRM Mendoza Medical Clinic, Pharmacy and Laboratory in Kapatagan, Lanao del Norte. A full professional profile — including clinic schedule and areas of focus — will be published here once confirmed by the clinic.",
    photo: resolveDoctorPhoto("dr-nilda-s-mendoza"),
    photoAlt: "Portrait of Dr. Nilda S. Mendoza",
  },
];
