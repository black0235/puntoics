"use client";

import { Badge } from "./Badge";
import { beverages, Beverage } from "./beveragesData";

export default function BeverageSection() {
  const categories = [
    "bevande",
    "birre alla spina",
    "birre senza glutine",
    "birre in bottiglia",
    "vini rossi",
    "vini bianchi e bollicine",
  ];

  return (
    <section className="space-y-10">
      {categories.map((cat) => {
        const items: Beverage[] = beverages.filter((b) => b.category === cat);

        return (
          <div
            key={cat}
            className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-6 space-y-4"
          >
            {/* TITLE */}
            <h2 className="text-2xl oswald text-[#592932] font-semibold capitalize">
              {cat}
            </h2>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f3f3f3] text-sm sm:text-base text-[#592932]">
                  <tr>
                    <th className="px-4 py-2 border-b">Nome</th>
                    <th className="px-4 py-2 border-b">Prezzo</th>
                    <th className="px-4 py-2 border-b">Volume</th>
                    <th className="px-4 py-2 border-b">Alcol</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-all"
                    >
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2 font-semibold">€{item.price}</td>
                      <td className="px-4 py-2">{item.volume || "-"}</td>
                      <td className="px-4 py-2">{item.alcohol || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 mt-2">
              {cat.includes("senza glutine") && (
                <Badge variant="veg">Senza Glutine</Badge>
              )}
              {cat.includes("consigliato") && (
                <Badge variant="recommended">Consigliato dallo Chef</Badge>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
