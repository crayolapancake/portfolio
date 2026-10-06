'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { primaryButtonClasses } from '@/lib/styles';

const navLinks = [
  { labelKey: 'about', href: '/#about' },
  { labelKey: 'experience', href: '/#experience' },
  { labelKey: 'afterHours', href: '/after-hours' },
];

const Header = () => {
  const t = useTranslations('header');
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground">
            <Image
              src="/avatar.svg"
              alt=""
              width={32}
              height={32}
              className="rounded-full border border-border bg-card"
            />
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
            onClick={() => dialogRef.current?.showModal()}
            aria-haspopup="dialog"
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
      
      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-label={t('menu')}
        onClick={event => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="m-0 ml-auto hidden h-dvh max-h-none w-72 max-w-[80vw] translate-x-full flex-col gap-4 border-l border-border bg-background px-6 py-4 text-sm font-medium text-muted-foreground shadow-xl transition-[translate,display,overlay] transition-discrete duration-300 backdrop:bg-black/50 open:flex open:translate-x-0 open:starting:translate-x-full md:hidden!"
      >
        <button
          type="button"
          autoFocus
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
      </dialog>
    </>
  );
};

export default Header;
