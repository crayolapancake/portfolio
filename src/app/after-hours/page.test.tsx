import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AfterHours, { generateMetadata } from './page';

describe('AfterHours', () => {
  it('renders each side project, linking out only when it has a site', async () => {
    render(await AfterHours());

    expect(screen.getByRole('heading', { name: 'Personal projects' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', 'https://www.stow.scot/');
    expect(links[0]).toHaveAttribute('target', '_blank');
  });

  it('provides page metadata', async () => {
    expect(await generateMetadata()).toEqual({
      title: expect.any(String),
      description: expect.any(String),
    });
  });
});
