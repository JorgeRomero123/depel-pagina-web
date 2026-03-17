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
      "DEPEL demostro profesionalismo y compromiso en la instalacion electrica de nuestra planta. Cumplieron con los tiempos y las normas de seguridad.",
    name: "Ing. Carlos Martinez",
    title: "Gerente de Planta",
    company: "Farmaceutica del Centro",
  },
  {
    id: 2,
    quote:
      "El mantenimiento preventivo que nos brinda DEPEL ha reducido significativamente nuestros tiempos de inactividad. Un equipo altamente confiable.",
    name: "Lic. Maria Fernandez",
    title: "Directora de Operaciones",
    company: "Industrias del Sur",
  },
  {
    id: 3,
    quote:
      "La instalacion de paneles solares fue impecable. Hemos reducido nuestro costo energetico considerablemente gracias a su asesoria.",
    name: "Ing. Roberto Sanchez",
    title: "Director General",
    company: "Manufacturas Morelos",
  },
];
