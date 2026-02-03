export interface Burger {
  id: number;
  name: string;
  price: number;
  description: string;
  variants?: string[];
  category: "burger";
  badges: {
    glutenFree?: boolean;
    lactoseFree?: boolean;
    frozen?: boolean;
    blastChilled?: boolean;
    spicy?: boolean;
    chefRecommended?: boolean;
  };
}

export const burgerItems: Burger[] = [
  {
    id: 1,
    name: "L’1",
    price: 13,
    category: "burger",
    description:
      "Pulled pork BBQ, hamburger di manzo, rucola, salsa cheddar e patate al forno. Servito senza contorno.",
    variants: ["Impasto Punto ICS €13,00", "Impasto senza glutine €15,00"],
    badges: {
      chefRecommended: true,
    },
  },

  {
    id: 2,
    name: "IL 2",
    price: 13,
    category: "burger",
    description:
      "Hamburger di manzo panato corn flakes, cipolla caramellata, peperoni, provola, valeriana e maionese alla paprika dolce.",
    variants: ["Impasto Punto ICS €13,00", "Impasto senza glutine €15,00"],
    badges: {
      chefRecommended: true,
    },
  },

  {
    id: 3,
    name: "IL 3",
    price: 10,
    category: "burger",
    description: "Hamburger di pollo, lattuga iceberg, pomodoro e maionese.",
    variants: ["Impasto Punto ICS €10,00", "Impasto senza glutine €12,00"],
    badges: {},
  },

  {
    id: 4,
    name: "IL 4",
    price: 13,
    category: "burger",
    description:
      "Hamburger di pollo panato, scamorza affumicata, rucola e salsa nduja.",
    variants: ["Impasto Punto ICS €13,00", "Impasto senza glutine €15,00"],
    badges: {
      chefRecommended: true,
      spicy: true,
    },
  },

  {
    id: 5,
    name: "IL 5",
    price: 13,
    category: "burger",
    description:
      "Hamburger di manzo, scamorza affumicata, pomodoro, lattuga e salsa BBQ al Jack Daniel's.",
    variants: ["Impasto Punto ICS €13,00", "Impasto senza glutine €15,00"],
    badges: {
      chefRecommended: true,
      spicy: true,
    },
  },

  {
    id: 6,
    name: "IL 6",
    price: 10,
    category: "burger",
    description:
      "Hamburger di manzo, cheddar, lattuga iceberg, pomodoro e cipolla caramellata.",
    variants: ["Impasto Punto ICS €10,00", "Impasto senza glutine €12,00"],
    badges: {},
  },

  {
    id: 7,
    name: "IL 7",
    price: 9,
    category: "burger",
    description:
      "Petto di pollo, lattuga iceberg, formaggio fuso, funghi trifolati, pomodoro e salsa BBQ.",
    variants: ["Impasto Punto ICS €9,00", "Impasto senza glutine €11,00"],
    badges: {},
  },

  {
    id: 8,
    name: "L’8",
    price: 13,
    category: "burger",
    description:
      "Hamburger di manzo, burrata pugliese, cialda di grana padano, pesto alla genovese e pomodorini semi dry. Contorno di patate al forno con crema di grana padano.",
    variants: ["Impasto Punto ICS €13,00", "Impasto senza glutine €15,00"],
    badges: {},
  },

  {
    id: 9,
    name: "IL 13",
    price: 10,
    category: "burger",
    description:
      "Pollo cornflakes, cipolla caramellata, lattuga iceberg, bacon croccante e maionese.",
    variants: ["Impasto Punto ICS €10,00", "Impasto senza glutine €12,00"],
    badges: {},
  },

  {
    id: 10,
    name: "IL 13+1 NUOVO",
    price: 11,
    category: "burger",
    description:
      "Burger di Angus 200gr affogato in crema di pistacchio (Punto ICS), cheddar, bacon croccante, uovo fritto e lattuga iceberg.",
    variants: ["Impasto Punto ICS €11,00", "Impasto senza glutine €13,00"],
    badges: {
      chefRecommended: true,
    },
  },
];
