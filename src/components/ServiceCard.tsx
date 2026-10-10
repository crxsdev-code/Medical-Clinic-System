import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Pill, FlaskConical, type LucideIcon } from "lucide-react";

import Reveal from "./Reveal";
import type { Service, ServiceIcon } from "@/data/services";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  pill: Pill,
  flask: FlaskConical,
};

const ACCENTS = {
  brand: {
    icon: "bg-brand/10 text-brand",
    line: "bg-brand",
    arrow: "text-brand",
  },
  magenta: {
    icon: "bg-magenta/10 text-magenta",
    line: "bg-magenta",
    arrow: "text-magenta",
  },
  leaf: {
    icon: "bg-leaf/10 text-leaf",
    line: "bg-leaf",
    arrow: "text-leaf",
  },
} as const;

interface ServiceCardProps {
  service: Service;
  /** Delay used for staggered reveal animations. */
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = ICONS[service.icon];
  const accent = ACCENTS[service.accent];

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group card card-hover service-card-gradient-border relative flex h-full flex-col overflow-hidden p-7 sm:p-8">
        {/* accent hairline */}
        <span
          className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-soft group-hover:scale-x-100 ${accent.line}`}
          aria-hidden="true"
        />

        <span
          className={`service-card-icon flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 ${accent.icon}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>

        <h3 className="mt-6 text-xl font-bold tracking-tight text-navy">{service.title}</h3>

        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
          {service.summary}
        </p>

        <Link
          to={`/services#${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy transition-colors hover:text-brand"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRight
            className={`h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-1 ${accent.arrow}`}
            aria-hidden="true"
          />
        </Link>
      </article>
    </Reveal>
  );
}
