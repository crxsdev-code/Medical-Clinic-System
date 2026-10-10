import logo from "@/assets/images/nrm-mendoza-logo.png";

const ALT =
  "Official logo of NRM Mendoza Medical Clinic, Pharmacy and Laboratory";

interface LogoProps {
  className?: string;
  /** Decorative logo (e.g. inside a link that already has a label). */
  decorative?: boolean;
}

/**
 * Official clinic logo — uses the real NRM Mendoza logo artwork.
 * To swap artwork, replace `src/assets/images/nrm-mendoza-logo.jpg`.
 */
export default function Logo({ className = "h-11 w-auto", decorative = false }: LogoProps) {
  return (
    <img
      src={logo}
      alt={decorative ? "" : ALT}
      aria-hidden={decorative ? "true" : undefined}
      width={320}
      height={320}
      className={className}
      style={{ objectFit: "contain" }}
      loading="eager"
      decoding="async"
    />
  );
}
