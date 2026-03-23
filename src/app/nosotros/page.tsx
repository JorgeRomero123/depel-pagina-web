import type { Metadata } from "next";
import { Shield, Award, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Más de 15 años de experiencia en ingeniería eléctrica industrial. Conozca nuestra misión, visión y valores. Jiutepec, Morelos, México.",
};

const values = [
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Cada actividad se realiza con los más altos estándares de seguridad eléctrica. Certificaciones DC3 vigentes en todo momento.",
  },
  {
    icon: Target,
    title: "Precisión",
    description:
      "Conocimientos profesionales, experiencia y objetividad para lograr funcionalidad en cada trabajo terminado.",
  },
  {
    icon: Award,
    title: "Confiabilidad",
    description:
      "En cada proyecto buscamos ser los proveedores confiables. Honestidad y transparencia con nuestros clientes.",
  },
  {
    icon: Users,
    title: "Compromiso",
    description:
      "Un equipo donde existe el apoyo constante y el compromiso de lograr un mismo resultado. Su proyecto es nuestro proyecto.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nosotros
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-dark max-w-3xl">
            La importancia de la seguridad eléctrica en tus procesos productivos
          </h1>
          <p className="mt-6 text-lg text-neutral-muted max-w-2xl leading-relaxed">
            Somos una empresa de ingeniería eléctrica industrial con sede en
            Jiutepec, Morelos. Desde hace más de 15 años desarrollamos y
            ejecutamos proyectos confiables para la industria farmacéutica,
            manufacturera e industrial del centro de México.
          </p>
        </div>
      </section>

      {/* Photo band */}
      <section className="w-full">
        <div
          className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center bg-neutral-dark"
          style={{
            backgroundImage:
              "url('/images/about/industrial-plant.jpg')",
          }}
          role="img"
          aria-label="Equipo de trabajo DEPEL en campo"
        />
      </section>

      {/* Misión y Visión */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                Nuestra Visión
              </h2>
              <p className="mt-4 text-neutral-muted leading-relaxed">
                Desarrollar y ejecutar proyectos confiables a las expectativas
                del cliente, cumpliendo con las normas eléctricas establecidas y
                con los más altos niveles de seguridad y control ambiental.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                Nuestra Misión
              </h2>
              <p className="mt-4 text-neutral-muted leading-relaxed">
                Ser la compañía líder en desarrollo y ejecución de proyectos en
                ingeniería eléctrica, que apoyada en la excelencia de su
                personal, satisfaga los requerimientos del cliente con calidad,
                servicio, innovación y tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-28 bg-neutral-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">
            Valores Fundamentales
          </h2>
          <p className="mt-3 text-neutral-muted max-w-lg">
            Los principios que guían cada proyecto y cada decisión.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title}>
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-base font-bold text-neutral-dark">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Numbers — simple, no animation */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <p className="font-barlow text-5xl font-bold text-primary">15+</p>
              <p className="mt-2 text-sm text-neutral-muted uppercase tracking-wider font-medium">
                Años de experiencia
              </p>
            </div>
            <div>
              <p className="font-barlow text-5xl font-bold text-primary">200+</p>
              <p className="mt-2 text-sm text-neutral-muted uppercase tracking-wider font-medium">
                Proyectos completados
              </p>
            </div>
            <div>
              <p className="font-barlow text-5xl font-bold text-primary">50+</p>
              <p className="mt-2 text-sm text-neutral-muted uppercase tracking-wider font-medium">
                Clientes industriales
              </p>
            </div>
            <div>
              <p className="font-barlow text-5xl font-bold text-primary">100%</p>
              <p className="mt-2 text-sm text-neutral-muted uppercase tracking-wider font-medium">
                Cumplimiento NOM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
