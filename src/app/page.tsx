import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import SectionHeading from "@/components/SectionHeading";

const Home = async () => {
  const t = await getTranslations("home");

  return (
    <>
      <section className="flex flex-col items-center gap-4 bg-background px-6 pt-16 pb-12 text-center">
        <Image
          src="/avatar.svg"
          alt={t("avatarAlt")}
          width={140}
          height={140}
          className="rounded-full border border-border bg-card"
          priority
        />
        <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
          {t("badge")}
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("name")}
        </h1>
        <p className="max-w-md text-muted-foreground">
          {t("tagline")}
        </p>
      </section>

      <section
        id="about"
        className="flex flex-col items-center gap-4 px-6 py-12 text-center scroll-mt-20"
      >
        <SectionHeading eyebrow={t("aboutEyebrow")} title={t("aboutTitle")} />
        <p className="max-w-2xl text-muted-foreground">
          {t("aboutBody")}
        </p>
      </section>

      <Experience />

      <section
        id="contact"
        className="flex scroll-mt-20 flex-col items-center gap-4 px-6 py-12 text-center"
      >
        <SectionHeading eyebrow={t("contactEyebrow")} title={t("contactTitle")} />
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
