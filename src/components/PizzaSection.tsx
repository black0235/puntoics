"use client";

import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Badge } from "./Badge";
import { pizzaItems } from "./pizzaData";

const pizzaCategory = [
  {
    id: "home-made",
    name: "Pizze Home Made",
    description: "Pizze speciali fatte in casa",
  },
  {
    id: "nazionali",
    name: "Pizze Nazionali",
    description: "Pizze classiche italiane",
  },
  {
    id: "bordo-ripieno",
    name: "Pizze con Bordo Ripieno",
    description: "Pizze con bordo ripieno",
  },
];

export default function PizzaSection() {
  const [selectedPizzaCategory, setSelectedPizzaCategory] = useState<
    string | null
  >(null);

  const pizzas = selectedPizzaCategory
    ? pizzaItems.filter((p) => p.category === selectedPizzaCategory)
    : [];

  return (
    <div className="animate-in slide-in-from-right duration-300">
      {/* CATEGORIE PIZZE */}
      {!selectedPizzaCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzaCategory.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => setSelectedPizzaCategory(cat.id)}
              className="group bg-white/95 rounded-xl p-8 text-center shadow-xl cursor-pointer hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-3xl oswald text-custom-brown mb-3">
                {cat.name}
              </h3>
              <p className="text-gray-700 mb-4">{cat.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* LISTA PIZZE */}
      {selectedPizzaCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all"
            >
              {/* HEADER */}
              <div className="p-6 border-b">
                <h3 className="text-2xl oswald text-custom-brown mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>

                {/* BADGE */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {item.spicy && <Badge variant="spicy">Piccante</Badge>}
                  {item.recommended && (
                    <Badge variant="recommended">Consigliata</Badge>
                  )}
                  {item.glutenFree && (
                    <Badge variant="veg">Senza Glutine</Badge>
                  )}
                </div>
              </div>

              {/* BODY */}
              <div className="p-6">
                <h4 className="oswald text-custom-brown mb-3">
                  Impasti disponibili
                </h4>
                <ul className="space-y-2">
                  {item.doughs.map((dough, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-sm border-b pb-1"
                    >
                      <span>{dough.name}</span>
                      <span className="font-bold">€{dough.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* BOTTONE TORNA INDIETRO SOTTO */}
          <div className="col-span-full flex justify-center mt-6">
            <button
              onClick={() => setSelectedPizzaCategory(null)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white oswald rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <BiArrowBack className="text-lg" />
              Torna alle categorie
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
