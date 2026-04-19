import { SectionLabel } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "DEPEL demostró profesionalismo y compromiso en la instalación eléctrica de nuestra planta. Cumplieron con los tiempos y las normas de seguridad.",
    name: "Ing. Carlos Martínez",
    role: "Gerente de Planta · Farmacéutica del Centro",
  },
  {
    quote:
      "El mantenimiento preventivo que nos brinda DEPEL ha reducido significativamente nuestros tiempos de inactividad. Un equipo altamente confiable.",
    name: "Lic. María Fernández",
    role: "Directora de Operaciones · Industrias del Sur",
  },
  {
    quote:
      "La instalación de paneles solares fue impecable. Hemos reducido nuestro costo energético considerablemente gracias a su asesoría.",
    name: "Ing. Roberto Sánchez",
    role: "Director General · Manufacturas Morelos",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-[#F4F1EA] py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="006" label="Clientes / Testimonios" align="right" />

        <h2
          id="testimonials-heading"
          className="mt-10 mb-14 lg:mb-16 font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5rem)]"
        >
          Lo Que Dicen
          <br />
          Los <span className="text-[var(--color-primary)]">Gerentes de Planta.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-border/70 divide-y md:divide-y-0 md:divide-x divide-neutral-border/70">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="p-8 lg:p-10 flex flex-col min-h-[360px]"
            >
              <span
                aria-hidden="true"
                className="font-[family-name:var(--font-barlow)] font-black text-[var(--color-accent)] text-5xl leading-none select-none"
              >
                &rdquo;
              </span>
              <blockquote className="mt-6 text-neutral-dark text-lg leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-neutral-border/70">
                <p className="font-[family-name:var(--font-barlow)] font-black uppercase text-neutral-dark text-base tracking-wide">
                  {t.name}
                </p>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-neutral-muted">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
