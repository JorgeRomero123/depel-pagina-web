import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "ingenieria-electrica",
    number: "01",
    title: "Ingenieria e Instalaciones Electricas",
    description:
      "Ingenieria basada en Normas Electricas Mexicanas. Mediciones, calculos, diagramas y reportes en media y baja tension para la industria.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "asesorias-mantenimiento",
    number: "02",
    title: "Asesorias y Mantenimiento",
    description:
      "Asesorias en planeacion, ejecucion y puesta en marcha. Mantenimiento preventivo y correctivo para mantener tu operacion sin interrupciones.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "energias-alternativas",
    number: "03",
    title: "Energias Alternativas",
    description:
      "Proyecto e instalacion de paneles solares y turbinas para generacion de energia. Reduce tu costo energetico con una instalacion profesional.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-neutral-dark"
        >
          Servicios
        </h2>
        <p className="mt-3 text-neutral-muted max-w-lg">
          Soluciones integrales en ingenieria electrica para la industria
          farmaceutica e industrial.
        </p>

        <div className="mt-12 space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Photo */}
              <div className="aspect-[3/2] overflow-hidden bg-neutral-border">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  role="img"
                  aria-label={service.title}
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-barlow font-bold text-neutral-muted tracking-wider">
                  {service.number}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-neutral-dark">
                  {service.title}
                </h3>
                <p className="mt-4 text-neutral-muted leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/servicios#${service.id}`}
                  className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  Conocer mas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
