import { dessertItems } from "./dessertData";
import type { Dessert } from "./dessertData";
import { Badge } from "./Badge";

export default function DessertSection() {
  return (
    <section className="py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dessertItems.map((item: Dessert) => (
          <div
            key={item.id}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* HEADER */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl oswald text-[#592932] font-semibold mb-2">
                {item.name}
              </h3>

              {/* DESCRIZIONE */}
              <p className="text-gray-700 text-sm">{item.description}</p>

              {/* VARIANTI */}
              {item.variants && item.variants.length > 0 && (
                <div className="mt-2">
                  <p className="font-semibold text-sm oswald mb-1">Varianti:</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {item.variants.map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* FOOTER BADGE + PREZZO */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex flex-wrap gap-2">
                {item.badges.glutenFree && (
                  <Badge variant="veg">Senza Glutine</Badge>
                )}
                {item.badges.lactoseFree && (
                  <Badge variant="recommended">Senza Lattosio</Badge>
                )}
                {item.badges.frozen && <Badge variant="spicy">Surgelato</Badge>}
              </div>

              <div className="ml-auto">
                <Badge
                  variant="price"
                  className="text-base sm:text-lg font-bold"
                >
                  {item.price.toFixed(2)} €
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
