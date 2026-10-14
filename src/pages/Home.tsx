import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  HeartHandshake,
  MapPin,
  Stethoscope,
  Pill,
  FlaskConical,
  Star,
  Quote,
} from "lucide-react";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import DoctorModal from "@/components/DoctorModal";
import ClinicHours from "@/components/ClinicHours";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import MapSection from "@/components/MapSection";
import { services } from "@/data/services";
import { doctors, type Doctor } from "@/data/doctors";
import { faqs } from "@/data/faqs";
import { usePageSeo } from "@/lib/usePageSeo";

const ICONS = {
  stethoscope: Stethoscope,
  pill: Pill,
  flask: FlaskConical,
} as const;

const ACCENTS = {
  brand: "bg-gradient-to-br from-brand/10 to-brand/5 text-brand group-hover:from-brand group-hover:to-brand/80 group-hover:text-white",
  magenta: "bg-gradient-to-br from-magenta/10 to-magenta/5 text-magenta group-hover:from-magenta group-hover:to-magenta/80 group-hover:text-white",
  leaf: "bg-gradient-to-br from-leaf/10 to-leaf/5 text-leaf group-hover:from-leaf group-hover:to-leaf/80 group-hover:text-white",
} as const;

const BORDER_ACCENTS = {
  brand: "hover:border-brand/30",
  magenta: "hover:border-magenta/30",
  leaf: "hover:border-leaf/30",
} as const;

const TEXT_ACCENTS = {
  brand: "text-brand",
  magenta: "text-magenta",
  leaf: "text-leaf",
} as const;

const REVIEWS = [
  {
    name: "Maria Santos",
    service: "Medical Consultation",
    rating: 5,
    review: "The doctors here are very professional and caring. They take time to explain everything clearly. Highly recommended!",
    date: "November 2023",
    color: "from-brand/20 to-brand/10",
    textColor: "text-brand",
  },
  {
    name: "Juan Dela Cruz",
    service: "Pharmacy",
    rating: 5,
    review: "Convenient to have the pharmacy right next to the clinic. Medicines are always available and the staff is helpful.",
    date: "February 2024",
    color: "from-magenta/20 to-magenta/10",
    textColor: "text-magenta",
  },
  {
    name: "Ana Reyes",
    service: "Laboratory",
    rating: 5,
    review: "Fast and reliable laboratory services. Results are accurate and delivered on time. The clinic is well-maintained.",
    date: "May 2024",
    color: "from-leaf/20 to-leaf/10",
    textColor: "text-leaf",
  },
  {
    name: "Carlos Mendoza",
    service: "General Checkup",
    rating: 5,
    review: "Excellent service from start to finish. The staff is friendly and the facility is clean and organized. Very satisfied!",
    date: "August 2024",
    color: "from-aqua/20 to-aqua/10",
    textColor: "text-aqua",
  },
  {
    name: "Elena Garcia",
    service: "Pediatric Care",
    rating: 5,
    review: "The pediatrician is amazing with children. My kids felt comfortable and the consultation was thorough. Thank you!",
    date: "January 2026",
    color: "from-purple-500/20 to-purple-500/10",
    textColor: "text-purple-500",
  },
  {
    name: "Roberto Ramos",
    service: "Fever Treatment",
    rating: 5,
    review: "The doctors treated my fever quickly and effectively. They gave me the right medicine and advice for recovery.",
    date: "April 2026",
    color: "from-orange-500/20 to-orange-500/10",
    textColor: "text-orange-500",
  },
  {
    name: "Luz Bautista",
    service: "Medical Consultation",
    rating: 5,
    review: "Very accommodating staff and doctors. They really listen to your concerns and provide excellent care.",
    date: "July 2026",
    color: "from-pink-500/20 to-pink-500/10",
    textColor: "text-pink-500",
  },
];

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every visit is handled with patience and respect, with attention to the person behind the concern.",
    accent: "brand" as const,
  },
  {
    icon: BadgeCheck,
    title: "Professional Healthcare",
    description:
      "Consultation is delivered by the clinic's physicians in a professional and discreet environment.",
    accent: "magenta" as const,
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Find us at Town Center, Poblacion, Kapatagan — right in the middle of the town.",
    accent: "leaf" as const,
  },
  {
    icon: Boxes,
    title: "Integrated Services",
    description:
      "Medical consultation, pharmacy and laboratory services are available in a single location.",
    accent: "brand" as const,
  },
];

