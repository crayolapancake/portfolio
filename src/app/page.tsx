import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import SectionHeading from "@/components/SectionHeading";

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-4 bg-background px-6 pt-16 pb-24 text-center">
        <Image
          src="/avatar.svg"
          alt="Illustrated avatar of Jemma Johnston"
          width={140}
          height={140}
          className="rounded-full border border-border bg-card"
          priority
        />
        <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
          Frontend & Mobile Developer
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Jemma Johnston
        </h1>
        <p className="max-w-md text-muted-foreground">
          Specialist in cross-platform mobile development
        </p>
      </section>

      <section
        id="about"
        className="flex flex-col items-center gap-4 px-6 py-24 text-center scroll-mt-20"
      >
        <SectionHeading eyebrow="About me" title="About" />
        <p className="max-w-2xl text-muted-foreground">
          Senior frontend engineer with 8 years of experience building mobile
          apps in React Native and Expo with JavaScript and TypeScript.
          Skilled in collaboration with cross-functional teams and
          end-to-end delivery of production apps.
        </p>
      </section>

      <Experience />

      <section
        id="contact"
        className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <SectionHeading eyebrow="Get in touch" title="Contact" />
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
