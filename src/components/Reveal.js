import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
/**
 * Fade-up on scroll. Uses IntersectionObserver and immediately reveals
 * content that is already in view, so nothing is ever hidden from users
 * with reduced motion enabled or when JS animation is unavailable.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", id, }) {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node)
            return;
        if (typeof IntersectionObserver === "undefined") {
            setRevealed(true);
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return (_jsx(Tag, { ref: ref, id: id, className: `reveal ${className}`.trim(), "data-revealed": revealed ? "true" : "false", style: delay > 0 ? { transitionDelay: `${delay}ms` } : undefined, children: children }));
}
