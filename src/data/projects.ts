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
    title: "Instalación Eléctrica Industrial",
    category: "Media Tensión",
    location: "Morelos, México",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: "proyecto-2",
    title: "Subestación Eléctrica",
    category: "Alta Tensión",
    location: "Morelos, México",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: "proyecto-3",
    title: "Paneles Solares Industriales",
    category: "Energía Alternativa",
    location: "Morelos, México",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: "proyecto-4",
    title: "Mantenimiento Planta Farmacéutica",
    category: "Mantenimiento",
    location: "Morelos, México",
    image: "/images/projects/project-4.jpg",
  },
];
