export interface Dessert {
  id: number;
  name: string;
  price: number;
  description: string;
  variants?: string[];
  category: string;
  badges: {
    glutenFree?: boolean;
    lactoseFree?: boolean;
    frozen?: boolean;
    blastChilled?: boolean;
  };
}

export const dessertItems: Dessert[] = [
  {
    id: 1,
    name: "Cheesecake Senza Glutine",
    price: 7.0,
    category: "dessert",
    description: "Cheesecake senza glutine, disponibile anche senza lattosio.",
    variants: [
      "Formaggio",
      "Fragola",
      "Frutti di bosco",
      "Pistacchio",
      "Cioccolato",
    ],
    badges: {
      glutenFree: true,
      lactoseFree: false,
      frozen: true,
      blastChilled: false,
    },
  },
  {
    id: 2,
    name: "Panna Cotta Senza Glutine",
    price: 5.0,
    category: "dessert",
    description: "Panna e latte fresco.",
    variants: ["Frutti di bosco", "Caramello", "Pistacchio", "Cioccolato"],
    badges: {
      glutenFree: true,
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 3,
    name: "Cuore Caldo Senza Glutine",
    price: 6.0,
    category: "dessert",
    description: "Cuore caldo al cioccolato con 0.01g di lattosio per 100g.",
    variants: ["Pistacchio", "Cioccolato bianco", "Cioccolato"],
    badges: {
      glutenFree: true,
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 4,
    name: "Tiramisù Senza Glutine e Senza Lattosio",
    price: 7.0,
    category: "dessert",
    description: "Crema al mascarpone e Pan di Spagna inzuppato al caffè.",
    badges: {
      glutenFree: true,
      lactoseFree: true,
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 5,
    name: "Semifreddo alle Mandorle Senza Glutine",
    price: 6.0,
    category: "dessert",
    description:
      "Semifreddo siciliano alle mandorle, disponibile anche senza lattosio.",
    badges: {
      glutenFree: true,
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 6,
    name: "Semifreddo di Pistacchi Senza Glutine",
    price: 6.0,
    category: "dessert",
    description: "Semifreddo ai pistacchi siciliani.",
    badges: {
      glutenFree: true,
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 7,
    name: "Ricotta e Pera",
    price: 6.0,
    category: "dessert",
    description:
      "Monoporzione con biscotti morbidi ripieni di crema alla ricotta e pere.",
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 8,
    name: "Cheesecake",
    price: 6.0,
    category: "dessert",
    description: "Monoporzione di formaggio cremoso su base biscotto.",
    variants: [
      "Formaggio",
      "Fragola",
      "Frutti di bosco",
      "Pistacchio",
      "Cioccolato",
    ],
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 9,
    name: "Cuore Caldo",
    price: 6.0,
    category: "dessert",
    description: "Dolce con cuore caldo fondente.",
    variants: ["Pistacchio", "Cioccolato bianco", "Cioccolato"],
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 10,
    name: "Tiramisù",
    price: 6.0,
    category: "dessert",
    description: "Crema al mascarpone e Pan di Spagna inzuppato al caffè.",
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 11,
    name: "Coppa Tre Cioccolati",
    price: 6.0,
    category: "dessert",
    description: "Crema al cioccolato bianco, fondente e crunch al latte.",
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 12,
    name: "Semifreddo di Pistacchi",
    price: 6.0,
    category: "dessert",
    description: "Semifreddo ai pistacchi siciliani.",
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 13,
    name: "Semifreddo alla Mandorla",
    price: 6.0,
    category: "dessert",
    description: "Semifreddo siciliano alle mandorle.",
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
  {
    id: 14,
    name: "Panna Cotta",
    price: 5.0,
    category: "dessert",
    description: "Panna e latte fresco.",
    variants: ["Frutti di bosco", "Caramello", "Pistacchio", "Cioccolato"],
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },
];
