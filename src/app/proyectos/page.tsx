import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Subestación Eléctrica",
    category: "Alta Tensión",
    location: "Cuernavaca, Morelos",
    description:
      "Diseño, construcción e instalación de subestación eléctrica tipo pedestal de 500 KVA para planta farmacéutica. Incluye coordinación de protecciones y puesta en marcha.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Paneles Solares Industriales",
    category: "Energía Alternativa",
    location: "Cuautla, Morelos",
    description:
      "Sistema fotovoltaico de 150 kWp para nave industrial con interconexión a CFE. Reducción del 40% en costo energético desde el primer año de operación.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mantenimiento Planta Farmacéutica",
    category: "Mantenimiento",
    location: "Jiutepec, Morelos",
    description:
      "Programa de mantenimiento preventivo y correctivo para instalaciones eléctricas de planta farmacéutica. Termografía, pruebas de aislamiento y coordinación de protecciones.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tableros de Distribución",
    category: "Baja Tensión",
    location: "Temixco, Morelos",
    description:
      "Diseño, fabricación e instalación de tableros de distribución y control para línea de producción. Integración con sistema SCADA existente.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Iluminación Industrial LED",
    category: "Eficiencia Energética",
    location: "Cuernavaca, Morelos",
    description:
      "Sustitución completa de sistema de iluminación a tecnología LED en nave industrial de 5,000 m². Reducción del 60% en consumo de iluminación.",
    image:
      "https://images.unsplash.com/photo-1565608087341-404b25492fee?auto=format&fit=crop&w=800&q=80",
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
                  style={{ backgroundImage: `url('${project.image}')` }}
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
