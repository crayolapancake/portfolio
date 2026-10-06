'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, type KeyboardEvent } from 'react';
import { primaryButtonClasses } from '@/lib/styles';

const navLinks = [
  { labelKey: 'about', href: '/#about' },
  { labelKey: 'experience', href: '/#experience' },
  { labelKey: 'afterHours', href: '/after-hours' },
];

const Header = () => {
  const t = useTranslations('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') closeMenu();
  };

  return (
    <>
      <header
        onKeyDown={handleKeyDown}
        className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            {t('name')}
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <Link href="/#contact" className={primaryButtonClasses}>
              {t('contact')}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          >
            <span className="sr-only">{t('openMenu')}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Drawer sits outside the header: its backdrop-blur would trap position: fixed children */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <nav
        id="mobile-nav"
        onKeyDown={handleKeyDown}
        className={`fixed inset-y-0 right-0 z-[70] flex w-72 max-w-[80vw] flex-col gap-4 border-l border-border bg-background px-6 py-4 text-sm font-medium text-muted-foreground shadow-xl transition-[translate,visibility] duration-300 md:hidden ${
          isMenuOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="-mr-2 inline-flex items-center justify-center self-end rounded-md p-2 text-foreground"
        >
          <span className="sr-only">{t('closeMenu')}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="transition-colors hover:text-foreground"
          >
            {t(link.labelKey)}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={closeMenu}
          className={`text-center ${primaryButtonClasses}`}
        >
          {t('contact')}
        </Link>
      </nav>
    </>
  );
};

export default Header;
