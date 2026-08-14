interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

const SectionHeading = ({ eyebrow, title }: SectionHeadingProps) => (
  <div className="text-center">
    <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
      {eyebrow}
    </p>
    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
