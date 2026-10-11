import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Facebook, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { ButtonLink } from "./Button";
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
    const toggleRef = useRef(null);
    const panelRef = useRef(null);
    /* Close the menu whenever the route changes ---------------------------- */
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);
    /* Lock body scroll while the menu is open ------------------------------ */
    useEffect(() => {
        if (!menuOpen)
            return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [menuOpen]);
    /* Move focus into the panel when it opens ------------------------------ */
    useEffect(() => {
        if (!menuOpen)
            return;
        const frame = window.requestAnimationFrame(() => {
            panelRef.current?.querySelector("a, button")?.focus();
        });
        return () => window.cancelAnimationFrame(frame);
    }, [menuOpen]);
    /* Escape closes the menu and restores focus ---------------------------- */
    useEffect(() => {
        if (!menuOpen)
            return;
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);
    const closeMenu = () => setMenuOpen(false);
    const linkClasses = (isActive) => [
        "relative px-3 py-2 text-[0.95rem] font-medium tracking-tight transition-colors duration-300",
        isActive
            ? "text-brand"
            : "text-navy/70 hover:text-navy",
    ].join(" ");
    const panelLinkClasses = (isActive) => [
        "flex items-center justify-between border-b border-line py-4 text-lg font-semibold tracking-tight transition-colors",
        isActive ? "text-brand" : "text-navy hover:text-brand",
    ].join(" ");
    return (_jsxs("header", { className: "fixed inset-x-0 top-0 z-50", children: [_jsx("div", { className: "border-b border-line bg-white/95 shadow-soft backdrop-blur-md transition-all duration-300 ease-soft", children: _jsxs("div", { className: "shell flex h-20 items-center justify-between gap-6 transition-all duration-300 ease-soft lg:h-20", children: [_jsxs(Link, { to: "/", className: "flex shrink-0 items-center gap-3 rounded-lg outline-offset-4", "aria-label": `${clinic.name} — home`, children: [_jsx(Logo, { className: "h-11 w-auto sm:h-12" }), _jsxs("div", { className: "hidden md:block", children: [_jsx("p", { className: "text-xs font-bold uppercase leading-tight tracking-[0.14em] text-navy", children: "NRM Mendoza" }), _jsx("p", { className: "text-[0.65rem] text-muted", children: "Medical Clinic" })] })] }), _jsx("nav", { "aria-label": "Primary", className: "hidden items-center gap-1 lg:flex", children: mainNav.map((item) => (_jsx(NavLink, { to: item.path, end: item.path === "/", className: ({ isActive }) => linkClasses(isActive), children: ({ isActive }) => (_jsxs(_Fragment, { children: [item.label, _jsx("span", { "aria-hidden": "true", className: [
                                                "absolute -bottom-0.5 left-3 right-3 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ease-soft",
                                                isActive ? "scale-x-100" : "scale-x-0",
                                            ].join(" ") })] })) }, item.path))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs(ButtonLink, { to: "/contact", variant: "primary", size: "sm", className: "hidden sm:inline-flex", children: ["Contact Us", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })] }), _jsx("button", { ref: toggleRef, type: "button", onClick: () => setMenuOpen((open) => !open), "aria-expanded": menuOpen, "aria-controls": "mobile-navigation", "aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu", className: "flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-all duration-300 lg:hidden hover:bg-mist", children: menuOpen ? (_jsx(X, { className: "h-5 w-5", "aria-hidden": "true" })) : (_jsx(Menu, { className: "h-5 w-5", "aria-hidden": "true" })) })] })] }) }), _jsxs("div", { className: [
                    "fixed inset-0 z-40 lg:hidden",
                    menuOpen ? "" : "pointer-events-none",
                ].join(" "), children: [_jsx("div", { onClick: closeMenu, "aria-hidden": "true", className: [
                            "absolute inset-0 bg-deep/60 backdrop-blur-[2px] transition-opacity duration-300",
                            menuOpen ? "opacity-100" : "opacity-0",
                        ].join(" ") }), _jsxs("div", { id: "mobile-navigation", ref: panelRef, role: "dialog", "aria-modal": menuOpen, "aria-label": "Navigation menu", "aria-hidden": !menuOpen, className: [
                            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-lift",
                            "transition-[transform,visibility] duration-300 ease-soft",
                            menuOpen ? "visible translate-x-0" : "invisible translate-x-full",
                        ].join(" "), children: [_jsxs("div", { className: "flex items-center justify-between border-b border-line px-6 py-5", children: [_jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand", children: "Menu" }), _jsx("button", { type: "button", onClick: () => {
                                            closeMenu();
                                            toggleRef.current?.focus();
                                        }, "aria-label": "Close navigation menu", className: "flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:bg-mist", children: _jsx(X, { className: "h-5 w-5", "aria-hidden": "true" }) })] }), _jsx("nav", { "aria-label": "Mobile", className: "flex-1 overflow-y-auto px-6 py-4", children: _jsx("ul", { children: mainNav.map((item) => (_jsx("li", { children: _jsx(NavLink, { to: item.path, end: item.path === "/", className: ({ isActive }) => panelLinkClasses(isActive), onClick: closeMenu, children: ({ isActive }) => (_jsxs(_Fragment, { children: [item.label, _jsx(ArrowRight, { className: [
                                                            "h-4 w-4 transition-transform duration-300",
                                                            isActive ? "text-brand" : "text-line",
                                                        ].join(" "), "aria-hidden": "true" })] })) }) }, item.path))) }) }), _jsxs("div", { className: "space-y-3 border-t border-line px-6 py-6", children: [_jsx(PhoneButton, { variant: "solid", size: "md", showLabel: true, className: "w-full", ariaLabel: `Call the clinic at ${clinic.phones[0].display}` }), _jsxs("div", { className: "flex gap-3", children: [_jsx(ButtonLink, { to: "/contact", variant: "secondary", size: "md", className: "flex-1", children: "Contact Us" }), _jsx("a", { href: clinic.facebook, target: "_blank", rel: "noopener noreferrer", "aria-label": "Visit our Facebook page (opens in a new tab)", className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-navy transition hover:border-brand hover:text-brand", children: _jsx(Facebook, { className: "h-5 w-5", "aria-hidden": "true" }) })] })] })] })] })] }));
}
