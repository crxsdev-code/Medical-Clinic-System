/**
 * Frequently asked questions.
 *
 * Only safe, factual questions based on confirmed clinic information are
 * included. Answers never give medical advice and never state policies that
 * the clinic has not confirmed.
 *
 * Set `render: "clinic-hours"` on an item to embed the live schedule from
 * `data/clinic.ts` instead of a static answer.
 */

export interface Faq {
  id: string;
  question: string;
  answer?: string;
  render?: "clinic-hours";
  link?: {
    text: string;
    url: string;
  };
}

export const faqs: Faq[] = [
  {
    id: "hours",
    question: "What are the clinic hours?",
    render: "clinic-hours",
  },
  {
    id: "sunday",
    question: "Is the clinic open on Sundays?",
    answer:
      "Yes, the clinic is open on Sundays from 9:00 AM to 12:00 PM.",
  },
  {
    id: "location",
    question: "Where is NRM Mendoza Medical Clinic located?",
    answer:
      "The clinic is at Unit 7 and 8, Town Center, Poblacion, Kapatagan, 9214 Lanao del Norte, Philippines. A map and directions are available on our Contact page.",
  },
  {
    id: "contact",
    question: "How can I contact the clinic?",
    answer:
      "You may call or text 0917 798 8717 or 0961 288 9765 during clinic hours, send a message through our official Facebook page, or visit the clinic in person at Town Center, Poblacion, Kapatagan.",
  },
  {
    id: "services",
    question: "What services does the clinic provide?",
    answer:
      "NRM Mendoza Medical Clinic, Pharmacy and Laboratory provides medical consultation, pharmacy services, and laboratory services in one location. For specific services and availability, please contact the clinic directly.",
  },
  {
    id: "pharmacy-laboratory",
    question: "Does the clinic offer pharmacy and laboratory services?",
    answer:
      "Yes. The pharmacy and the laboratory are part of NRM Mendoza Medical Clinic, Pharmacy and Laboratory and are located at the same address in Poblacion, Kapatagan.",
  },
  {
    id: "appointment",
    question: "How do I book a consultation?",
    answer:
      "Online appointment booking is not yet available on this website. Please call 0917 798 8717 or visit the clinic during clinic hours to arrange a consultation. A self-service booking option is planned for a future version of this website.",
  },
  {
    id: "directions",
    question: "How do I get directions to the clinic?",
    answer:
      "The clinic is located at Unit 7 and 8, Town Center, Poblacion, Kapatagan, 9214 Lanao del Norte. You can find us easily in the town center area.",
    link: {
      text: "View on Google Maps",
      url: "https://www.google.com/maps/place/NRM+MENDOZA+MEDICAL+CLINIC/@7.9014408,123.7588591,16.25z/data=!4m6!3m5!1s0x3254354f48dee5dd:0xfcd2ac68e4cd8555!8m2!3d7.8977225!4d123.7688172!16s%2Fg%2F11w4fw8yd_?entry=ttu",
    },
  },
];
