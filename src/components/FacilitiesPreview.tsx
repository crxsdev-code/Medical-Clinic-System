import { ArrowRight, ClipboardList, DoorOpen, FlaskConical, Sofa, Users, Pill, type LucideIcon } from "lucide-react";

import Reveal from "./Reveal";
import PlaceholderImage from "./PlaceholderImage";
import { ButtonLink } from "./Button";
import { facilities, type FacilityIcon } from "@/data/facilities";

const ICONS: Record<FacilityIcon, LucideIcon> = {
  door: DoorOpen,
  sofa: Sofa,
  users: Users,
  clipboard: ClipboardList,
  flask: FlaskConical,
  pill: Pill,
};

/**
 * Compact static preview of the facilities gallery for the home page.
 * No lightbox here — the full, browsable gallery lives on /facilities.
 * Tiles with no photograph yet show a designed placeholder rather than
 * stock imagery.
 */
export default function FacilitiesPreview({ limit = 3 }: { limit?: number }) {
  const items = facilities.slice(0, limit);

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((facility, index) => {
        const Icon = ICONS[facility.icon];

        return (
          <Reveal key={facility.id} as="li" delay={index * 80} className="h-full">
            <article className="group card card-hover flex h-full flex-col overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-line">
                {facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
                  />
                ) : (
                  <PlaceholderImage
                    label={facility.title}
                    hint="Photo to be added"
                    tone="light"
                    icon={<Icon className="h-5 w-5" aria-hidden="true" />}
                  />
                )}
              </div>

              <div className="flex flex-1 items-start gap-3 p-5 sm:p-6">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-bold tracking-tight text-navy">
                    {facility.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {facility.description}
                  </span>
                </span>
              </div>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}

/** "View all" link used beside the preview. */
export function FacilitiesLink() {
  return (
    <div className="mt-9 flex justify-center">
      <ButtonLink to="/facilities" variant="ghost" size="md">
        View all facilities
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </ButtonLink>
    </div>
  );
}
