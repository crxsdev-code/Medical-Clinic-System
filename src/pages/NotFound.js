import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Home, Search } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { ButtonLink } from "@/components/Button";
import { usePageSeo } from "@/lib/usePageSeo";
export default function NotFound() {
    usePageSeo({
        title: "Page Not Found | NRM Mendoza Medical Clinic",
        description: "The page you are looking for could not be found.",
    });
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "404", title: "Page not found", crumb: "Not found" }), _jsxs("section", { className: "shell py-16 text-center sm:py-24", children: [_jsx("p", { className: "mx-auto max-w-xl text-base leading-relaxed text-muted", children: "The page you are looking for may have been moved or does not exist. Please use the navigation to find what you need." }), _jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [_jsxs(ButtonLink, { to: "/", variant: "primary", size: "md", children: [_jsx(Home, { className: "h-4 w-4", "aria-hidden": "true" }), "Back to Home"] }), _jsxs(ButtonLink, { to: "/contact", variant: "secondary", size: "md", children: [_jsx(Search, { className: "h-4 w-4", "aria-hidden": "true" }), "Contact the Clinic"] })] })] })] }));
}
