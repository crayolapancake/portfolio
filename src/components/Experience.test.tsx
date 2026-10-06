import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import renderWithIntl from '@/test/renderWithIntl';
import Experience from './Experience';

describe('Experience', () => {
  it('renders the career history heading and every role', async () => {
    renderWithIntl(await Experience());

    expect(screen.getByRole('heading', { name: 'Career history' })).toBeInTheDocument();

    [
      'The Keyholding Company',
      'Fixzy',
      'Token.com',
      'Spotlight Sports Group',
      'SwarmOnline',
      'Voxsio',
    ].forEach(company => {
      expect(screen.getByRole('heading', { name: new RegExp(company) })).toBeInTheDocument();
    });
  });

  it('renders a highlight bullet for the most recent role', async () => {
    renderWithIntl(await Experience());

    expect(
      screen.getByText(
        'Led a React Native / Expo / Typescript app for on-site risk assessments end-to-end',
      ),
    ).toBeInTheDocument();
  });

  it('renders screenshot buttons for roles that have them', async () => {
    renderWithIntl(await Experience());

    expect(
      screen.getByRole('button', {
        name: /view larger: tkc risk assessment app dashboard/i,
      }),
    ).toBeInTheDocument();
  });
});
