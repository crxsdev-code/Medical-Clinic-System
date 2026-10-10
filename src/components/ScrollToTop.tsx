import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Resets scroll position on every route change.
 * - Supports in-page anchors (e.g. /services#pharmacy) by scrolling to the
 *   target section once the new route has rendered.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the new route is painted before measuring.
      const frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo(0, 0);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}
