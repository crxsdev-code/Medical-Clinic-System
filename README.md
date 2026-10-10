NRM Mendoza Medical Clinic, Pharmacy and Laboratory — Website (Version 1)

Premium public-facing website for NRM Mendoza Medical Clinic, Pharmacy and Laboratory, located at Unit 7 and 8, Town Center, Poblacion, Kapatagan, 9214 Lanao del Norte, Philippines.

Built with React + Vite + TypeScript + Tailwind CSS v4 and React Router.

Quick Start
npm install
npm run dev
npm run build
npm run preview
npm run check

npm run dev — Start the development server at http://localhost:5173.
npm run build — Run the TypeScript checks and production build.
npm run preview — Preview the production build locally.
npm run check — Run the project's route smoke tests.
Routes
Route	Page
/	Home — hero, trust strip, about, services, doctors, facilities, hours, location, and FAQs
/about	About the clinic
/services	Medical, pharmacy, and laboratory services
/doctors	Doctors and accessible profile modal
/facilities	Facilities gallery and lightbox
/faq	Frequently asked questions
/contact	Contact details, form, and map
Where to Put Assets
Clinic Logo

Replace the placeholder with the official logo:

src/assets/images/nrm-mendoza-logo.png

The logo is rendered by src/components/Logo.tsx. Replace the image file with the official artwork without recoloring or distorting it.

Until the official logo is provided, a generated placeholder mark using the brand colors is displayed.

Photography
Asset	Location
Doctor portraits	src/assets/images/doctors/<doctor-id>.jpg
Facility photos	src/assets/images/facilities/<entry-id>.jpg
Hero photo	src/assets/images/clinic-slide-1.jpg
About photo	src/assets/images/clinic-slide-4.jpg

Doctor and facility photos are loaded automatically by filename through import.meta.glob in the relevant data files. If an image is missing, a placeholder is displayed.

Editing Clinic Information

Editable content is maintained in src/data/.

File	Contents
src/data/clinic.ts	Clinic name, address, phone numbers, Facebook, Google Maps, and opening hours
src/data/doctors.ts	Doctor names, specialties, descriptions, and photos
src/data/services.ts	Service categories and descriptions
src/data/faqs.ts	Frequently asked questions and answers
src/data/facilities.ts	Facility gallery entries and photos
src/data/navigation.ts	Header and footer navigation
Sunday Opening Hours

Sunday hours are intentionally marked as To be confirmed because the available sources disagree between 9:00 AM–12:00 PM and 8:00 AM–12:00 PM.

Update the Sunday entry in src/data/clinic.ts once the clinic confirms the correct schedule.

Design System

The design tokens are defined in src/index.css using Tailwind CSS v4's @theme.

Token	Value	Purpose
navy	#123B4A	Primary color
deep	#0B2733	Headers, footer, and hero
brand	#168CC5	Medical blue
aqua	#20B8D8	Cyan accents
magenta	#D81B80	Accent color
leaf	#63A94D	Accent color
mist	#F7FAFB	Page background
ink	#172A32	Primary text
muted	#66767D	Secondary text
line	#E4ECEF	Borders

The visual balance uses neutral colors and navy as the foundation, blue and cyan as secondary colors, and magenta and green sparingly. The primary font is Inter.

Content and Placeholders

Information that has not been verified is represented by clearly labeled placeholders rather than invented content.

Examples include:

Clinic history in src/pages/About.tsx
Doctor professional details in src/data/doctors.ts
Doctor and facility photography
Sunday opening hours in src/data/clinic.ts

The contact form is frontend-only in Version 1. It validates input and displays loading, success, and error states, but does not send emails.

Version 2 — Appointment Booking

Appointment booking is planned but has not yet been implemented.

Booking calls to action currently direct users to /contact.
Additional routes can be added in src/App.tsx.
The submitInquiry() function in src/lib/contact.ts is the intended integration point for a backend, email service, or CRM.
Version 1 does not intentionally collect sensitive medical information.
Quality Checklist

The project is intended to support the following quality checks:

npm run build — TypeScript and Vite production build.
npm run check — Route rendering smoke tests.
Semantic HTML and accessible form fields.
Keyboard support for modals, lightboxes, and menus.
Visible focus indicators and skip-to-content navigation.
Reduced-motion preferences.
Responsive layouts at common mobile, tablet, and desktop widths.
Route-specific titles and meta descriptions, Open Graph tags, and MedicalClinic JSON-LD.

Run the relevant checks locally to verify the current implementation before release.