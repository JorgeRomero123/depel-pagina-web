const steps = [
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

export function TurnkeyProcess() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          id="process-heading"
          className="text-sm font-semibold uppercase tracking-wider text-primary"
        >
          Proyectos Llave en Mano
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-dark max-w-md">
          De la ingeniería a la puesta en marcha. Un solo responsable.
        </h2>

        <div className="mt-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-accent/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step number — large and bold */}
                <span className="font-barlow text-7xl font-bold text-accent/30 leading-none">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-bold text-neutral-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
