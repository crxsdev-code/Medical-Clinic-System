/**
 * Facility gallery entries.
 *
 * The categories below are placeholders for real photography of the clinic.
 * `image: null` renders a replaceable placeholder tile. Drop a file into
 * `src/assets/images/facilities/` and set `image: "/src/assets/images/facilities/…"`
 * (or import it) to publish a real photo — no other changes are required.
 */

export type FacilityIcon = "door" | "sofa" | "users" | "clipboard" | "flask" | "pill";

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: FacilityIcon;
  image: string | null;
  alt: string;
}

/**
 * Photos are published by dropping a file into
 * `src/assets/images/facilities/` named after the entry id
 * (e.g. `consultation-room.jpg`). Anything else is ignored, so the gallery
 * works perfectly with placeholders until real photography is supplied.
 */
const imageModules = import.meta.glob<string>(
  "../assets/images/facilities/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" },
);

function resolveImage(id: string): string | null {
  const match = Object.entries(imageModules).find(([path]) => {
    const file = path.split("/").pop() ?? "";
    return file.replace(/\.[^.]+$/, "") === id;
  });
  return match?.[1] ?? null;
}

export const facilities: Facility[] = [
  {
    id: "clinic",
    title: "Clinic",
    description: "The main clinical area of NRM Mendoza Medical Clinic.",
    icon: "door",
    image: resolveImage("clinic"),
    alt: "NRM Mendoza Medical Clinic clinical area",
  },
  {
    id: "reception",
    title: "Reception",
    description: "The front desk where patients are received and assisted.",
    icon: "clipboard",
    image: resolveImage("reception"),
    alt: "Reception desk at NRM Mendoza Medical Clinic",
  },
  {
    id: "waiting-area",
    title: "Waiting Area",
    description: "A clean, comfortable space for patients and their companions.",
    icon: "sofa",
    image: resolveImage("waiting-area"),
    alt: "Waiting area at NRM Mendoza Medical Clinic",
  },
  {
    id: "consultation-room",
    title: "Consultation Room",
    description: "The private room where patients are seen by the clinic's physicians.",
    icon: "users",
    image: resolveImage("consultation-room"),
    alt: "Consultation room at NRM Mendoza Medical Clinic",
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description: "The laboratory area supporting healthcare evaluation and diagnostic needs.",
    icon: "flask",
    image: resolveImage("laboratory"),
    alt: "Laboratory area at NRM Mendoza Medical Clinic",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description: "The pharmacy counter serving patients' pharmaceutical needs.",
    icon: "pill",
    image: resolveImage("pharmacy"),
    alt: "Pharmacy at NRM Mendoza Medical Clinic",
  },
];