export default function Home() {
  usePageSeo({
    title: "NRM Mendoza Medical Clinic, Pharmacy and Laboratory | Kapatagan",
    description:
      "Medical consultation, pharmacy and laboratory services in Poblacion, Kapatagan, Lanao del Norte. NRM Mendoza Medical Clinic — healthcare you can trust.",
  });

  const [profile, setProfile] = useState<Doctor | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(288);
  const [gap, setGap] = useState(16);
  const [scrollSpeed, setScrollSpeed] = useState(0.5);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const translateXRef = useRef(0);
  const touchStartX = useRef(0);
  const touchVelocity = useRef(0);
  const lastTouchX = useRef(0);
  const lastTouchTime = useRef(0);
  const isDragging = useRef(false);
  const throttleRef = useRef<number | undefined>(undefined);

  // Update card width, gap, and scroll speed on resize
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth < 640 ? 288 : window.innerWidth < 768 ? 320 : window.innerWidth < 1024 ? 384 : window.innerWidth < 1280 ? 448 : 576;
      const spacing = window.innerWidth < 640 ? 16 : 24;
      // Responsive scroll speed: slower on larger screens for better readability
      const speed = window.innerWidth < 640 ? 1.0 : window.innerWidth < 768 ? 1.2 : window.innerWidth < 1024 ? 1.5 : window.innerWidth < 1280 ? 1.8 : 2.0;
      setCardWidth(width);
      setGap(spacing);
      setScrollSpeed(speed);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Auto-scroll animation - direct DOM manipulation for performance
  useEffect(() => {
    if (isPaused) return;

    const animate = () => {
      translateXRef.current -= scrollSpeed;
      const totalWidth = (cardWidth + gap) * REVIEWS.length;

      if (translateXRef.current <= -totalWidth) {
        translateXRef.current = 0;
      }

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${translateXRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, cardWidth, gap, scrollSpeed]);

  const handleDragStart = (clientX: number) => {
    touchStartX.current = clientX;
    lastTouchX.current = clientX;
    lastTouchTime.current = Date.now();
    setIsPaused(true);
    isDragging.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const now = Date.now();
    const deltaTime = now - lastTouchTime.current;
    const deltaX = clientX - lastTouchX.current;

    if (deltaTime > 0) {
      touchVelocity.current = deltaX / deltaTime;
    }

    translateXRef.current += deltaX;
    if (marqueeRef.current) {
      marqueeRef.current.style.transform = `translateX(${translateXRef.current}px)`;
    }
    lastTouchX.current = clientX;
    lastTouchTime.current = now;
  };

  // Optimized throttled version for mouse events using RAF
  const handleMouseMoveThrottled = (clientX: number) => {
    if (throttleRef.current) return;
    throttleRef.current = requestAnimationFrame(() => {
      handleDragMove(clientX);
      throttleRef.current = undefined;
    });
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    // Apply momentum based on device for smoother feel
    const momentumMultiplier = window.innerWidth < 640 ? 12 : window.innerWidth < 768 ? 15 : 18;
    const momentum = touchVelocity.current * momentumMultiplier;
    const totalWidth = (cardWidth + gap) * REVIEWS.length;

    let currentVelocity = momentum;

    const animateMomentum = () => {
      currentVelocity *= 0.92; // More friction for smoother stop
      translateXRef.current += currentVelocity;

      // Reset to start when reaching end
      if (translateXRef.current <= -totalWidth) {
        translateXRef.current = 0;
      } else if (translateXRef.current > 0) {
        translateXRef.current = -totalWidth;
      }

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${translateXRef.current}px)`;
      }

      if (Math.abs(currentVelocity) > 0.15) {
        requestAnimationFrame(animateMomentum);
      } else {
        // Resume auto-scroll from current position
        setIsPaused(false);
      }
    };

    animateMomentum();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMouseMoveThrottled(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleDragEnd();
    }
  };

  return (
    <>
      <Hero />

      {/* Core services ------------------------------------------------------ */}
      <section aria-labelledby="services-title" className="shell py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-mist">
        <SectionHeading
          id="services-title"
          eyebrow="OUR SERVICES"
          title="Care for your everyday health"
          description="Access essential healthcare services through NRM Mendoza Medical Clinic, Pharmacy and Laboratory."
          align="center"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Link
                key={service.id}
                to={`/services#${service.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 ${BORDER_ACCENTS[service.accent]}`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${ACCENTS[service.accent]}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <div className={`mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${TEXT_ACCENTS[service.accent]}`}>
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Visit — map sits high on the homepage so location is easy to find */}
      <section aria-labelledby="visit-title" className="border-b border-line bg-white">
        <div className="shell py-12 pb-32 sm:py-16 lg:py-20">
          <SectionHeading
            id="visit-title"
            eyebrow="Plan your visit"
            title="Clinic Hours & Location"
            description="We are open seven days a week at Town Center, Poblacion, Kapatagan."
          />

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            <ClinicHours className="h-full" />
            <MapSection variant="compact" className="h-full" showSatelliteToggle={true} />
          </div>
        </div>
      </section>

      {/* Customer Reviews ---------------------------------------------------- */}
      <section aria-labelledby="reviews-title" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-deep via-navy to-deep">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-15" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full" style={{ background: "rgba(22, 140, 197, 0.06)", filter: "blur(120px)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full" style={{ background: "rgba(216, 27, 128, 0.04)", filter: "blur(120px)" }} aria-hidden="true" />

        <div className="shell relative z-10">
          <SectionHeading
            id="reviews-title"
            eyebrow="PATIENT REVIEWS"
            title="What Our Patients Say"
            description="Real feedback from patients who have experienced our care."
            align="center"
            tone="light"
          />
        </div>

        <div className="mt-8 sm:mt-12 relative w-screen overflow-hidden cursor-grab active:cursor-grabbing">
          <div
            ref={marqueeRef}
            className="flex gap-4 sm:gap-6"
            style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, index) => (
              <article key={`${review.name}-${index}`} className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:bg-white/10 select-none touch-none" style={{ willChange: 'transform' }}>
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-white/90 italic">
                  "{review.review}"
                </p>

                <div className="mt-4 sm:mt-6 flex items-start gap-3">
                  <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.color} ${review.textColor}`}>
                    <span className={`text-xs sm:text-sm font-bold ${review.textColor}`}>
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-[10px] sm:text-xs text-white/60">{review.service}</p>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-0.5">{review.date}</p>
                  </div>
                </div>

                <Quote className="absolute right-3 sm:right-4 top-3 sm:top-4 h-6 w-6 sm:h-8 sm:w-8 text-white/10 group-hover:text-white/20 transition-colors" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us ------------------------------------------------------ */}
      <section aria-labelledby="why-title" className="border-y border-line bg-gradient-to-b from-white to-mist">
        <div className="shell py-16 sm:py-20 lg:py-24">
          <SectionHeading
            id="why-title"
            eyebrow="Why NRM Mendoza"
            title="Care Built Around Patients"
            description="Three services, one location, and a team that treats every patient with dignity."
          />

          <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, description, accent }, index) => (
              <article key={title} className={`group hover-lift rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 ${BORDER_ACCENTS[accent]}`}>
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${ACCENTS[accent]}`}>
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-navy/25">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold tracking-tight text-navy sm:text-lg">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors preview ---------------------------------------------------- */}
      <section aria-labelledby="doctors-preview-title" className="border-y border-line bg-gradient-to-b from-mist to-white">
        <div className="shell py-24 sm:py-28">
          <SectionHeading
            id="doctors-preview-title"
            eyebrow="Our team"
            title="Meet Our Doctors"
            description="Consultation is provided by the clinic's physicians."
            align="center"
            link={{ label: "View all doctors", to: "/doctors" }}
          />

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="hover-lift">
                <DoctorCard doctor={doctor} onOpen={setProfile} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview -------------------------------------------------------- */}
      <section aria-labelledby="faq-preview-title" className="border-t border-line bg-white">
        <div className="shell py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                id="faq-preview-title"
                eyebrow="Questions"
                title="Common Questions"
                description="Quick answers about the clinic, its services and how to reach us."
                link={{ label: "See all FAQs", to: "/faq" }}
              />
            </div>

            <div className="lg:col-span-8">
              <FAQSection items={faqs.slice(0, 4)} />
            </div>
          </div>
        </div>
      </section>

      <CTABand />

      <DoctorModal doctor={profile} onClose={() => setProfile(null)} />
    </>
  );
}
