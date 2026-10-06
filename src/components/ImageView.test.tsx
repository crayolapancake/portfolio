import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import renderWithIntl from '@/test/renderWithIntl';
import ImageView from './ImageView';

const renderImageView = () =>
  renderWithIntl(<ImageView src="/fixzy/fixzy-1-phone.webp" alt="A phone screen" width={744} height={1487} />);

describe('ImageView', () => {
  it('shows only the thumbnail until it is clicked', async () => {
    const user = userEvent.setup();
    renderImageView();

    expect(screen.queryByRole('dialog', { name: 'A phone screen' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'View larger: A phone screen' }));

    expect(screen.getByRole('dialog', { name: 'A phone screen' })).toBeInTheDocument();
  });

  it('closes the enlarged image when it is clicked', async () => {
    const user = userEvent.setup();
    renderImageView();

    await user.click(screen.getByRole('button', { name: 'View larger: A phone screen' }));
    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByRole('dialog', { name: 'A phone screen' })).not.toBeInTheDocument();
  });
});
