import { burgerItems } from "./burgerData";
import type { Burger } from "./burgerData";
import { Badge } from "./Badge";

export default function BurgerSection() {
  return (
    <section className="space-y-8">
      {burgerItems.map((burger: Burger) => (
        <div
          key={burger.id}
          className="rounded-2xl bg-white order border-neutral-200 p-5 shadow-sm"
        >
          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold">{burger.name}</h3>
            <span className="text-lg font-bold">
              € {burger.price.toFixed(2)}
            </span>
          </div>

          {/* BADGES */}
          <div className="mt-2 flex flex-wrap gap-2">
            {burger.badges.chefRecommended && (
              <Badge color="amber">Consigliato dallo Chef</Badge>
            )}
            {burger.badges.spicy && <Badge color="red">Piccante</Badge>}
            {burger.badges.glutenFree && (
              <Badge color="green">Senza Glutine</Badge>
            )}
            {burger.badges.lactoseFree && (
              <Badge color="blue">Senza Lattosio</Badge>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-3 text-sm text-neutral-600">{burger.description}</p>

          {/* VARIANTS */}
          {burger.variants && (
            <ul className="mt-4 space-y-1 text-sm">
              {burger.variants.map((variant, index) => (
                <li
                  key={index}
                  className="flex justify-between text-neutral-700"
                >
                  <span>{variant}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
