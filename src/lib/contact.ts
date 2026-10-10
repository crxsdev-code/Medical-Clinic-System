/**
 * Contact form validation + submission plumbing.
 *
 * VERSION 1: there is no backend. `submitInquiry` simulates a network call so
 * the UI can demonstrate loading / success / error states honestly.
 *
 * VERSION 2 integration point — replace the body of `submitInquiry` with a
 * real call, e.g.:
 *
 *   const res = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error("Request failed");
 *
 * The form never collects medical information (no symptoms, history,
 * medications or records) — only general contact details.
 */

export interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts local formats: 09XXXXXXXXX, +639XXXXXXXXX, (02) 8XXXXXXX etc.
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

export const MIN_MESSAGE_LENGTH = 20;

export function validateContactForm(values: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter a valid name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address, e.g. name@example.com.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a contact number.";
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid contact number, e.g. 0917 000 0000.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please write at least ${MIN_MESSAGE_LENGTH} characters so we can respond properly.`;
  }

  return errors;
}

/**
 * Simulated submission.
 * Resolves after a short delay, or rejects to exercise the error state.
 */
export function submitInquiry(payload: ContactPayload): Promise<{ ok: true }> {
  // eslint-disable-next-line no-console
  console.info(
    "[Contact form] Version 1 — no backend connected. Payload captured locally:",
    payload,
  );

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (!payload.email || !payload.message) {
        reject(new Error("Missing required fields"));
        return;
      }
      resolve({ ok: true });
    }, 900);
  });
}
