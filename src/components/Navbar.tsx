import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Facebook, Menu, X } from "lucide-react";

import Logo from "./Logo";
import TopBar from "./TopBar";
import PhoneButton from "./PhoneButton";
import { mainNav } from "@/data/navigation";
import { clinic } from "@/data/clinic";

/**
 * Premium sticky navigation.
 *
 * • Home: transparent over the hero, solid white once the visitor scrolls.
 * • All other routes: solid white from the start.
 * • Mobile: animated slide-in panel that closes on route change, Escape or
 *   backdrop click, locks body scroll and manages focus.
 */
export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  /* Close the menu whenever the route changes ---------------------------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll while the menu is open ------------------------------ */
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  /* Move focus into the panel when it opens ------------------------------ */
  useEffect(() => {
    if (!menuOpen) return;
    const frame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [menuOpen]);

  /* Escape closes the menu and restores focus ---------------------------- */
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkClasses = (isActive: boolean) =>
    [
      "relative px-3 py-2 text-[0.95rem] font-medium tracking-tight transition-colors duration-300",
      isActive
        ? "text-brand"
        : "text-navy/70 hover:text-navy",
    ].join(" ");

  const panelLinkClasses = (isActive: boolean) =>
    [
      "flex items-center justify-between border-b border-line py-4 text-base font-semibold tracking-tight transition-colors",
      isActive ? "text-brand" : "text-navy hover:text-brand",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top information bar */}
      <TopBar />

      <div className="border-b border-line bg-white/60 shadow-soft backdrop-blur-lg transition-all duration-300 ease-soft">
        <div className="shell flex h-14 items-center justify-between gap-6 transition-all duration-300 ease-soft lg:h-14">
          {/* Brand */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-lg outline-offset-4"
            aria-label={`${clinic.name} — home`}
          >
            <Logo className="h-10 w-auto sm:h-11" />
            <div className="md:block">
              <p className="text-xs font-bold uppercase leading-tight tracking-[0.14em] text-navy">
                NRM Mendoza
              </p>
              <p className="text-[0.65rem] text-muted">Medical Clinic</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => linkClasses(isActive)}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute -bottom-0.5 left-3 right-3 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ease-soft",
                        isActive ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-all duration-300 lg:hidden hover:bg-mist"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation ------------------------------------------------ */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden",
          menuOpen ? "" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className={[
            "absolute inset-0 bg-deep/60 backdrop-blur-[2px] transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal={menuOpen}
          aria-label="Navigation menu"
          aria-hidden={!menuOpen}
          className={[
            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-lift",
            "transition-[transform,visibility] duration-300 ease-soft",
            menuOpen ? "visible translate-x-0" : "invisible translate-x-full",
          ].join(" ")}
        >
          {/* Header with logo and clinic name */}
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={closeMenu}
              aria-label={`${clinic.name} — home`}
            >
              <Logo className="h-10 w-auto" />
              <div>
                <p className="text-xs font-bold uppercase leading-tight tracking-[0.14em] text-navy">
                  NRM Mendoza
                </p>
                <p className="text-[0.65rem] text-muted">Medical Clinic</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => {
                closeMenu();
                toggleRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:bg-mist"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-4">
            <ul>
              {mainNav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) => panelLinkClasses(isActive)}
                    onClick={closeMenu}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={[
                            "h-4 w-4 transition-transform duration-300",
                            isActive ? "text-brand" : "text-line",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-line px-6 py-6">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
            <PhoneButton
              variant="outline"
              size="md"
              showLabel
              className="w-full"
              ariaLabel={`Call the clinic at ${clinic.phones[0].display}`}
            />
            <a
              href={clinic.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page (opens in a new tab)"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-navy transition hover:border-brand hover:text-brand"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
