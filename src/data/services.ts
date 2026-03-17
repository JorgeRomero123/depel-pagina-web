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
    title: "Ingenieria e Instalaciones Electricas",
    shortDescription:
      "Desarrollamos ingenieria basada en las Normas Electricas Mexicanas en media y baja tension.",
    description:
      "Desarrollamos ingenieria basada en las Normas Electricas Mexicanas. En media y baja tension se realizan mediciones, calculos, diagramas y reportes de acuerdo a las exigencias de la industria.",
    icon: "Zap",
  },
  {
    id: "asesorias-mantenimiento",
    title: "Asesorias y Mantenimiento",
    shortDescription:
      "Asesorias en planeacion, ejecucion y puesta en marcha. Mantenimiento preventivo y correctivo.",
    description:
      "Las asesorias se brindan en la planeacion, ejecucion o puesta en marcha de los proyectos. El mantenimiento se puede brindar preventivo y correctivo.",
    icon: "Wrench",
  },
  {
    id: "energias-alternativas",
    title: "Energias Alternativas",
    shortDescription:
      "Proyecto e instalacion de paneles solares y turbinas para generacion de energia.",
    description:
      "Realizamos el proyecto e instalacion de paneles solares, asi como de turbinas para generacion de energia.",
    icon: "Sun",
  },
];

export const processSteps = [
  {
    number: 1,
    title: "Ingenieria",
    description:
      "Se desarrolla un proyecto con calculos electricos y diagramas en AutoCAD de acuerdo a las necesidades del cliente.",
  },
  {
    number: 2,
    title: "Presupuesto",
    description:
      "Elaboracion del catalogo, precios unitarios o a precio alzado conforme a proyecto.",
  },
  {
    number: 3,
    title: "Instalacion",
    description:
      "Se ejecuta la instalacion con ingenieros supervisores y tecnicos conforme a proyecto aprobado.",
  },
  {
    number: 4,
    title: "Puesta en Marcha",
    description:
      "Se realizan pruebas a conductores y equipos de proteccion, se procede al arranque.",
  },
];
