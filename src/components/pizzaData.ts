// pizzaData.ts

export interface Dough {
  name: string;
  price: number;
}

export interface Pizza {
  id: number;
  name: string;
  description: string;
  glutenFree: boolean;
  allergens: string[];
  recommended?: boolean;
  doughs: Dough[];
  category: string;
  spicy?: boolean;
}

// Tutte le pizze
export const pizzaItems: Pizza[] = [
  {
    id: 1,
    name: "La Spazio “Sbagliata”",
    category: "home-made",
    description:
      "Pesto di pistacchio (homemade), bocconcino fior di latte, grana infornata, funghi porcini, speck infornato, burrata 250gr (a crudo), olio evo basilico",
    glutenFree: true,
    allergens: ["Latte"],
    recommended: true,
    doughs: [
      { name: "Impasto PUNTO ICS", price: 17 },
      { name: "Impasto SENZA GLUTINE", price: 19 },
      { name: "Impasto 7 CEREALI", price: 19 },
      { name: "Impasto KAMUT", price: 19 },
    ],
  },
  {
    id: 2,
    name: "Radice Quadrata",
    category: "home-made",
    description:
      "Bocconcino fior di latte, pomodorini semi dry, chips di patate americane, mollica atturrata, basilico",
    glutenFree: true,
    allergens: ["Latte"],
    recommended: true,
    doughs: [
      { name: "Impasto PUNTO ICS", price: 13 },
      { name: "Impasto SENZA GLUTINE", price: 15 },
      { name: "Impasto 7 CEREALI", price: 15 },
      { name: "Impasto KAMUT", price: 15 },
    ],
  },
  {
    id: 3,
    name: "Pi Greco",
    category: "home-made",
    description:
      "Crema di radicchio (Punto ICS), mozzarella di bufala campana DOP, pomodorini semi dry, grana, prosciutto crudo, basilico e olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 13 },
      { name: "Impasto SENZA GLUTINE", price: 15 },
      { name: "Impasto 7 CEREALI", price: 15 },
      { name: "Impasto KAMUT", price: 15 },
    ],
  },
  {
    id: 4,
    name: "Accento",
    category: "home-made",
    description:
      "Pomodoro, bocconcino fior di latte, salsiccia sale e pepe, olive, cipollina, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9 },
      { name: "Impasto SENZA GLUTINE", price: 11 },
      { name: "Impasto 7 CEREALI", price: 11 },
      { name: "Impasto KAMUT", price: 11 },
    ],
  },
  {
    id: 5,
    name: "Asterisco",
    category: "home-made",
    description:
      "Pepato primo sale km.0, olive, cipolla, acciughe, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 11 },
      { name: "Impasto SENZA GLUTINE", price: 13 },
      { name: "Impasto 7 CEREALI", price: 13 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },
  {
    id: 6,
    name: "Apostrofo",
    category: "home-made",
    description:
      "Pepato primo sale km.0, patate allo speck, cipollina, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10 },
      { name: "Impasto SENZA GLUTINE", price: 12 },
      { name: "Impasto 7 CEREALI", price: 12 },
      { name: "Impasto KAMUT", price: 12 },
    ],
  },
  {
    id: 7,
    name: "Barra Inversa",
    category: "home-made",
    description:
      "Provola affumicata ragusana, salsiccia sale e pepe, patate allo speck, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9 },
      { name: "Impasto SENZA GLUTINE", price: 11 },
      { name: "Impasto 7 CEREALI", price: 11 },
      { name: "Impasto KAMUT", price: 11 },
    ],
  },
  {
    id: 8,
    name: "Cancelletto",
    category: "home-made",
    description:
      "Crema di porcini (Punto ICS), bocconcino di bufala campana DOP, rucola, speck, granella di noci",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 11 },
      { name: "Impasto SENZA GLUTINE", price: 13 },
      { name: "Impasto 7 CEREALI", price: 13 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },
  {
    id: 9,
    name: "Carbonara",
    category: "home-made",
    description:
      "Bocconcino fior di latte, carbocrema, lardo pancettato, olio EVO e pepe nero",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 13 },
      { name: "Impasto SENZA GLUTINE", price: 14 },
      { name: "Impasto 7 CEREALI", price: 14 },
      { name: "Impasto KAMUT", price: 14 },
    ],
  },
  {
    id: 10,
    name: "Chiocciola",
    category: "home-made",
    description:
      "Pomodoro, bocconcino di bufala campana DOP, mais dolce, rucola, grana, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9 },
      { name: "Impasto SENZA GLUTINE", price: 11 },
      { name: "Impasto 7 CEREALI", price: 11 },
      { name: "Impasto KAMUT", price: 11 },
    ],
  },
  {
    id: 11,
    name: "Due Punti",
    category: "home-made",
    description:
      "Provola affumicata ragusana, misto funghi saltati, cipollina, speck, grana, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10 },
      { name: "Impasto SENZA GLUTINE", price: 12 },
      { name: "Impasto 7 CEREALI", price: 12 },
      { name: "Impasto KAMUT", price: 12 },
    ],
  },
  {
    id: 12,
    name: "E Commerciale (Chiusa a metà)",
    category: "home-made",
    description:
      "Zucchine fritte, ciliegino, bocconcino fior di latte, ricotta salata km.0, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9 },
      { name: "Impasto SENZA GLUTINE", price: 11 },
      { name: "Impasto 7 CEREALI", price: 11 },
      { name: "Impasto KAMUT", price: 11 },
    ],
  },
  {
    id: 13,
    name: "Eccetera",
    category: "home-made",
    description:
      "Crema di zucca gialla (stagionale), provola affumicata, glassa di aceto balsamico DOP, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8 },
      { name: "Impasto SENZA GLUTINE", price: 10 },
      { name: "Impasto 7 CEREALI", price: 10 },
      { name: "Impasto KAMUT", price: 10 },
    ],
  },
  {
    id: 14,
    name: "Infinito (Divisa in tre parti)",
    category: "home-made",
    description:
      "1°Pomodoro, bocconcino fior di latte 2°Bocconcino fior di latte, zucchine fritte, ricotta salata km.0 3°Bocconcino fior di latte, cipollina, bacon affumicato, uovo sodo, olio EVO e origano",
    glutenFree: true,
    allergens: ["Uova", "Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9 },
      { name: "Impasto SENZA GLUTINE", price: 11 },
      { name: "Impasto 7 CEREALI", price: 11 },
      { name: "Impasto KAMUT", price: 10 },
    ],
  },
  {
    id: 15,
    name: "Meno",
    category: "home-made",
    description:
      "Verdure grigliate (melanzane, zucchine), bocconcino fior di latte, ciliegino, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8 },
      { name: "Impasto SENZA GLUTINE", price: 10 },
      { name: "Impasto 7 CEREALI", price: 10 },
      { name: "Impasto KAMUT", price: 10 },
    ],
  },
  {
    id: 16,
    name: "Paragrafo",
    category: "home-made",
    description:
      "Bocconcino fior di latte, salsiccia sale e pepe, funghi champignon, lardo di colonnata speziato, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 11 },
      { name: "Impasto SENZA GLUTINE", price: 13 },
      { name: "Impasto 7 CEREALI", price: 13 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },
  {
    id: 17,
    name: "Parentesi Graffa",
    category: "home-made",
    description:
      "Bocconcino fior di latte, friarielli*, salsiccia sale e pepe, olive saltate con peperoncino",
    glutenFree: true,
    allergens: ["Latte"],
    recommended: true,
    doughs: [
      { name: "Impasto PUNTO ICS", price: 11 },
      { name: "Impasto SENZA GLUTINE", price: 13 },
      { name: "Impasto 7 CEREALI", price: 13 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },
  {
    id: 18,
    name: "Parentesi Tonda",
    category: "home-made",
    description:
      "Bocconcino fior di latte, panna UHT, straccetti di salmone norvegese, cipollina, grana, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 11 },
      { name: "Impasto SENZA GLUTINE", price: 13 },
      { name: "Impasto 7 CEREALI", price: 13 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },
  {
    id: 19,
    name: "Piu'",
    category: "home-made",
    description:
      "Ciliegino, bocconcino di bufala campana DOP, bresaola punta d’anca, grana, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 12 },
      { name: "Impasto SENZA GLUTINE", price: 14 },
      { name: "Impasto 7 CEREALI", price: 14 },
      { name: "Impasto KAMUT", price: 14 },
    ],
  },
  {
    id: 20,
    name: "Preposizione Articolata",
    category: "home-made",
    description:
      "Pomodoro, provola affumicata ragusana, nduja calabrese, cipolla rossa calabrese agrodolce, olio EVO e basilico",
    glutenFree: true,
    allergens: ["Latte"],
    recommended: true,
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10 },
      { name: "Impasto SENZA GLUTINE", price: 12 },
      { name: "Impasto 7 CEREALI", price: 12 },
      { name: "Impasto KAMUT", price: 12 },
    ],
  },
  {
    id: 21,
    name: "Punto e Virgola",
    category: "home-made",
    description:
      "Bocconcino fior di latte, pesto alla genovese (Punto ICS), ciliegino, granella di noci, grana, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9 },
      { name: "Impasto SENZA GLUTINE", price: 11 },
      { name: "Impasto 7 CEREALI", price: 11 },
      { name: "Impasto KAMUT", price: 11 },
    ],
  },
  {
    id: 22,
    name: "Punto Interrogativo",
    category: "home-made",
    description:
      "Bocconcino fior di latte, pesto di pistacchio (Punto ICS), mortadella, grana, farina di pistacchio, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10 },
      { name: "Impasto SENZA GLUTINE", price: 12 },
      { name: "Impasto 7 CEREALI", price: 12 },
      { name: "Impasto KAMUT", price: 12 },
    ],
  },
  {
    id: 23,
    name: "Il Brontese",
    category: "home-made",
    description:
      "Calzone: bocconcino fior di latte, pesto di pistacchio, prosciutto cotto, farina di pistacchio, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10 },
      { name: "Impasto SENZA GLUTINE", price: 12 },
      { name: "Impasto 7 CEREALI", price: 12 },
      { name: "Impasto KAMUT", price: 12 },
    ],
  },
  {
    id: 24,
    name: "Punto Esclamativo",
    category: "home-made",
    description:
      "Bocconcino fior di latte, funghi porcini, bacon affumicato, olio tartufo bianco e grana",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 12 },
      { name: "Impasto SENZA GLUTINE", price: 14 },
      { name: "Impasto 7 CEREALI", price: 14 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },
  {
    id: 25,
    name: "Spazio",
    category: "home-made",
    description:
      "Grana infornata, funghi porcini, speck infornato, burrata 250gr (a crudo), olio EVO basilico",
    glutenFree: true,
    allergens: ["Latte"],
    recommended: true,
    doughs: [
      { name: "Impasto PUNTO ICS", price: 15 },
      { name: "Impasto SENZA GLUTINE", price: 17 },
      { name: "Impasto 7 CEREALI", price: 17 },
      { name: "Impasto KAMUT", price: 17 },
    ],
  },
  {
    id: 26,
    name: "Slash",
    category: "home-made",
    description:
      "Bocconcino di bufala campana DOP, ananas, rucola, prosciutto crudo, scaglie di provola, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10 },
      { name: "Impasto SENZA GLUTINE", price: 12 },
      { name: "Impasto 7 CEREALI", price: 12 },
      { name: "Impasto KAMUT", price: 12 },
    ],
  },
  {
    id: 27,
    name: "Virgolette",
    category: "home-made",
    description:
      "Bocconcino di bufala campana DOP, rucola, prosciutto crudo, grana, olio EVO, origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 11 },
      { name: "Impasto SENZA GLUTINE", price: 13 },
      { name: "Impasto 7 CEREALI", price: 13 },
      { name: "Impasto KAMUT", price: 13 },
    ],
  },

  {
    id: 28,
    name: "Pizzaiola",
    category: "nazionali",
    description: "Pomodoro, olio EVO e origano",
    glutenFree: true,
    allergens: [],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 5.5 },
      { name: "Impasto SENZA GLUTINE", price: 7.5 },
      { name: "Impasto 7 CEREALI", price: 7.5 },
      { name: "Impasto KAMUT", price: 7.5 },
    ],
  },
  {
    id: 29,
    name: "Biancaneve",
    category: "nazionali",
    description: "Bocconcino fior di latte, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 7.0 },
      { name: "Impasto SENZA GLUTINE", price: 9.0 },
      { name: "Impasto 7 CEREALI", price: 9.0 },
      { name: "Impasto KAMUT", price: 9.0 },
    ],
  },
  {
    id: 30,
    name: "Margherita",
    category: "nazionali",
    description: "Pomodoro, bocconcino fior di latte, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 7.0 },
      { name: "Impasto SENZA GLUTINE", price: 9.0 },
      { name: "Impasto 7 CEREALI", price: 9.0 },
      { name: "Impasto KAMUT", price: 9.0 },
    ],
  },
  {
    id: 31,
    name: "Capricciosa",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, prosciutto cotto, funghi champignon, uovo sodo, olio EVO e origano",
    glutenFree: true,
    allergens: ["Uova", "Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9.0 },
      { name: "Impasto SENZA GLUTINE", price: 11.0 },
      { name: "Impasto 7 CEREALI", price: 11.0 },
      { name: "Impasto KAMUT", price: 11.0 },
    ],
  },
  {
    id: 32,
    name: "Norma",
    category: "nazionali",
    description:
      "Pomodoro, melanzane fritte, ricotta salata, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 7.0 },
      { name: "Impasto SENZA GLUTINE", price: 9.0 },
      { name: "Impasto 7 CEREALI", price: 9.0 },
      { name: "Impasto KAMUT", price: 9.0 },
    ],
  },
  {
    id: 33,
    name: "Calzone",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, prosciutto cotto, olive, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 34,
    name: "Calzone Verde",
    category: "nazionali",
    description:
      "Bocconcino fior di latte, spinaci, olive nere, olio EVO e pepe nero",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 35,
    name: "Calzone Siciliano",
    category: "nazionali",
    description:
      "Pepato primo sale, olive, acciughe, cipollina, olio EVO e pepe nero",
    glutenFree: true,
    allergens: ["Pesce", "Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 36,
    name: "Fattoressa",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, prosciutto cotto, piselli, acciughe, olio EVO e origano",
    glutenFree: true,
    allergens: ["Pesce", "Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 37,
    name: "4 Stagioni",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, carciofi, funghi champignon, piselli, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 38,
    name: "4 Formaggi",
    category: "nazionali",
    description:
      "Bocconcino fior di latte, pepato primo sale, gorgonzola DOP, grana, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10.0 },
      { name: "Impasto SENZA GLUTINE", price: 12.0 },
      { name: "Impasto 7 CEREALI", price: 12.0 },
      { name: "Impasto KAMUT", price: 12.0 },
    ],
  },
  {
    id: 39,
    name: "Tonnara",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, tonno, olive, cipollina, olio EVO e origano",
    glutenFree: true,
    allergens: ["Pesce", "Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9.0 },
      { name: "Impasto SENZA GLUTINE", price: 11.0 },
      { name: "Impasto 7 CEREALI", price: 11.0 },
      { name: "Impasto KAMUT", price: 11.0 },
    ],
  },
  {
    id: 40,
    name: "Diavola",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, ventricina piccante, olive, cipollina, olio santo e origano",
    glutenFree: true,
    allergens: ["Latte"],
    spicy: true,
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9.0 },
      { name: "Impasto SENZA GLUTINE", price: 12.0 },
      { name: "Impasto 7 CEREALI", price: 12.0 },
      { name: "Impasto KAMUT", price: 12.0 },
    ],
  },
  {
    id: 41,
    name: "Peperonata",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, peperoni fritti, cipollina, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 42,
    name: "Patatina",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, würstel, patatine, tomato, maionese",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 10.0 },
      { name: "Impasto SENZA GLUTINE", price: 12.0 },
      { name: "Impasto 7 CEREALI", price: 12.0 },
      { name: "Impasto KAMUT", price: 12.0 },
    ],
  },
  {
    id: 43,
    name: "Contadina",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, cipollina, funghi champignon, carciofini, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 8.0 },
      { name: "Impasto SENZA GLUTINE", price: 10.0 },
      { name: "Impasto 7 CEREALI", price: 10.0 },
      { name: "Impasto KAMUT", price: 10.0 },
    ],
  },
  {
    id: 44,
    name: "San Daniele",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, funghi champignon, prosciutto crudo, olio EVO e origano",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9.0 },
      { name: "Impasto SENZA GLUTINE", price: 11.0 },
      { name: "Impasto 7 CEREALI", price: 11.0 },
      { name: "Impasto KAMUT", price: 11.0 },
    ],
  },
  {
    id: 45,
    name: "Parmigiana",
    category: "nazionali",
    description:
      "Pomodoro, bocconcino fior di latte, prosciutto cotto, melanzane fritte, uovo sodo, grana, olio EVO e origano",
    glutenFree: true,
    allergens: ["Uova", "Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 9.0 },
      { name: "Impasto SENZA GLUTINE", price: 11.0 },
      { name: "Impasto 7 CEREALI", price: 11.0 },
      { name: "Impasto KAMUT", price: 11.0 },
    ],
  },

  {
    id: 46,
    name: "Punto ICS",
    category: "bordo-ripieno",
    description:
      "Bordo provola affumicata ragusana, pesto di pistacchio, bocconcino fior di latte, salsiccia sale e pepe, funghi porcini, grana, farina di pistacchio, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 13.0 },
      { name: "Impasto SENZA GLUTINE", price: 15.0 },
      { name: "Impasto 7 CEREALI", price: 15.0 },
      { name: "Impasto KAMUT", price: 15.0 },
    ],
  },
  {
    id: 47,
    name: "Livia",
    category: "bordo-ripieno",
    description:
      "Bordo provola affumicata ragusana, pesto di noci, bocconcino fior di latte, bresaola punta d'anca, rucola, grana, granella di noci, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 13.0 },
      { name: "Impasto SENZA GLUTINE", price: 15.0 },
      { name: "Impasto 7 CEREALI", price: 15.0 },
      { name: "Impasto KAMUT", price: 15.0 },
    ],
  },
  {
    id: 48,
    name: "Enzo",
    category: "bordo-ripieno",
    description:
      "Bordo capuliata di pomodori secchi, pepato primo sale km 0, ciliegino infornato, salsiccia sale e pepe, olio EVO",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 13.0 },
      { name: "Impasto SENZA GLUTINE", price: 15.0 },
      { name: "Impasto 7 CEREALI", price: 15.0 },
      { name: "Impasto KAMUT", price: 15.0 },
    ],
  },
  {
    id: 49,
    name: "Perugina",
    category: "bordo-ripieno",
    description:
      "Bordo ricotta fresca km 0 e speck, bocconcino di bufala campana DOP, dadolata di pomodori a crudo, ciuffetti di ricotta, olio EVO e basilico",
    glutenFree: true,
    allergens: ["Latte"],
    doughs: [
      { name: "Impasto PUNTO ICS", price: 14.0 },
      { name: "Impasto SENZA GLUTINE", price: 16.0 },
      { name: "Impasto 7 CEREALI", price: 16.0 },
      { name: "Impasto KAMUT", price: 16.0 },
    ],
  },
];
