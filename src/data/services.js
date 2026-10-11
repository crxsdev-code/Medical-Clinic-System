/**
 * Core services offered by the clinic.
 *
 * Content is intentionally kept at category level. Specific procedures,
 * laboratory tests, packages or pricing must not be added until the clinic
 * confirms them.
 */
export const services = [
    {
        id: "medical-clinic",
        title: "Medical Clinic",
        slug: "medical-clinic",
        icon: "stethoscope",
        summary: "Medical consultation and healthcare services delivered in a professional and patient-focused environment.",
        trustLine: "Professional medical care",
        description: "The medical clinic is where patients are seen by the clinic's physicians for consultation. Visits take place in a professional, patient-focused setting, with the team guiding each patient through evaluation and next steps.",
        accent: "brand",
    },
    {
        id: "pharmacy",
        title: "Pharmacy",
        slug: "pharmacy",
        icon: "pill",
        summary: "Convenient access to pharmaceutical needs and medication support.",
        trustLine: "Convenient healthcare access",
        description: "The pharmacy supports patients with their pharmaceutical needs in the same location as the clinic, so medicine can be obtained without a separate trip. Availability of specific medicines may vary — please call ahead to confirm.",
        accent: "magenta",
    },
    {
        id: "laboratory",
        title: "Laboratory",
        slug: "laboratory",
        icon: "flask",
        summary: "Laboratory services supporting healthcare evaluation and diagnostic needs.",
        trustLine: "Diagnostic support",
        description: "Laboratory services support healthcare evaluation and diagnostic needs, helping physicians assess a patient's condition. For the complete list of available examinations and preparation requirements, please contact the clinic directly.",
        accent: "leaf",
    },
];
