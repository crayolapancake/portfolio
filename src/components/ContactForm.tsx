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
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
);

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

    // TODO: wire up actual delivery to jemjo@hotmail.co.uk - decide between
    // a mailto: link and a form service (e.g. Web3Forms) per PRD R1
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-muted-foreground">
        Thanks for reaching out — I&apos;ll get back to you soon.
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
          className={`resize-none ${fieldClasses}`}
        />
      </FormField>

      <button type="submit" className={`mt-2 self-start ${primaryButtonClasses}`}>
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
