import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/basePath";
import { SectionLabel } from "@/components/ui/SectionHeading";

const projects = [
  {
    ref: "001",
    title: "Instalación Eléctrica Industrial",
    category: "Media Tensión",
    location: "Jiutepec, Morelos",
    year: "2024",
    capacity: "1250 kVA",
    image: "/images/projects/proyecto-1.jpg",
  },
  {
    ref: "002",
    title: "Subestación Eléctrica",
    category: "Alta Tensión",
    location: "Cuernavaca, Morelos",
    year: "2024",
    capacity: "2500 kVA",
    image: "/images/projects/proyecto-2.jpg",
  },
  {
    ref: "003",
    title: "Paneles Solares Industriales",
    category: "Energía Alternativa",
    location: "Xochitepec, Morelos",
    year: "2023",
    capacity: "480 kWp",
    image: "/images/services/energia.jpg",
  },
  {
    ref: "004",
    title: "Mantenimiento Planta Farmacéutica",
    category: "Mantenimiento",
    location: "Cuautla, Morelos",
    year: "2023",
    capacity: "—",
    image: "/images/projects/proyecto-4.jpg",
  },
];

export function ProjectsShowcase() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="005" label="Proyectos / Index 2022–2024" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h2
            id="projects-heading"
            className="font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5rem)]"
          >
            Trabajo a la Vista.
          </h2>
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-neutral-dark border-b-2 border-neutral-dark pb-1 w-max hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
          >
            Ver Catálogo Completo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Table-style project list */}
        <div className="border-t border-neutral-dark">
          {/* Header — desktop only */}
          <div className="hidden lg:grid grid-cols-[80px_1.2fr_1fr_1fr_100px_140px] gap-6 py-4 border-b border-neutral-border font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-neutral-muted">
            <span>Ref</span>
            <span>Proyecto</span>
            <span>Categoría</span>
            <span>Ubicación</span>
            <span>Año</span>
            <span className="text-right">Capacidad</span>
          </div>

          {projects.map((p) => (
            <Link
              key={p.ref}
              href="/proyectos"
              className="group grid grid-cols-[auto_1fr] lg:grid-cols-[80px_1.2fr_1fr_1fr_100px_140px] gap-4 lg:gap-6 items-center py-6 border-b border-neutral-border hover:bg-neutral-offwhite transition-colors"
            >
              <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] tracking-[0.1em] self-start lg:self-center pt-1 lg:pt-0">
                {p.ref}
              </span>

              <div className="flex items-center gap-4 min-w-0">
                <div
                  className="h-14 w-14 lg:h-16 lg:w-16 shrink-0 bg-cover bg-center bg-neutral-border"
                  style={{
                    backgroundImage: `url('${getImagePath(p.image)}')`,
                  }}
                  role="img"
                  aria-label={p.title}
                />
                <h3 className="font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark text-lg lg:text-xl leading-tight group-hover:text-[var(--color-accent)] transition-colors">
                  {p.title}
                </h3>
              </div>

              <span className="hidden lg:block text-sm text-neutral-muted">
                {p.category}
              </span>
              <span className="hidden lg:block text-sm text-neutral-muted">
                {p.location}
              </span>
              <span className="hidden lg:block font-[family-name:var(--font-mono)] text-sm text-neutral-text">
                {p.year}
              </span>
              <span className="hidden lg:block text-right font-[family-name:var(--font-barlow)] font-bold text-[var(--color-primary)] text-lg">
                {p.capacity}
              </span>

              {/* Mobile meta */}
              <div className="col-span-2 lg:hidden pl-[3.5rem] -mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-neutral-muted">
                <span>{p.category}</span>
                <span>·</span>
                <span>{p.location}</span>
                <span>·</span>
                <span>{p.year}</span>
                <span>·</span>
                <span className="text-[var(--color-primary)] font-semibold">
                  {p.capacity}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
