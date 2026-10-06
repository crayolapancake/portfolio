import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import renderWithIntl from '@/test/renderWithIntl';
import Home from './page';

// Async server component that can't render nested in a client test render; covered by its own tests
vi.mock('@/components/Experience', () => ({
  default: () => <h2>Career history</h2>,
}));

describe('Home', () => {
  it('renders the hero, about, experience, and contact sections', async () => {
    renderWithIntl(await Home());

    expect(screen.getByRole('img', { name: /photo of jemma johnston/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Jemma Johnston' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Career history' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });
});
