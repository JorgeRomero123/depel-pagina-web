const reasons = [
  {
    title: "Certificación DC3",
    description:
      "Todo nuestro personal cuenta con certificaciones DC3 vigentes. Equipo de seguridad y herramientas de vanguardia en cada proyecto.",
  },
  {
    title: "Cumplimiento NOM",
    description:
      "Cada instalación cumple estrictamente con las Normas Oficiales Mexicanas. Sin excepciones.",
  },
  {
    title: "Sector Farmacéutico e Industrial",
    description:
      "Experiencia directa en plantas farmacéuticas, manufactura e industria donde los estándares son los más altos.",
  },
  {
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "No solo instalamos — mantenemos. Programas de mantenimiento que reducen tiempos de inactividad.",
  },
  {
    title: "Equipo Técnico Propio",
    description:
      "Ingenieros supervisores, técnicos certificados y ayudantes. Un equipo comprometido, no subcontratado.",
  },
  {
    title: "Soporte Directo",
    description:
      "Una llamada al (777) 218 7383. Sin call centers, sin tickets. Atención directa cuando la necesitas.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-28 bg-neutral-offwhite"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column — heading */}
          <div className="lg:col-span-1">
            <h2
              id="why-heading"
              className="text-4xl lg:text-5xl font-bold text-neutral-dark"
            >
              Por qué trabajar con DEPEL
            </h2>
            <p className="mt-4 text-neutral-muted leading-relaxed">
              Más de 15 años respaldando la industria eléctrica en Morelos y
              el centro de México.
            </p>
          </div>

          {/* Right column — reasons grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <h3 className="text-base font-bold text-neutral-dark">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
