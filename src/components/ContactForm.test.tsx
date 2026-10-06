import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import renderWithIntl from '@/test/renderWithIntl';
import ContactForm from './ContactForm';

const fillAndSubmit = async (
  user: ReturnType<typeof userEvent.setup>,
  values: { name?: string; email?: string; message?: string },
) => {
  if (values.name !== undefined) {
    await user.type(screen.getByLabelText('Name'), values.name);
  }
  if (values.email !== undefined) {
    await user.type(screen.getByLabelText('Email'), values.email);
  }
  if (values.message !== undefined) {
    await user.type(screen.getByLabelText('Message'), values.message);
  }
  await user.click(screen.getByRole('button', { name: 'Send message' }));
};

describe('ContactForm', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    });
  });

  it('shows a validation error for each empty required field on submit', async () => {
    const user = userEvent.setup();
    renderWithIntl(<ContactForm />);

    await user.click(screen.getByRole('button', { name: 'Send message' }));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toHaveAccessibleDescription('Name is required');
  });

  it('shows an error for an invalid email format', async () => {
    const user = userEvent.setup();
    renderWithIntl(<ContactForm />);

    await fillAndSubmit(user, {
      name: 'Jane Doe',
      email: 'not-an-email',
      message: 'Hello there',
    });

    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  it('builds a mailto link and shows a success message on valid submit', async () => {
    const user = userEvent.setup();
    renderWithIntl(<ContactForm />);

    await fillAndSubmit(user, {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
    });

    expect(window.location.href).toContain('mailto:jemjo@hotmail.co.uk');
    expect(window.location.href).toContain('Jane');
    expect(screen.getByRole('status')).toHaveTextContent(/thanks for reaching out/i);
  });
});
