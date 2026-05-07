import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getImagePath } from "@/lib/basePath";
import { SectionLabel } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de ingeniería eléctrica industrial: instalaciones en media y baja tensión, subestaciones, paneles solares y mantenimiento de plantas.",
};

const projects = [
  {
    title: "Instalación Eléctrica Industrial",
    category: "Media Tensión",
    location: "Jiutepec, Morelos",
    description:
      "Instalación eléctrica completa para planta de manufactura. Sistema de distribución en media tensión con subestación, tableros de distribución y sistema de tierras.",
    image:
      "/images/projects/proyecto-1.jpg",
  },
  {
    title: "Subestación Eléctrica",
    category: "Alta Tensión",
    location: "Cuernavaca, Morelos",
    description:
      "Diseño, construcción e instalación de subestación eléctrica tipo pedestal de 500 KVA para planta farmacéutica. Incluye coordinación de protecciones y puesta en marcha.",
    image:
      "/images/projects/proyecto-2.jpg",
  },
  {
    title: "Paneles Solares Industriales",
    category: "Energía Alternativa",
    location: "Cuautla, Morelos",
    description:
      "Sistema fotovoltaico de 150 kWp para nave industrial con interconexión a CFE. Reducción del 40% en costo energético desde el primer año de operación.",
    image:
      "/images/services/energia.jpg",
  },
  {
    title: "Mantenimiento Planta Farmacéutica",
    category: "Mantenimiento",
    location: "Jiutepec, Morelos",
    description:
      "Programa de mantenimiento preventivo y correctivo para instalaciones eléctricas de planta farmacéutica. Termografía, pruebas de aislamiento y coordinación de protecciones.",
    image:
      "/images/projects/proyecto-4.jpg",
  },
  {
    title: "Tableros de Distribución",
    category: "Baja Tensión",
    location: "Temixco, Morelos",
    description:
      "Diseño, fabricación e instalación de tableros de distribución y control para línea de producción. Integración con sistema SCADA existente.",
    image:
      "/images/projects/proyecto-5.jpg",
  },
  {
    title: "Iluminación Industrial LED",
    category: "Eficiencia Energética",
    location: "Cuernavaca, Morelos",
    description:
      "Sustitución completa de sistema de iluminación a tecnología LED en nave industrial de 5,000 m². Reducción del 60% en consumo de iluminación.",
    image:
      "/images/projects/proyecto-6.jpg",
  },
];

const galleryItems = [
  {
    image: "/images/projects/gallery/tablero-energizado.jpg",
    caption: "Tablero principal energizado",
    detail: "Distribución BT",
  },
  {
    image: "/images/projects/gallery/maniobra-switchgear.jpg",
    caption: "Maniobra en tablero general",
    detail: "EPP eléctrico clase 2",
  },
  {
    image: "/images/projects/gallery/transformador-bushings.jpg",
    caption: "Transformador con bushings H1·H2·H3",
    detail: "Pruebas de relación",
  },
  {
    image: "/images/projects/gallery/charolas-cable.jpg",
    caption: "Sistema de charolas portacable",
    detail: "Distribución vertical",
  },
  {
    image: "/images/projects/gallery/tablero-uma.jpg",
    caption: "Tablero de control UMA",
    detail: "Acero inoxidable",
  },
  {
    image: "/images/projects/gallery/control-cabinets.jpg",
    caption: "Tableros de control de bombas",
    detail: "Sistema de agua helada",
  },
  {
    image: "/images/projects/gallery/pruebas-aislamiento.jpg",
    caption: "Pruebas de aislamiento Megger",
    detail: "Cable de media tensión",
  },
  {
    image: "/images/projects/gallery/sistema-tierras.jpg",
    caption: "Sistema de puesta a tierra",
    detail: "Conexión a barra equipotencial",
  },
  {
    image: "/images/projects/gallery/estacion-contactos.jpg",
    caption: "Estación de contactos de servicio",
    detail: "Categoría 1 · 220 VAC",
  },
  {
    image: "/images/projects/gallery/ccm-baja-tension.jpg",
    caption: "CCM en baja tensión",
    detail: "480 VCA",
  },
  {
    image: "/images/projects/gallery/tendido-cable.jpg",
    caption: "Tendido de cable de potencia",
    detail: "Cuadrilla en obra",
  },
  {
    image: "/images/projects/gallery/switchgear-trays.jpg",
    caption: "Switchgear con charolas perimetrales",
    detail: "Cuarto eléctrico",
  },
  {
    image: "/images/projects/gallery/proceso-vertical.jpg",
    caption: "Equipo de proceso e infraestructura",
    detail: "Planta industrial",
  },
  {
    image: "/images/projects/gallery/tuberia-conduit.jpg",
    caption: "Tubería conduit y soportería",
    detail: "Ruta vertical",
  },
];

export default function ProyectosPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Proyectos
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-dark max-w-3xl">
            Trabajo que habla por sí mismo
          </h1>
          <p className="mt-6 text-lg text-neutral-muted max-w-2xl leading-relaxed">
            Una selección de proyectos que demuestran nuestra experiencia en
            ingeniería eléctrica industrial, energías alternativas y
            mantenimiento.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project) => (
              <article key={project.title}>
                <div
                  className="aspect-[3/2] bg-neutral-dark bg-cover bg-center"
                  style={{ backgroundImage: `url('${getImagePath(project.image)}')` }}
                  role="img"
                  aria-label={project.title}
                />
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-neutral-muted font-semibold">
                    <span>{project.category}</span>
                    <span className="text-neutral-border">|</span>
                    <span>{project.location}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-neutral-dark">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — documentación de obra */}
      <section
        className="py-20 lg:py-28 border-t border-neutral-border"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="002" label="Galería / Documentación de Obra" />

          <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <h2
              id="gallery-heading"
              className="font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5vw,4.5rem)] max-w-3xl"
            >
              Más obra.
              <br />
              Sin filtros.
            </h2>
            <p className="text-neutral-muted leading-relaxed max-w-sm font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em]">
              Tablero · Transformador · Charola · Tierra · Cuadrilla
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {galleryItems.map((item, i) => (
              <li
                key={item.image}
                className="group relative overflow-hidden bg-neutral-border"
              >
                <div className="relative aspect-[4/3]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: `url('${getImagePath(item.image)}')`,
                    }}
                    role="img"
                    aria-label={item.caption}
                  />
                  {/* Bottom shade for caption legibility on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-navy-deep)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Index ref top-left */}
                  <span className="absolute top-3 left-3 bg-[var(--color-navy-deep)] text-white font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] px-2.5 py-1">
                    G.{String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Caption — appears on hover */}
                  <div className="absolute inset-x-4 bottom-3 text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-[family-name:var(--font-barlow)] font-bold uppercase text-base leading-tight">
                      {item.caption}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/70">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-neutral-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">
              ¿Tiene un proyecto similar?
            </h2>
            <p className="mt-4 text-neutral-muted leading-relaxed">
              Platiquemos sobre sus necesidades. Evaluación y cotización sin
              compromiso.
            </p>
            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
