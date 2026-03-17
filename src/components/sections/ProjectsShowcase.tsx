"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

const placeholderImages = [
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
];

export function ProjectsShowcase() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="py-20 lg:py-28 bg-neutral-offwhite"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-heading"
          title="Nuestros Proyectos"
          subtitle="Trabajo que habla por si mismo"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer",
                "opacity-0 translate-y-6 transition-all duration-500",
                isInView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-primary-dark bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${placeholderImages[index]}')`,
                }}
              />

              {/* Always-visible gradient + info at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-neutral-dark/20 to-transparent flex items-end p-6">
                <div className="transition-transform duration-300 group-hover:translate-y-0 translate-y-1">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-white font-semibold hover:bg-primary-light transition-colors"
          >
            Ver Todos los Proyectos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
