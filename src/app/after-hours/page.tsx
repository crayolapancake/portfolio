import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("afterHours");
  return { title: t("metadataTitle"), description: t("metadataDescription") };
};

interface Project {
  id: string;
  href?: string;
  imageSrc?: string;
}

const projects: Project[] = [
  { id: "stow", href: "https://www.stow.scot/", imageSrc: "/stow-banner.jpg" },
  { id: "bothan" },
];

const AfterHours = async () => {
  const t = await getTranslations("afterHours");

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <ul className="mt-12 flex flex-col gap-6">
          {projects.map(project => (
            <li
              key={project.id}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              {project.imageSrc && (
                <Image
                  src={project.imageSrc}
                  alt={t(`projects.${project.id}.imageAlt`)}
                  width={1544}
                  height={1056}
                  sizes="(min-width: 672px) 672px, 100vw"
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {t(`projects.${project.id}.name`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`projects.${project.id}.description`)}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {t("visitSite")}
                    <span className="sr-only"> {t("opensInNewTab")}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AfterHours;
