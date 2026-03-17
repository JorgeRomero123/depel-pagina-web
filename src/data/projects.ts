export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "proyecto-1",
    title: "Instalacion Electrica Industrial",
    category: "Media Tension",
    location: "Morelos, Mexico",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: "proyecto-2",
    title: "Subestacion Electrica",
    category: "Alta Tension",
    location: "Morelos, Mexico",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: "proyecto-3",
    title: "Paneles Solares Industriales",
    category: "Energia Alternativa",
    location: "Morelos, Mexico",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: "proyecto-4",
    title: "Mantenimiento Planta Farmaceutica",
    category: "Mantenimiento",
    location: "Morelos, Mexico",
    image: "/images/projects/project-4.jpg",
  },
];
