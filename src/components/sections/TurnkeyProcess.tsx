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
    <section className="py-20 lg:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="process-heading"
          className="text-3xl md:text-4xl font-bold text-neutral-dark"
        >
          Proyectos Llave en Mano
        </h2>
        <p className="mt-3 text-neutral-muted max-w-lg">
          De la ingeniería a la puesta en marcha. Un solo responsable.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-border">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 lg:p-10"
            >
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
  );
}
