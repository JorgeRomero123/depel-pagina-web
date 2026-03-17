export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: "Zap" | "Wrench" | "Sun";
}

export const services: Service[] = [
  {
    id: "ingenieria-electrica",
    title: "Ingeniería e Instalaciones Eléctricas",
    shortDescription:
      "Desarrollamos ingeniería basada en las Normas Eléctricas Mexicanas en media y baja tensión.",
    description:
      "Desarrollamos ingeniería basada en las Normas Eléctricas Mexicanas. En media y baja tensión se realizan mediciones, cálculos, diagramas y reportes de acuerdo a las exigencias de la industria.",
    icon: "Zap",
  },
  {
    id: "asesorias-mantenimiento",
    title: "Asesorías y Mantenimiento",
    shortDescription:
      "Asesorías en planeación, ejecución y puesta en marcha. Mantenimiento preventivo y correctivo.",
    description:
      "Las asesorías se brindan en la planeación, ejecución o puesta en marcha de los proyectos. El mantenimiento se puede brindar preventivo y correctivo.",
    icon: "Wrench",
  },
  {
    id: "energias-alternativas",
    title: "Energías Alternativas",
    shortDescription:
      "Proyecto e instalación de paneles solares y turbinas para generación de energía.",
    description:
      "Realizamos el proyecto e instalación de paneles solares, así como de turbinas para generación de energía.",
    icon: "Sun",
  },
];

export const processSteps = [
  {
    number: 1,
    title: "Ingeniería",
    description:
      "Se desarrolla un proyecto con cálculos eléctricos y diagramas en AutoCAD de acuerdo a las necesidades del cliente.",
  },
  {
    number: 2,
    title: "Presupuesto",
    description:
      "Elaboración del catálogo, precios unitarios o a precio alzado conforme a proyecto.",
  },
  {
    number: 3,
    title: "Instalación",
    description:
      "Se ejecuta la instalación con ingenieros supervisores y técnicos conforme a proyecto aprobado.",
  },
  {
    number: 4,
    title: "Puesta en Marcha",
    description:
      "Se realizan pruebas a conductores y equipos de protección, se procede al arranque.",
  },
];
