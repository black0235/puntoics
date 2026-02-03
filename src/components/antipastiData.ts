export interface Antipasto {
  id: number;
  name: string;
  price: number;
  description: string;
  variants?: string[];
  category: "antipasti";
  badges: {
    glutenFree?: boolean;
    lactoseFree?: boolean;
    frozen?: boolean;
    blastChilled?: boolean;
    vegetarian?: boolean;
    spicy?: boolean;
    chefRecommended?: boolean;
  };
}

export const antipastiItems: Antipasto[] = [
  {
    id: 1,
    name: "Selezione di Salumi Misti Nazionali",
    price: 16,
    category: "antipasti",
    description:
      "Serviti con focaccia cotta nei nostri forni a pietra alimentati con buccia di mandorla.",
    variants: [
      "Piccolo x2 €16,00",
      "Medio x4 €22,00",
      "Piccolo x2 senza glutine €17,00",
      "Medio x4 senza glutine €23,00",
      "+ Formaggi €5,00",
    ],
    badges: {
      chefRecommended: true,
    },
  },

  {
    id: 2,
    name: "Burrata Pugliese",
    price: 14,
    category: "antipasti",
    description: "Con cascata di crudo, rucola e pioggia di noci.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      glutenFree: true,
      lactoseFree: false,
    },
  },

  {
    id: 3,
    name: "Alette di Pollo",
    price: 5,
    category: "antipasti",
    description:
      "Alette di pollo fritte, speziate e leggermente piccanti, servite con salsa thai in agrodolce.",
    variants: ["4 pezzi €5,00", "9 pezzi €9,00"],
    badges: {
      spicy: true,
      lactoseFree: true,
    },
  },

  {
    id: 4,
    name: "Arrosticini Abruzzesi",
    price: 1,
    category: "antipasti",
    description:
      "Spiedini di carne ovina, tipico piatto della tradizione abruzzese.",
    badges: {
      glutenFree: true,
      blastChilled: true,
      lactoseFree: true,
    },
  },

  {
    id: 5,
    name: "Croccodè (Ideale per 4 persone)",
    price: 18,
    category: "antipasti",
    description:
      "Alette di pollo speziate, pollo croccante, filetti di pollo panati e anelli di cipolla con salsa sweet chili.",
    badges: {
      frozen: true,
      blastChilled: true,
    },
  },

  {
    id: 6,
    name: "Siamo Fritti",
    price: 6,
    category: "antipasti",
    description:
      "Patatine fritte, twisters, crisscuts, anelli di cipolla e crocchette di patate.",
    variants: ["x2 €6,00", "x4 €10,00"],
    badges: {
      frozen: true,
      blastChilled: true,
      lactoseFree: true,
      spicy: true,
    },
  },

  {
    id: 7,
    name: "Patate al Forno Bacon e Crema di Grana Padano",
    price: 7,
    category: "antipasti",
    description: "Disponibile anche senza lattosio.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      vegetarian: false,
      lactoseFree: false,
    },
  },

  {
    id: 8,
    name: "Patate allo Speck al Forno",
    price: 5,
    category: "antipasti",
    description: "Patate al forno con speck.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      glutenFree: true,
    },
  },

  {
    id: 9,
    name: "Patate Dolci Fritte",
    price: 8,
    category: "antipasti",
    description: "Servite con creme a scelta.",
    variants: [
      "Cheddar e bacon +2€",
      "Crema pistacchio e bacon +2€ (senza lattosio)",
      "Crema di Grana Padano e bacon +2€ (senza lattosio)",
    ],
    badges: {
      chefRecommended: true,
      lactoseFree: true,
    },
  },

  {
    id: 10,
    name: "Patatine Fritte",
    price: 5,
    category: "antipasti",
    description: "Classiche patatine fritte.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      frozen: true,
      glutenFree: true,
    },
  },

  {
    id: 11,
    name: "Patatine Fritte Pulled Pork e Cheddar",
    price: 7,
    category: "antipasti",
    description: "Patatine con pulled pork e cheddar.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      chefRecommended: true,
      frozen: true,
    },
  },

  {
    id: 12,
    name: "Patatine Fritte Cheddar e Bacon",
    price: 7,
    category: "antipasti",
    description: "Patatine con cheddar e bacon.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      frozen: true,
    },
  },

  {
    id: 13,
    name: "Patatine Fritte Pistacchio e Bacon",
    price: 7,
    category: "antipasti",
    description: "Patatine con crema al pistacchio e bacon.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      frozen: true,
    },
  },

  {
    id: 14,
    name: "Patatine Fritte Crema di Grana Padano e Bacon",
    price: 7,
    category: "antipasti",
    description: "Disponibili anche senza lattosio.",
    variants: ["Glutine", "Senza glutine"],
    badges: {
      chefRecommended: true,
      frozen: true,
      lactoseFree: true,
    },
  },
];
