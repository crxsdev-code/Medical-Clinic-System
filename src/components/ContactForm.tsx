import { useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";

import { Button } from "./Button";
import PhoneButton from "./PhoneButton";
import {
  MIN_MESSAGE_LENGTH,
  submitInquiry,
  validateContactForm,
  type ContactErrors,
  type ContactPayload,
} from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: ContactPayload = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const inputClasses = (hasError: boolean) =>
  [
    "h-12 w-full rounded-xl border bg-white px-4 text-[0.95rem] text-ink placeholder:text-muted",
    "transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15",
    hasError ? "border-magenta" : "border-line hover:border-navy/25",
  ].join(" ");

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-magenta">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Contact form (Version 1 — frontend only).
 *
 * There is no backend yet: `submitInquiry` simulates a request so the UI can
 * show honest loading / success / error states. Connect it to a real API,
 * email service or CRM by editing `src/lib/contact.ts` — nothing else changes.
 *
 * The form deliberately collects only general contact details. No medical
 * information (symptoms, history, medications, results) is ever requested.
 */
export default function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const setField = (field: keyof ContactPayload) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validateContactForm(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0];
      document.getElementById(`${uid}-${firstField}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitInquiry(values);
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-leaf/40 bg-leaf/5 p-8 text-center sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-leaf/15 text-leaf">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-bold tracking-tight text-navy">Message received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Thank you for reaching out to NRM Mendoza Medical Clinic. Your message has been recorded
          in this form. For anything urgent, please call the clinic directly so we can respond
          right away.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PhoneButton variant="solid" size="md" showLabel />
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setStatus("idle");
              setErrors({});
            }}
          >
            Send another message
          </Button>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted">
          Version 1 note: this form is not yet connected to a live inbox — the clinic can enable
          email delivery when the site goes live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${uid}-fullName`} label="Full Name" error={errors.fullName}>
          <input
            id={`${uid}-fullName`}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={setField("fullName")}
            placeholder="Juan Dela Cruz"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${uid}-fullName-error` : undefined}
            className={inputClasses(Boolean(errors.fullName))}
          />
        </Field>

        <Field id={`${uid}-email`} label="Email Address" error={errors.email}>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={setField("email")}
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${uid}-phone`}
          label="Phone Number"
          error={errors.phone}
          hint="e.g. 0917 000 0000"
        >
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={setField("phone")}
            placeholder="0917 000 0000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${uid}-phone-error` : `${uid}-phone-hint`}
            className={inputClasses(Boolean(errors.phone))}
          />
        </Field>

        <Field id={`${uid}-subject`} label="Subject" error={errors.subject}>
          <input
            id={`${uid}-subject`}
            name="subject"
            type="text"
            required
            value={values.subject}
            onChange={setField("subject")}
            placeholder="Consultation inquiry"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? `${uid}-subject-error` : undefined}
            className={inputClasses(Boolean(errors.subject))}
          />
        </Field>
      </div>

      <Field
        id={`${uid}-message`}
        label="Message"
        error={errors.message}
        hint={`At least ${MIN_MESSAGE_LENGTH} characters. Please do not include medical records or sensitive health information.`}
      >
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={setField("message")}
          placeholder="How can the clinic help you?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-error` : `${uid}-message-hint`}
          className={[
            inputClasses(Boolean(errors.message)),
            "h-auto min-h-40 resize-y py-3.5 leading-relaxed",
          ].join(" ")}
        />
      </Field>

      {status === "error" && (
        <div
          className="flex items-start gap-3 rounded-xl border border-magenta/40 bg-magenta/5 p-4"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-magenta" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold text-navy">We could not send your message</p>
            <p className="mt-1 text-muted">
              Please try again, or call the clinic directly on{" "}
              <a href="tel:+639177988717" className="font-semibold text-brand underline-offset-2 hover:underline">
                0917 798 8717
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
          We only ask for contact details — never medical records or health information.
        </p>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </>
          )}
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Version 1: this form is a front-end demonstration and does not send email yet. Please call
        the clinic for immediate assistance.
      </p>
    </form>
  );
}
