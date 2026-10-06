import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import renderWithIntl from '@/test/renderWithIntl';
import Header from './Header';

const getMenu = () => document.getElementById('mobile-nav') as HTMLDialogElement;

describe('Header', () => {
  it('renders the site name and nav links', () => {
    renderWithIntl(<Header />);

    expect(screen.getByRole('link', { name: 'Jemma Johnston' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '/#experience');
    expect(screen.getByRole('link', { name: 'After Hours' })).toHaveAttribute('href', '/after-hours');
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/#contact');
  });

  it('keeps the mobile menu hidden until the toggle is clicked', async () => {
    const user = userEvent.setup();
    renderWithIntl(<Header />);

    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Open menu' }));

    const menu = screen.getByRole('dialog', { name: 'Menu' });
    expect(within(menu).getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(within(menu).getByRole('link', { name: 'After Hours' })).toBeInTheDocument();
  });

  it('closes the mobile menu with the close button', async () => {
    const user = userEvent.setup();
    renderWithIntl(<Header />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    await user.click(screen.getByRole('button', { name: 'Close menu' }));

    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument();
  });

  it('closes the mobile menu when the backdrop is clicked', async () => {
    const user = userEvent.setup();
    renderWithIntl(<Header />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    await user.click(getMenu());

    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument();
  });

  it('closes the mobile menu after a menu link is clicked', async () => {
    const user = userEvent.setup();
    renderWithIntl(<Header />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const menu = screen.getByRole('dialog', { name: 'Menu' });
    await user.click(within(menu).getByRole('link', { name: 'About' }));

    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument();
  });
});
