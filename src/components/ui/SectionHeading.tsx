interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  id?: string;
}

export function SectionHeading({ title, subtitle, light, id }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
      <h2
        id={id}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight ${
          light ? "text-white" : "text-neutral-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/70" : "text-neutral-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 mx-auto h-1 w-16 rounded ${
          light ? "bg-accent" : "bg-primary"
        }`}
      />
    </div>
  );
}
