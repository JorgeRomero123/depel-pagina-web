"use client";

import { Zap, Wrench, Sun, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Zap,
  Wrench,
  Sun,
};

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="bg-neutral-offwhite py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          title="Nuestros Servicios"
          subtitle="Soluciones integrales en ingenieria electrica para la industria"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={cn(
                  "bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border-t-4 border-primary",
                  "opacity-0 translate-y-8",
                  isInView && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: isInView ? `${index * 150}ms` : "0ms" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-muted leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/servicios#${service.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  Conocer mas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
