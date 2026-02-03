export interface GrillItem {
  id: number;
  name: string;
  price: number;
  description: string;
  variants?: string[];
  category: "grill";
  badges: {
    glutenFree?: boolean;
    lactoseFree?: boolean;
    chefRecommended?: boolean;
  };
}

export const grillItems: GrillItem[] = [
  {
    id: 1,
    name: "Filetto di Manzo 300gr",
    price: 24,
    category: "grill",
    description:
      "Tagliata di filetto di manzo alla griglia con polvere di bacon, servita con patate al forno.",
    variants: ["Glutine €24,00", "Senza glutine €24,00"],
    badges: {},
  },

  {
    id: 2,
    name: "Ribs BBQ",
    price: 20,
    category: "grill",
    description:
      "Costine di maiale affumicate 6/8 ore con legno di quercia, condite con salsa BBQ e servite con patate allo speck.",
    variants: ["Glutine €20,00", "Senza glutine €20,00"],
    badges: {
      glutenFree: true,
      lactoseFree: true,
      chefRecommended: true,
    },
  },

  {
    id: 3,
    name: "Tagliata di Pollo 300gr",
    price: 16,
    category: "grill",
    description:
      "Tagliata di pollo cotta a bassa temperatura, servita con rucola, grana e patate al forno.",
    variants: ["Glutine €16,00", "Senza glutine €16,00"],
    badges: {
      glutenFree: true,
      lactoseFree: true,
    },
  },

  {
    id: 4,
    name: "Involtini al Pistacchio 300gr",
    price: 16,
    category: "grill",
    description:
      "Involtini ripieni con pesto di pistacchio e Philadelphia. Contorno a scelta: insalata mista, insalata verde, patate allo speck o verdure grigliate.",
    variants: ["Glutine €16,00", "Senza glutine €16,00"],
    badges: {
      glutenFree: true,
      chefRecommended: true,
    },
  },

  {
    id: 5,
    name: "Piatto ICS",
    price: 22,
    category: "grill",
    description:
      "Bistecca di picanha di manzo con stick di formaggio e jalapeño fritti e misticanza.",
    variants: ["Glutine €22,00", "Senza glutine €22,00"],
    badges: {
      glutenFree: true,
    },
  },

  {
    id: 6,
    name: "Tagliata di Manzo KM.0",
    price: 20,
    category: "grill",
    description: "Carne di manzo servita con patate al forno al rosmarino.",
    variants: ["Glutine €20,00", "Senza glutine €20,00"],
    badges: {
      glutenFree: true,
    },
  },

  {
    id: 7,
    name: "Arrosto Punto ICS",
    price: 22,
    category: "grill",
    description:
      "Servito su piatto di ghisa: salsiccia sale e pepe, polpetta al limone, fettina ai ferri, puntina di maiale e arrosticini abruzzesi. Contorno a scelta.",
    variants: ["Glutine €22,00", "Senza glutine €22,00"],
    badges: {
      glutenFree: true,
      lactoseFree: true,
    },
  },
];
