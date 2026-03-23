import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/basePath";

const services = [
  {
    id: "ingenieria-electrica",
    number: "01",
    title: "Ingeniería e Instalaciones Eléctricas",
    description:
      "Ingeniería basada en Normas Eléctricas Mexicanas. Mediciones, cálculos, diagramas y reportes en media y baja tensión para la industria.",
    image: "/images/services/ingenieria.jpg",
  },
  {
    id: "asesorias-mantenimiento",
    number: "02",
    title: "Asesorías y Mantenimiento",
    description:
      "Asesorías en planeación, ejecución y puesta en marcha. Mantenimiento preventivo y correctivo para mantener tu operación sin interrupciones.",
    image: "/images/services/mantenimiento.jpg",
  },
  {
    id: "energias-alternativas",
    number: "03",
    title: "Energías Alternativas",
    description:
      "Proyecto e instalación de paneles solares y turbinas para generación de energía. Reduce tu costo energético con una instalación profesional.",
    image: "/images/services/energia.jpg",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="text-4xl lg:text-5xl font-bold text-neutral-dark"
        >
          Servicios
        </h2>
        <p className="mt-3 text-neutral-muted max-w-lg">
          Soluciones integrales en ingeniería eléctrica para la industria
          farmacéutica e industrial.
        </p>

        <div className="mt-14 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Photo — alternates sides */}
              <div
                className={`aspect-[3/2] overflow-hidden bg-neutral-border ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${getImagePath(service.image)}')` }}
                  role="img"
                  aria-label={service.title}
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-sm font-barlow font-bold text-accent tracking-wider">
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
                  Conocer más
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
