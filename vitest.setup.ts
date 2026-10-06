import '@testing-library/jest-dom/vitest';
import { createTranslator } from 'next-intl';
import { vi } from 'vitest';
import messages from '@/messages/en.json';

// Server components call getTranslations, which needs a Next request context
vi.mock('next-intl/server', () => ({
  getTranslations: async (namespace: keyof typeof messages) =>
    createTranslator({ locale: 'en', messages, namespace }),
}));

// jsdom doesn't implement the modal methods of <dialog>
HTMLDialogElement.prototype.showModal = function showModal() {
  this.setAttribute('open', '');
};
HTMLDialogElement.prototype.close = function close() {
  this.removeAttribute('open');
};
