import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
/**
 * Site shell: skip link → sticky navbar → routed page content → footer.
 *
 * The header (top information bar + white navbar) is fixed and opaque, so
 * every route reserves its height with a top offset.
 */
export default function SiteLayout() {
    return (_jsxs("div", { className: "flex min-h-screen flex-col bg-mist", children: [_jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white", children: "Skip to main content" }), _jsx(Navbar, {}), _jsx("div", { className: "flex-1 pt-[7.25rem]", children: _jsx("main", { id: "main-content", children: _jsx(Outlet, {}) }) }), _jsx(Footer, {}), _jsx(ScrollToTop, {})] }));
}
