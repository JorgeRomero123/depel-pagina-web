import { getImagePath } from "@/lib/basePath";
import { SectionLabel } from "@/components/ui/SectionHeading";

const services = [
  {
    id: "ingenieria-electrica",
    number: "01",
    fig: "FIG. 01",
    title: "Ingeniería e Instalaciones Eléctricas",
    description:
      "Desarrollamos ingeniería basada en las Normas Eléctricas Mexicanas en media y baja tensión.",
    image: "/images/services/ingenieria.jpg",
    tags: ["NOM-001-SEDE", "NOM-029-STPS"],
  },
  {
    id: "asesorias-mantenimiento",
    number: "02",
    fig: "FIG. 02",
    title: "Asesorías y Mantenimiento",
    description:
      "Asesorías en planeación, ejecución y puesta en marcha. Mantenimiento preventivo y correctivo.",
    image: "/images/services/mantenimiento.jpg",
    tags: ["NOM-029-STPS", "DC3 vigente"],
  },
  {
    id: "energias-alternativas",
    number: "03",
    fig: "FIG. 03",
    title: "Energías Alternativas",
    description:
      "Proyecto e instalación de paneles solares y turbinas para generación de energía.",
    image: "/images/services/energia.jpg",
    tags: ["NOM-001-SEDE", "LAERFTE"],
  },
];

const specs = [
  { label: "MÍN. VOLTAJE", value: "110 V" },
  { label: "MÁX. TENSIÓN", value: "34.5 KV" },
  { label: "COBERTURA", value: "CENTRO MX" },
];

export function Services() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="002" label="Servicios / Scope" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16">
          {/* Left column — massive heading + specs table */}
          <div>
            <h2
              id="services-heading"
              className="font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5vw,4.5rem)]"
            >
              Tres Líneas.
              <br />
              Un Solo
              <br />
              Estándar.
            </h2>
            <p className="mt-6 text-neutral-muted leading-relaxed max-w-sm">
              Desde la memoria de cálculo hasta la puesta en marcha. Lo
              hacemos nosotros, con ingenieros y técnicos propios.
            </p>

            {/* Specs table */}
            <dl className="mt-12 divide-y divide-neutral-border border-t border-neutral-border">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between py-3 font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] uppercase"
                >
                  <dt className="text-neutral-muted">{spec.label}</dt>
                  <dd className="text-neutral-dark font-medium">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column — service list */}
          <div>
            <ul className="divide-y divide-neutral-border border-t border-neutral-border">
              {services.map((service) => (
                <li
                  key={service.id}
                  id={service.id}
                  className="py-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start"
                >
                  <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] tracking-[0.12em]">
                    /{service.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-barlow)] font-black uppercase text-[clamp(1.5rem,2.2vw,2.25rem)] leading-[1.05] text-neutral-dark">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-neutral-muted leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center border border-neutral-border px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-neutral-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] w-full md:w-[260px] lg:w-[320px] overflow-hidden bg-neutral-border">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${getImagePath(service.image)}')`,
                      }}
                      role="img"
                      aria-label={service.title}
                    />
                    <span className="absolute top-3 left-3 bg-[var(--color-navy-deep)] text-white font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] px-2.5 py-1">
                      {service.fig}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
