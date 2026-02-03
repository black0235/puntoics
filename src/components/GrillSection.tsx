import { grillItems } from "./grillData";
import type { GrillItem } from "./grillData";
import { Badge } from "./Badge";

export default function GrillSection() {
  return (
    <section className="space-y-8">
      {grillItems.map((item: GrillItem) => (
        <div
          key={item.id}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <span className="text-lg font-bold">€ {item.price.toFixed(2)}</span>
          </div>

          {/* BADGES */}
          <div className="mt-2 flex flex-wrap gap-2">
            {item.badges.chefRecommended && (
              <Badge variant="recommended">Consigliato dallo Chef</Badge>
            )}

            {item.badges.glutenFree && (
              <Badge variant="price">Senza Glutine</Badge>
            )}

            {item.badges.lactoseFree && (
              <Badge variant="veg">Senza Lattosio</Badge>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-3 text-sm text-neutral-600 border-b border-gray-800/20 leading-relaxed">
            {item.description}
          </p>

          {/* VARIANTS */}
          {item.variants && (
            <ul className="mt-4 space-y-1 text-sm  text-neutral-700">
              {item.variants.map((variant, index) => (
                <li key={index}>{variant}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
