import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowRight, Clock, MapPin, FlaskConical, Pill, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";

import { ButtonLink } from "./Button";
import PhoneButton from "./PhoneButton";
import Logo from "./Logo";
import { clinic, confirmedHoursSummary, primaryPhone } from "@/data/clinic";

import slide1 from "@/assets/images/clinic-slide-1.jpg";
import slide2 from "@/assets/images/clinic-slide-2.jpg";
import slide3 from "@/assets/images/clinic-slide-3.jpg";
import slide4 from "@/assets/images/clinic-slide-4.jpg";

const SLIDES = [
  {
    src: slide1,
    alt: "NRM Mendoza Medical Clinic team and staff in front of the clinic",
    caption: "Your Trusted Healthcare Partner",
    sub: "Professional medical care right here in Kapatagan, Lanao del Norte.",
  },
  {
    src: slide2,
    alt: "NRM Mendoza Medical Clinic community outreach event parade",
    caption: "Serving Our Community",
    sub: "Active in community health programs and outreach initiatives.",
  },
  {
    src: slide3,
    alt: "NRM Mendoza Medical Clinic booth at SK Poblacion event",
    caption: "Health for Every Family",
    sub: "Bringing quality healthcare closer to every family in Kapatagan.",
  },
  {
    src: slide4,
    alt: "NRM Mendoza Medical Clinic staff at community health booth",
    caption: "Compassionate Care",
    sub: "A dedicated team committed to your health and wellness.",
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  /* Auto-advance --------------------------------------------------------- */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused]);

  /* Parallax scroll effect ------------------------------------------------ */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="hero-section relative isolate flex min-h-[42rem] items-center overflow-hidden lg:min-h-screen grain"
      aria-labelledby="hero-title"
      aria-roledescription="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slideshow background ──────────────────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className={[
            "pointer-events-none absolute inset-0 transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover object-center parallax-img"
            style={{
              transform: `scale(1.1) translateY(${scrollY * 0.3}px)`,
            }}
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
          />
        </div>
      ))}

      {/* ── Gradient overlays ─────────────────────────────────────────────── */}
      {/* Left gradient for text readability */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,39,51,0.92) 0%, rgba(11,39,51,0.80) 40%, rgba(11,39,51,0.40) 70%, rgba(11,39,51,0.10) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,39,51,0.70) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="shell relative z-10 grid w-full gap-10 pb-16 pt-[8.5rem] sm:pt-[9.5rem] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-[10.5rem]">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-7">
          {/* Location pill */}
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm shadow-lg">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" aria-hidden="true" />
            {clinic.locality}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] text-white drop-shadow-sm sm:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.2rem]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Compassionate Care.
            <br />
            <span
              className="gradient-text-animate"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Better Health.
            </span>
          </h1>

          {/* Animated slide caption */}
          <p
            key={current}
            className="hero-caption mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {SLIDES[current].sub}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink to="/services" variant="secondary" size="lg">
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/contact" variant="on-dark" size="lg">
              Contact the Clinic
            </ButtonLink>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <PhoneButton
              variant="text"
              showLabel
              className="text-white hover:text-aqua"
              ariaLabel={`Call the clinic at ${primaryPhone.display}`}
            />
            <span className="hidden items-center gap-2 text-sm text-white/50 sm:inline-flex">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {confirmedHoursSummary}
            </span>
          </div>
        </div>

        {/* Trust card (desktop) */}
        <div className="hidden lg:col-span-6 lg:flex xl:col-span-5">
          <div className="ml-auto w-full max-w-sm float">
            <div
              className="rounded-3xl border border-white/20 p-6 shadow-lift backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.95)" }}
            >
              <div className="flex items-center gap-3">
                <Logo className="h-14 w-auto shrink-0" decorative />
                <div>
                  <p className="text-[0.7rem] font-bold uppercase leading-tight tracking-[0.14em] text-navy">
                    NRM Mendoza
                    <br />
                    Medical Clinic
                  </p>
                  <p className="mt-0.5 text-[0.65rem] text-muted">Pharmacy & Laboratory</p>
                </div>
              </div>

              <div className="my-4 h-px w-full bg-line" />

              <ul className="space-y-2.5">
                {[
                  { label: "Medical Clinic", Icon: Stethoscope, color: "#168cc5" },
                  { label: "Pharmacy", Icon: Pill, color: "#63a94d" },
                  { label: "Laboratory", Icon: FlaskConical, color: "#d81b80" },
                ].map(({ label, Icon, color }) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-semibold text-ink">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${color}18` }}
                    >
                      <Icon className="h-4 w-4" style={{ color }} aria-hidden="true" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <p className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-magenta" aria-hidden="true" />
                {clinic.locality}
              </p>

              {/* Opening hours chip inside card */}
              <div
                className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold"
                style={{ background: "#168cc518", color: "#168cc5" }}
              >
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Mon–Sat · 8:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slideshow controls ────────────────────────────────────────────── */}
      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="hero-arrow absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="hero-arrow absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Dot indicators */}
      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
        role="tablist"
        aria-label="Slides"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}: ${slide.caption}`}
            onClick={() => goTo(i)}
            className={[
              "hero-dot transition-all duration-500",
              i === current ? "hero-dot--active" : "",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Caption bar at the very bottom */}
      <div className="absolute bottom-16 left-0 right-0 z-10 hidden items-center justify-center sm:flex">
        <p
          key={`caption-${current}`}
          className="hero-caption rounded-full border border-white/15 bg-deep/60 px-5 py-2 text-xs font-semibold tracking-wide text-white/80 backdrop-blur-sm"
        >
          {SLIDES[current].caption}
        </p>
      </div>
    </section>
  );
}
