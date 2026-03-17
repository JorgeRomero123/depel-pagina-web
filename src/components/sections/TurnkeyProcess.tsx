"use client";

import { ClipboardList, Calculator, HardHat, Power } from "lucide-react";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { processSteps } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stepIcons = [ClipboardList, Calculator, HardHat, Power];

export function TurnkeyProcess() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      className="py-20 lg:py-28 bg-primary-dark text-white"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-heading"
          title="Proyectos Llave en Mano"
          subtitle="Nuestro proceso garantiza calidad de inicio a fin"
          light
        />

        <div
          ref={ref}
          className="relative flex flex-col md:flex-row items-start gap-8 md:gap-0"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-white/20">
            <div
              className={cn(
                "absolute inset-y-0 left-0 bg-accent transition-all duration-1000 ease-out",
                isInView ? "w-full" : "w-0"
              )}
            />
          </div>

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.number}
                className={cn(
                  "relative flex-1 flex flex-col items-center text-center px-4",
                  "opacity-0 translate-y-6 transition-all duration-500",
                  isInView && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: isInView ? `${index * 200}ms` : "0ms" }}
              >
                {/* Step circle */}
                <div
                  className={cn(
                    "relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                    isInView
                      ? "border-accent bg-accent text-neutral-dark"
                      : "border-white/30 bg-transparent text-white"
                  )}
                  style={{ transitionDelay: isInView ? `${index * 200 + 300}ms` : "0ms" }}
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Step number */}
                <span className="mt-4 font-barlow text-3xl font-bold text-accent">
                  0{step.number}
                </span>

                <h3 className="mt-2 text-lg font-bold uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
