import { SectionLabel } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Ingeniería",
    description:
      "Proyecto con cálculos eléctricos y diagramas en AutoCAD conforme a las necesidades del cliente.",
    next: "Presupuesto",
  },
  {
    number: "02",
    title: "Presupuesto",
    description:
      "Elaboración del catálogo, precios unitarios o a precio alzado conforme a proyecto.",
    next: "Instalación",
  },
  {
    number: "03",
    title: "Instalación",
    description:
      "Ejecución con ingenieros supervisores y técnicos conforme a proyecto aprobado.",
    next: "Puesta en Marcha",
  },
  {
    number: "04",
    title: "Puesta en Marcha",
    description:
      "Pruebas a conductores y equipos de protección. Arranque supervisado con reporte final.",
    next: null,
  },
];

export function TurnkeyProcess() {
  return (
    <section
      className="bg-[#F4F1EA] py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="003" label="Proceso / Turnkey" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-end mb-14 lg:mb-16">
          <h2
            id="process-heading"
            className="font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5rem)]"
          >
            Llave En Mano,
            <br />
            Sin Sorpresas.
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase text-neutral-muted leading-relaxed max-w-sm lg:justify-self-end">
            Un flujo de cuatro etapas,
            <br />
            documentado y auditable de
            <br />
            principio a fin.
          </p>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-border/60 divide-y sm:divide-y-0 sm:divide-x divide-neutral-border/60">
          {steps.map((step) => (
            <article
              key={step.number}
              className="p-7 lg:p-8 flex flex-col min-h-[280px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-neutral-muted">
                  Etapa
                </span>
                <span className="font-[family-name:var(--font-barlow)] font-black text-[var(--color-accent)] text-5xl lg:text-6xl leading-none">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark text-xl lg:text-2xl leading-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-muted leading-relaxed flex-1">
                {step.description}
              </p>

              {step.next && (
                <div className="mt-6 pt-4 border-t border-neutral-border/60 flex items-center justify-between gap-3 font-[family-name:var(--font-mono)] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-muted">
                  <span>→ Siguiente</span>
                  <span className="text-neutral-text text-right">
                    {step.next}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
