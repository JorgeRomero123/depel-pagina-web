export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "DEPEL demostró profesionalismo y compromiso en la instalación eléctrica de nuestra planta. Cumplieron con los tiempos y las normas de seguridad.",
    name: "Ing. Carlos Martínez",
    title: "Gerente de Planta",
    company: "Farmacéutica del Centro",
  },
  {
    id: 2,
    quote:
      "El mantenimiento preventivo que nos brinda DEPEL ha reducido significativamente nuestros tiempos de inactividad. Un equipo altamente confiable.",
    name: "Lic. María Fernández",
    title: "Directora de Operaciones",
    company: "Industrias del Sur",
  },
  {
    id: 3,
    quote:
      "La instalación de paneles solares fue impecable. Hemos reducido nuestro costo energético considerablemente gracias a su asesoría.",
    name: "Ing. Roberto Sánchez",
    title: "Director General",
    company: "Manufacturas Morelos",
  },
];
