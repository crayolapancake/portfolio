"use client";

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

const validate = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!values.message.trim()) errors.message = "Message is required";
  return errors;
};

const buildMailtoHref = (values: ContactFormValues) => {
  const subject = `Portfolio contact from ${values.name}`;
  const body = `${values.message}\n\n— ${values.name} (${values.email})`;
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
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.location.href = buildMailtoHref(values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p role="status" aria-live="polite" className="text-muted-foreground">
        Thanks for reaching out — your email client should have opened with
        your message ready to send.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full max-w-md flex-col gap-4 text-left"
    >
      <FormField id="name" label="Name" error={errors.name}>
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

      <FormField id="email" label="Email" error={errors.email}>
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

      <FormField id="message" label="Message" error={errors.message}>
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
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
