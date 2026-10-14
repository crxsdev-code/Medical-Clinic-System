import { ArrowRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";

import { ButtonLink } from "./Button";
import { weeklyHoursLabel } from "@/data/clinic";

import heroImage1 from "@/assets/images/clinic-slide-1.jpg";
import heroImage2 from "@/assets/images/clinic-slide-2.jpg";
import heroImage3 from "@/assets/images/clinic-slide-3.jpg";
import heroImage4 from "@/assets/images/clinic-slide-4.jpg";
import heroImage5 from "@/assets/images/clinic-slide-5.jpg";


const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];

/**
 * Premium hero section - clean single-image composition with auto-sliding carousel.
 * Left-aligned text content with clear hierarchy: location, headline, tagline, description, CTA, hours.
 */
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden !bg-transparent"
      aria-labelledby="hero-title"
    >
      {/* ── Background image carousel ─────────────────────────────────────── */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`NRM Mendoza Medical Clinic - Slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-[50%_40%] sm:object-[30%_30%] md:object-[35%_30%] lg:object-[40%_30%] xl:object-[45%_30%] 2xl:object-[50%_30%] !shadow-none !filter-none transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}
        {/* Premium gradient overlay - professional text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/70 via-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="shell relative z-10 w-full pb-16 pt-[7rem] sm:pb-20 sm:pt-[8rem] lg:pb-28 lg:pt-[9rem] xl:pt-[10rem] 2xl:pt-[11rem]">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Location label */}
          {/* <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90 mb-8 animate-fade-in">
            KAPATAGAN, LANAO DEL NORTE
          </p> */}

          {/* Main headline */}
          <h1
            id="hero-title"
            className="text-[2.25rem] font-bold leading-[1.1] text-white mb-6 sm:text-[2.75rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.75rem] 2xl:text-[5.25rem]"
            style={{ letterSpacing: "-0.02em" }}
          >
            NRM <span className="parisienne font-bold text-[2.75rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem] 2xl:text-[5.75rem]">Mendoza</span>
            <br />
            <span className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem]">Medical Clinic</span>
          </h1>

          {/* Decorative line */}
          <div className="h-px w-24 bg-gradient-to-r from-aqua to-transparent mb-8" />

          {/* Green supporting line */}
          <p className="text-lg font-bold text-aqua mb-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            Compassionate care. Better health.
          </p>

          {/* Supporting description */}
          <p className="text-base font-normal leading-relaxed text-white/90 mb-10 max-w-lg sm:text-lg md:text-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl" style={{ letterSpacing: "-0.01em" }}>
            Medical clinic, pharmacy, and laboratory in Kapatagan, Lanao del Norte.
          </p>

          {/* CTA */}
          <div className="mb-8">
            <ButtonLink
              to="/services"
              variant="white"
              size="md"
              className="group"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
          </div>

          {/* Hours information */}
          <div className="flex flex-col items-start gap-1 text-sm text-white/75 sm:text-base md:text-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="whitespace-nowrap">{weeklyHoursLabel.split('\n')[0]}</span>
            </div>
            {weeklyHoursLabel.includes('\n') && (
              <div className="flex items-center gap-3 pl-[3.25rem]">
                <span className="whitespace-nowrap">{weeklyHoursLabel.split('\n')[1]}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
