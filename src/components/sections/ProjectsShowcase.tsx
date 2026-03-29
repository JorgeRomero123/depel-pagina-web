import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/basePath";

const projects = [
  {
    title: "Instalación Eléctrica Industrial",
    category: "Media Tensión",
    stat: "500 KVA",
    image: "/images/projects/proyecto-1.jpg",
    featured: true,
  },
  {
    title: "Subestación Eléctrica",
    category: "Alta Tensión",
    stat: "Planta farmacéutica",
    image: "/images/projects/proyecto-2.jpg",
    featured: false,
  },
  {
    title: "Paneles Solares Industriales",
    category: "Energía Alternativa",
    stat: "150 kWp",
    image: "/images/services/energia.jpg",
    featured: false,
  },
  {
    title: "Mantenimiento Planta Farmacéutica",
    category: "Mantenimiento",
    stat: "40% ahorro",
    image: "/images/projects/proyecto-4.jpg",
    featured: false,
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
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Proyectos
            </p>
            <h2
              id="projects-heading"
              className="mt-1 text-2xl md:text-3xl font-bold text-neutral-dark"
            >
              Trabajo que habla por sí mismo
            </h2>
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
              className="group relative aspect-square overflow-hidden bg-neutral-dark"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${getImagePath(project.image)}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {project.title}
                </h3>
                <span className="inline-block mt-1 text-xs font-barlow font-bold text-white/60">
                  {project.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
