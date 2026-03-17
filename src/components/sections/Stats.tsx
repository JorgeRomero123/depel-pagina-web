"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiencia" },
  { value: 200, suffix: "+", label: "Proyectos Completados" },
  { value: 50, suffix: "+", label: "Clientes Industriales" },
  { value: 100, suffix: "%", label: "Cumplimiento NOM" },
];

function StatItem({
  value,
  suffix,
  label,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}) {
  const count = useCountUp(value, isInView);

  return (
    <div className="text-center">
      <div className="font-barlow text-5xl md:text-6xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-white/70 text-sm uppercase tracking-wider font-medium">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 bg-primary"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        DEPEL en numeros
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
