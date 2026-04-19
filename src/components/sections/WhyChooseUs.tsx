import { SectionLabel } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Certificación DC3",
    description:
      "Todo nuestro personal cuenta con certificaciones DC3 vigentes. Equipo de seguridad y herramientas de vanguardia.",
  },
  {
    title: "Cumplimiento NOM",
    description:
      "Cada instalación cumple estrictamente con las Normas Oficiales Mexicanas. Sin excepciones.",
  },
  {
    title: "Sector Farmacéutico",
    description:
      "Experiencia directa en plantas farmacéuticas, manufactura e industria donde los estándares son los más altos.",
  },
  {
    title: "Mantenimiento 24/7",
    description:
      "No solo instalamos — mantenemos. Programas preventivos que reducen tiempos de inactividad.",
  },
  {
    title: "Equipo Propio",
    description:
      "Ingenieros supervisores, técnicos certificados y ayudantes. Un equipo comprometido, no subcontratado.",
  },
  {
    title: "Soporte Directo",
    description:
      "Una llamada. Sin call centers, sin tickets. Atención directa cuando la necesita.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="bg-[var(--color-navy-deep)] py-20 lg:py-28 text-white"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="004" label="Por Qué DEPEL" dark align="right" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-end mb-14 lg:mb-16">
          <h2
            id="why-heading"
            className="font-[family-name:var(--font-barlow)] font-black uppercase text-white leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5rem)]"
          >
            Seis Razones.
            <br />
            Cero Excusas.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-sm lg:justify-self-end">
            Más de 25 años respaldando la industria eléctrica en Morelos y
            el centro de México. La confianza se gana cableando bien, no
            con promesas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {reasons.map((reason, i) => (
            <article
              key={reason.title}
              className={`relative p-7 lg:p-9 min-h-[260px] flex flex-col ${
                i % 3 !== 2 ? "lg:border-r lg:border-white/10" : ""
              } ${i < reasons.length - 3 ? "lg:border-b lg:border-white/10" : ""} ${
                i % 2 === 0 ? "md:border-r md:border-white/10" : ""
              } ${i < reasons.length - 2 ? "md:border-b md:border-white/10" : ""} border-b border-white/10 md:border-b-0 last:border-b-0`}
            >
              <div className="flex items-start justify-between">
                <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] text-white/40">
                  /0{i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
                />
              </div>
              <h3 className="mt-10 font-[family-name:var(--font-barlow)] font-black uppercase text-white text-xl lg:text-2xl leading-tight">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
