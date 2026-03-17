"use client";

import {
  CheckCircle,
  Rocket,
  ShieldCheck,
  Users,
  Cog,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Rocket,
    title: "Tecnologia Actual",
    description:
      "Software especializado para mediciones y pruebas que garantizan precision en nuestros proyectos.",
  },
  {
    icon: ShieldCheck,
    title: "Equipo de Seguridad",
    description:
      "Herramientas y equipo de vanguardia. Personal con certificaciones DC3.",
  },
  {
    icon: CheckCircle,
    title: "Calidad en Materiales",
    description:
      "Materiales y equipos con soporte tecnico y garantia de nuestros proveedores.",
  },
  {
    icon: Cog,
    title: "Precios Competitivos",
    description:
      "Creamos oportunidades de negocio con presupuestos justos y transparentes.",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description:
      "Un equipo comprometido con apoyo constante para lograr un mismo resultado.",
  },
  {
    icon: Phone,
    title: "Soporte 24/7",
    description:
      "Disponibilidad para atenderte generando un clima de confianza y respeto.",
  },
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="why-heading"
          title="Por que Elegirnos"
          subtitle="Mas de 15 anos respaldando la industria electrica en Mexico"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={cn(
                  "flex gap-4 opacity-0 translate-y-6",
                  isInView && "opacity-100 translate-y-0",
                  "transition-all duration-500"
                )}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
