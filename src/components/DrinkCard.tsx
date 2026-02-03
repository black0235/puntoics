import { Badge } from "./Badge";
import { drinkItems } from "./drinkData";
import type { Drink } from "./drinkData";

export default function DrinkSection() {
  return (
    <section className="py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {drinkItems.map((item: Drink) => (
          <div
            key={item.name}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* HEADER */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl oswald text-custom-brown font-semibold mb-2">
                {item.name}
              </h3>

              {/* INGREDIENTI */}
              <p className="text-gray-700 text-sm">
                {item.ingredients.join(", ")}
              </p>

              {/* BADGE CONSIGLIATO */}
              {item.chefRecommended && (
                <div className="mt-3">
                  <Badge variant="recommended">Consigliato</Badge>
                </div>
              )}
            </div>

            {/* FOOTER BADGE + PREZZO */}
            <div className="flex justify-end mt-4">
              <Badge variant="price" className="text-base sm:text-lg font-bold">
                {item.price.toFixed(2)} €
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
