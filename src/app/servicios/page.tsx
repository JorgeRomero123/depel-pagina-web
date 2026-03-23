import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getImagePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Ingeniería e instalaciones eléctricas, asesorías, mantenimiento preventivo y correctivo, energías alternativas. Proyectos llave en mano.",
};

const services = [
  {
    id: "ingenieria-electrica",
    number: "01",
    title: "Ingeniería e Instalaciones Eléctricas",
    description:
      "Desarrollamos ingeniería basada en las Normas Eléctricas Mexicanas. En media y baja tensión se realizan mediciones, cálculos, diagramas y reportes de acuerdo a las exigencias de la industria.",
    details: [
      "Proyectos eléctricos en media y baja tensión",
      "Diagramas unifilares y de control en AutoCAD",
      "Cálculos de corto circuito y coordinación de protecciones",
      "Estudios de calidad de energía",
      "Instalación de subestaciones eléctricas",
      "Tableros de distribución y control",
    ],
    image:
      "/images/services/ingenieria.jpg",
  },
  {
    id: "asesorias-mantenimiento",
    number: "02",
    title: "Asesorías y Mantenimiento",
    description:
      "Las asesorías se brindan en la planeación, ejecución o puesta en marcha de los proyectos. El mantenimiento se puede brindar preventivo y correctivo para mantener tu operación sin interrupciones.",
    details: [
      "Asesoría en planeación y ejecución de proyectos",
      "Mantenimiento preventivo programado",
      "Mantenimiento correctivo de emergencia",
      "Termografía de instalaciones eléctricas",
      "Pruebas de aislamiento y resistencia",
      "Diagnóstico y solución de fallas eléctricas",
    ],
    image:
      "/images/services/mantenimiento.jpg",
  },
  {
    id: "energias-alternativas",
    number: "03",
    title: "Energías Alternativas",
    description:
      "Realizamos el proyecto e instalación de paneles solares, así como de turbinas para generación de energía. Reduce tu costo energético con una instalación profesional.",
    details: [
      "Diseño e instalación de sistemas fotovoltaicos",
      "Interconexión con CFE",
      "Turbinas para generación de energía",
      "Estudios de viabilidad energética",
      "Monitoreo y mantenimiento de sistemas solares",
      "Asesoría en retorno de inversión",
    ],
    image:
      "/images/services/energia.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Ingeniería",
    description:
      "Proyecto con cálculos eléctricos y diagramas en AutoCAD. A la medida de tus necesidades.",
  },
  {
    number: "02",
    title: "Presupuesto",
    description:
      "Catálogo de conceptos con precios unitarios o precio alzado conforme a proyecto.",
  },
  {
    number: "03",
    title: "Instalación",
    description:
      "Ejecución con ingenieros supervisores y técnicos certificados conforme a proyecto aprobado.",
  },
  {
    number: "04",
    title: "Puesta en Marcha",
    description:
      "Pruebas a conductores y equipos de protección. Arranque supervisado de los equipos.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Servicios
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-dark max-w-3xl">
            Soluciones integrales en ingeniería eléctrica
          </h1>
          <p className="mt-6 text-lg text-neutral-muted max-w-2xl leading-relaxed">
            Desde la ingeniería hasta la puesta en marcha. Cada servicio
            respaldado por certificación DC3 y cumplimiento estricto de las
            Normas Oficiales Mexicanas.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Photo */}
                  <div
                    className={`aspect-[4/3] bg-neutral-dark bg-cover bg-center ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                    style={{ backgroundImage: `url('${getImagePath(service.image)}')` }}
                    role="img"
                    aria-label={service.title}
                  />

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-sm font-barlow font-bold text-neutral-muted tracking-wider">
                      {service.number}
                    </span>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-dark">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-neutral-muted leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-neutral-dark"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-neutral-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">
            Proyectos Llave en Mano
          </h2>
          <p className="mt-3 text-neutral-muted max-w-lg">
            De la ingeniería a la puesta en marcha. Un solo responsable.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-border">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-neutral-offwhite p-8 lg:p-10">
                <span className="font-barlow text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-neutral-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">
              ¿Necesita alguno de estos servicios?
            </h2>
            <p className="mt-4 text-neutral-muted leading-relaxed">
              Contáctenos para una evaluación sin compromiso. Le respondemos
              en menos de 24 horas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+527773198115"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-border px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-neutral-offwhite"
              >
                (777) 319 8115
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
