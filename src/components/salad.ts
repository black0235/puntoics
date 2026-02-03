export interface SaladItem {
  id: number;
  name: string;
  description: string;
  prices: {
    gluten: number;
    glutenFree: number;
  };
  badges: {
    chefRecommended?: boolean;
  };
}

export const saladItems: SaladItem[] = [
  {
    id: 1,
    name: "La Carnivora",
    description:
      "Tagliata di manzo, cetriolo, valeriana, radicchio, condita con salmoriglio alla catanese.",
    prices: {
      gluten: 15,
      glutenFree: 16,
    },
    badges: {
      chefRecommended: true,
    },
  },

  {
    id: 2,
    name: "La Croccante",
    description:
      "Rucola, verdure grigliate (zucchine e peperoni), pomodoro, funghi champignon trifolati e pollo croccante speziato.",
    prices: {
      gluten: 12,
      glutenFree: 13,
    },
    badges: {},
  },

  {
    id: 3,
    name: "La Bufala",
    description:
      "Rucola, bresaola punta d'anca, grana, olive nere, bocconcino di bufala campana DOP 125gr e spicchi di lime messicano.",
    prices: {
      gluten: 14,
      glutenFree: 15,
    },
    badges: {},
  },

  {
    id: 4,
    name: "La Burratina",
    description:
      "Valeriana, ciliegino, cipolla rossa di Calabria, burrata pugliese, salmone affumicato con semi di sesamo.",
    prices: {
      gluten: 15,
      glutenFree: 16,
    },
    badges: {},
  },
];
