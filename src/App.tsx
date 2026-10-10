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
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
