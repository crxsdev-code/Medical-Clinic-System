import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Transition delay in milliseconds (for staggered groups). */
  delay?: number;
  /** Element to render. */
  as?: ElementType;
  className?: string;
  id?: string;
}

/**
 * Fade-up on scroll. Uses IntersectionObserver and immediately reveals
 * content that is already in view, so nothing is ever hidden from users
 * with reduced motion enabled or when JS animation is unavailable.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`.trim()}
      data-revealed={revealed ? "true" : "false"}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
