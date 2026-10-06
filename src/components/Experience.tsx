import { getTranslations } from 'next-intl/server';
import ImageView from '@/components/ImageView';
import experienceScreenshots from '@/lib/experienceScreenshots';
import SectionHeading from '@/components/SectionHeading';

const experienceIds = ['keyholding', 'fixzy', 'token', 'spotlight', 'swarm', 'voxsio'];

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(item => typeof item === 'string');

const Experience = async () => {
  const t = await getTranslations('experience');

  return (
    <section id="experience" className="scroll-mt-20 px-6 pt-12">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        <div className="mt-12 flex flex-col">
          {experienceIds.map((id, index) => {
            const isLast = index === experienceIds.length - 1;
            const highlights = t.raw(`items.${id}.highlights`);
            const images = experienceScreenshots[id] ?? [];
            return (
              <div key={id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-primary bg-background" />
                  {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className={`min-w-0 flex-1 ${isLast ? '' : 'pb-10'}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {t(`items.${id}.role`)}{' '}
                      <span className="font-normal text-muted-foreground">
                        · {t(`items.${id}.company`)}
                      </span>
                    </h3>
                    <span className="whitespace-nowrap text-sm text-muted-foreground">
                      {t(`items.${id}.dates`)}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm sm:pr-28 text-muted-foreground">
                    {isStringArray(highlights) && highlights.map(item => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {images.length > 0 && (
                    <div className="mt-4 mb-6 flex justify-between">
                      {images.map(image => (
                        <ImageView
                          key={image.file}
                          src={`/${id}/${image.file}.webp`}
                          alt={t(`items.${id}.screenshots.${image.alt}`)}
                          width={image.width}
                          height={image.height}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
