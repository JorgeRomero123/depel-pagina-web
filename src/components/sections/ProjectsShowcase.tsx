import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Instalación Eléctrica Industrial",
    category: "Media Tensión",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Subestación Eléctrica",
    category: "Alta Tensión",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Paneles Solares Industriales",
    category: "Energía Alternativa",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mantenimiento Planta Farmacéutica",
    category: "Mantenimiento",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
  },
];

export function ProjectsShowcase() {
  return (
    <section
      className="py-20 lg:py-28 bg-neutral-offwhite"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold text-neutral-dark"
            >
              Proyectos
            </h2>
            <p className="mt-3 text-neutral-muted">
              Trabajo que habla por sí mismo.
            </p>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors shrink-0"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[3/2] overflow-hidden bg-neutral-dark"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
