import SectionHeading from "@/components/SectionHeading";

interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  highlights: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "The Keyholding Company",
    role: "Senior Mobile Engineer",
    dates: "2026",
    highlights: [
      "Led a React Native / Expo / Typescript app for on-site risk assessments end-to-end",
      "Owned architecture, offline-first support, and the EAS release pipeline",
      "Used agentic AI tooling to boost delivery speed",
    ],
  },
  {
    company: "Fixzy",
    role: "Senior Mobile Engineer",
    dates: "2025 - 2026",
    highlights: [
      "Owned two React Native / Expo apps in a Yarn Workspaces monorepo",
      "Shipped estimate management, room scanning, and offline-first support",
      "Improved Azure, Expo, and Firebase deployment pipelines",
    ],
  },
  {
    company: "Token.com",
    role: "Mobile Engineer",
    dates: "2022 - 2024",
    highlights: [
      "Integrated payments under strict CDD/KYC compliance",
      "Shipped a rewards scheme, social features, and a non-custodial wallet",
      "Owned release management and deployed hotfixes in production",
    ],
  },
  {
    company: "Spotlight Sports Group",
    role: "Mobile Engineer",
    dates: "Sep 2021 - 2022",
    highlights: [
      "Built new features from high-fidelity designs, including notifications, sports UI and geofencing",
      "Deployed via CI/CD and released to the app stores",
      "Kept parity between the web and mobile apps",
    ],
  },
  {
    company: "SwarmOnline",
    role: "Lead Mobile Developer",
    dates: "2020 - 2021",
    highlights: [
      "Sole mobile engineer from client pitch through to delivery",
      "Built MVP apps in React Native and React web for multiple clients",
      "Managed scheduling, estimates, and client communication",
    ],
  },
  {
    company: "Voxsio",
    role: "Frontend Developer",
    dates: "2018 - 2020",
    highlights: [
      "Sole frontend engineer on an AI-powered mental health app",
      "Owned the UI, data handling, and Firebase architecture",
      "Shipped a React Native app to iOS and Android; ran user research",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Experience" title="Career history" />
        {/* TODO: add screenshots of work for each role */}
        <div className="mt-12 flex flex-col">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <div key={`${exp.company}-${exp.dates}`} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-primary bg-background" />
                  {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className={isLast ? "" : "pb-10"}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}{" "}
                      <span className="font-normal text-muted-foreground">
                        · {exp.company}
                      </span>
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.dates}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {exp.highlights.map(item => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
