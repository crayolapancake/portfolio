"use client";

import { useTranslations } from "next-intl";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { primaryButtonClasses } from "@/lib/styles";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type ContactFormErrors = Partial<ContactFormValues>;

const initialValues: ContactFormValues = { name: "", email: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactEmail = "jemjo@hotmail.co.uk";

const getErrorId = (field: keyof ContactFormValues) => `${field}-error`;

type Translate = ReturnType<typeof useTranslations<"contactForm">>;

const validate = (values: ContactFormValues, t: Translate): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = t("nameRequired");
  if (!values.email.trim()) {
    errors.email = t("emailRequired");
  } else if (!emailPattern.test(values.email)) {
    errors.email = t("emailInvalid");
  }
  if (!values.message.trim()) errors.message = t("messageRequired");
  return errors;
};

const buildMailtoHref = (values: ContactFormValues, t: Translate) => {
  const subject = t("mailSubject", { name: values.name });
  const body = t("mailBody", { name: values.name, email: values.email, message: values.message });
  const params = new URLSearchParams({ subject, body });
  return `mailto:${contactEmail}?${params.toString()}`;
};

const fieldClasses =
  "rounded-lg border border-border bg-card px-4 py-2.5 text-card-foreground outline-none focus:ring-2 focus:ring-ring";

interface FormFieldProps {
  id: keyof ContactFormValues;
  label: string;
  error?: string;
  children: ReactNode;
}

const FormField = ({ id, label, error, children }: FormFieldProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-sm font-medium text-foreground">
      {label}
    </label>
    {children}
    {error && (
      <span id={getErrorId(id)} className="text-sm text-destructive">
        {error}
      </span>
    )}
  </div>
);

// TODO improve mailing, mail to client isnt always set up

const ContactForm = () => {
  const t = useTranslations("contactForm");
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues(prev => ({ ...prev, [field]: event.target.value }));
      };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.location.href = buildMailtoHref(values, t);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p role="status" aria-live="polite" className="text-muted-foreground">
        {t("thanks")}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full max-w-md flex-col gap-4 text-left"
    >
      <FormField id="name" label={t("name")} error={errors.name}>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? getErrorId("name") : undefined}
          className={fieldClasses}
        />
      </FormField>

      <FormField id="email" label={t("email")} error={errors.email}>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? getErrorId("email") : undefined}
          className={fieldClasses}
        />
      </FormField>

      <FormField id="message" label={t("message")} error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? getErrorId("message") : undefined}
          className={`resize-none ${fieldClasses}`}
        />
      </FormField>

      <button type="submit" className={`mt-2 self-center ${primaryButtonClasses}`}>
        {t("send")}
      </button>
    </form>
  );
};

export default ContactForm;
