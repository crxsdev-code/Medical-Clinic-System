import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, DoorOpen, Sofa, Users, FlaskConical, Pill, ClipboardList, type LucideIcon } from "lucide-react";

import Modal from "./Modal";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import { facilities, type Facility, type FacilityIcon } from "@/data/facilities";

const ICONS: Record<FacilityIcon, LucideIcon> = {
  door: DoorOpen,
  sofa: Sofa,
  users: Users,
  clipboard: ClipboardList,
  flask: FlaskConical,
  pill: Pill,
};

export default function FacilityGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;
  const active: Facility | null = open ? facilities[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % facilities.length));
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + facilities.length) % facilities.length,
    );
  }, []);

  /* Arrow-key navigation while the lightbox is open */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, goNext, goPrev]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility, index) => {
          const Icon = ICONS[facility.icon];

          return (
            <Reveal key={facility.id} as="li" delay={(index % 3) * 80} className="h-full">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group card card-hover relative block h-full w-full overflow-hidden text-left"
                aria-label={`Open ${facility.title} photo — ${facility.alt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {facility.image ? (
                    <img
                      src={facility.image}
                      alt={facility.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.05]"
                    />
                  ) : (
                    <PlaceholderImage
                      label={facility.title}
                      hint="Photo to be added"
                      tone="light"
                      icon={<Icon className="h-5 w-5" aria-hidden="true" />}
                      className="transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
                    />
                  )}

                  <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full border border-white/25 bg-deep/80 text-white opacity-0 transition-all duration-300 ease-soft group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex items-start gap-3 p-5 sm:p-6">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
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
              </button>
            </Reveal>
          );
        })}
      </ul>

      {/* Lightbox ------------------------------------------------------- */}
      <Modal
        open={open}
        onClose={close}
        labelledBy="facility-lightbox-title"
        tone="dark"
        hideCloseButton
        panelClassName="sm:max-w-4xl"
      >
        {active && (
          <div>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-deep sm:aspect-[16/10]">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.alt}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <PlaceholderImage
                    label={`${active.title} — photo pending`}
                    hint="Replace src/data/facilities.ts with a real image path"
                    tone="dark"
                    icon={<Maximize2 className="h-6 w-6" aria-hidden="true" />}
                  />
                )}
              </div>

              {/* Prev / Next */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/85 text-white transition hover:bg-white hover:text-deep sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/85 text-white transition hover:bg-white hover:text-deep sm:right-5"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-deep/85 text-lg leading-none text-white transition hover:bg-white hover:text-deep sm:right-5 sm:top-5"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-5 sm:px-7">
              <div>
                <h2
                  id="facility-lightbox-title"
                  className="text-lg font-bold tracking-tight text-white"
                >
                  {active.title}
                </h2>
                <p className="mt-1 text-sm text-white/60">{active.description}</p>
              </div>

              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tabular-nums text-white/70">
                {(activeIndex ?? 0) + 1} / {facilities.length}
              </span>
            </div>

            <p className="border-t border-white/10 bg-white/5 px-5 py-3 text-xs text-white/65 sm:px-7">
              Placeholder gallery — no photographs of the facility have been supplied yet. Use ←
              and → keys to browse.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
