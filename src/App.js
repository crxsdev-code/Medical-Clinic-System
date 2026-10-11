import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Doctors from "@/pages/Doctors";
import Facilities from "@/pages/Facilities";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
/**
 * Version 1 routes.
 *
 * Future appointment booking will be added as nested routes without
 * touching this layout, e.g. `/appointments`, `/appointments/:doctorId`.
 */
export default function App() {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(SiteLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/doctors", element: _jsx(Doctors, {}) }), _jsx(Route, { path: "/facilities", element: _jsx(Facilities, {}) }), _jsx(Route, { path: "/faq", element: _jsx(FAQ, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
