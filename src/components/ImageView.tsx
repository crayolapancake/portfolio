'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ImageViewProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageView = ({ src, alt, width, height }: ImageViewProps) => {
  const t = useTranslations('experience');
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={t('viewScreenshot', { alt })}
        className="w-[30%] max-w-[150px] cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 672px) 150px, 30vw"
          className="h-auto w-full"
        />
      </button>
      {/* Native dialog gives focus trapping, Esc to close and a backdrop without JS state */}
      <dialog
        ref={dialogRef}
        onClick={() => dialogRef.current?.close()}
        aria-label={alt}
        className="m-auto bg-transparent p-0 backdrop:bg-black/80"
      >
        <button
          type="button"
          autoFocus
          aria-label={t('closeScreenshot')}
          className="cursor-zoom-out"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 672px) 80vh, 90vw"
            className="h-[80vh] w-auto max-w-[90vw] object-contain"
          />
        </button>
      </dialog>
    </>
  );
};

export default ImageView;
