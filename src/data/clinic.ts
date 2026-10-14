/**
 * Single source of truth for clinic information.
 *
 * Everything the website displays about the clinic (name, address, phone
 * numbers, social links and opening hours) is read from this file so the
 * client can update details in one place.
 */

export type HourStatus = "confirmed" | "pending";

export interface DaySchedule {
  /** Full day name used in the UI. */
  day: string;
  /** Short day name (table header / mobile). */
  short: string;
  /** Human readable range, e.g. "8:00 AM – 5:00 PM". */
  hours: string | null;
  /** "pending" = awaiting confirmation from the clinic. */
  status: HourStatus;
  /** Optional clarifying note shown under the time. */
  note?: string;
}

export interface PhoneNumber {
  id: string;
  label: string;
  /** Display format, e.g. "0917 798 8717". */
  display: string;
  /** Clickable format, e.g. "+639177988717". */
  tel: string;
}

export interface ClinicData {
  name: string;
  nameShort: string;
  tagline: string;
  locality: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    full: string;
  };
  phones: PhoneNumber[];
  facebook: string;
  googleMaps: string;
  /** Key-less Google Maps embed (safe preview, no API key required). */
  mapEmbedUrl: string;
  coordinates: { lat: number; lng: number };
  hours: DaySchedule[];
}

export const clinic: ClinicData = {
  name: "NRM Mendoza Medical Clinic, Pharmacy and Laboratory",
  nameShort: "NRM Mendoza",
  tagline: "Healthcare You Can Trust",
  locality: "Kapatagan, Lanao del Norte",

  address: {
    line1: "Unit 7 and 8, Town Center",
    line2: "Poblacion, Kapatagan",
    line3: "9214 Lanao del Norte, Philippines",
    full: "Unit 7 and 8, Town Center, Poblacion, Kapatagan, 9214 Lanao del Norte, Philippines",
  },

  phones: [
    { id: "primary", label: "Primary mobile", display: "0917 798 8717", tel: "+639177988717" },
    { id: "secondary", label: "Secondary mobile", display: "0961 288 9765", tel: "+639612889765" },
  ],

  facebook: "https://www.facebook.com/profile.php?id=100090604218706",

  googleMaps:
    "https://www.google.com/maps/place/NRM+MENDOZA+MEDICAL+CLINIC/@7.9014408,123.7588591,16.25z/data=!4m6!3m5!1s0x3254354f48dee5dd:0xfcd2ac68e4cd8555!8m2!3d7.8977225!4d123.7688172!16s%2Fg%2F11w4fw8yd_?entry=ttu",

  mapEmbedUrl:
    "https://www.google.com/maps?q=NRM%20MENDOZA%20MEDICAL%20CLINIC%2C%20Poblacion%2C%20Kapatagan%2C%20Lanao%20del%20Norte&z=16&output=embed",

  coordinates: { lat: 7.8977225, lng: 123.7688172 },

  hours: [
    { day: "Monday", short: "Mon", hours: "8:00 AM – 5:00 PM", status: "confirmed" },
    { day: "Tuesday", short: "Tue", hours: "8:00 AM – 5:00 PM", status: "confirmed" },
    { day: "Wednesday", short: "Wed", hours: "8:00 AM – 5:00 PM", status: "confirmed" },
    { day: "Thursday", short: "Thu", hours: "8:00 AM – 5:00 PM", status: "confirmed" },
    { day: "Friday", short: "Fri", hours: "8:00 AM – 5:00 PM", status: "confirmed" },
    { day: "Saturday", short: "Sat", hours: "8:00 AM – 5:00 PM", status: "confirmed" },
    { day: "Sunday", short: "Sun", hours: "9:00 AM – 12:00 PM", status: "confirmed" },
  ],
};

/** Confirmed hours, formatted as a single readable string (Mon–Sat). */
export const confirmedHoursSummary = (() => {
  const confirmed = clinic.hours.filter((h) => h.status === "confirmed" && h.hours);
  if (confirmed.length === 0) return "Please contact the clinic for current hours.";
  const first = confirmed[0];
  const last = confirmed[confirmed.length - 1];
  return `${first.day} to ${last.day}, ${first.hours}`;
})();

/**
 * Compact hours label used in the top bar and hero, e.g.
 * "Monday–Saturday · 8:00 AM – 5:00 PM". Derived from the confirmed
 * entries above so it can never contradict the schedule table.
 */
export const weeklyHoursLabel = (() => {
  const confirmed = clinic.hours.filter((h) => h.status === "confirmed" && h.hours);
  if (confirmed.length === 0) return "Please contact the clinic for current hours.";
  const weekdays = confirmed.filter((h) => h.day !== "Sunday");
  const sunday = confirmed.find((h) => h.day === "Sunday");
  const first = weekdays[0];
  const last = weekdays[weekdays.length - 1];
  const days =
    first.day === last.day ? first.day : `${first.day}–${last.day}`;
  const weekdayHours = `${days} · ${first.hours}`;
  const sundayHours = sunday ? `\n        Sunday · ${sunday.hours}` : "";
  return `${weekdayHours}${sundayHours}`;
})();

/**
 * Compact hours label for smaller screens - weekday hours only.
 */
export const compactHoursLabel = (() => {
  const confirmed = clinic.hours.filter((h) => h.status === "confirmed" && h.hours);
  if (confirmed.length === 0) return "Please contact the clinic for current hours.";
  const weekdays = confirmed.filter((h) => h.day !== "Sunday");
  const first = weekdays[0];
  const last = weekdays[weekdays.length - 1];
  const days =
    first.day === last.day ? first.day : `${first.day}–${last.day}`;
  return `${days} · ${first.hours}`;
})();

export const primaryPhone = clinic.phones[0];
