"use client";

import { Badge } from "./Badge";
import { saladItems, type SaladItem } from "./salad";

export default function SaladSection() {
  return (
    <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {saladItems.map((item) => (
        <div
          key={item.id}
          className="bg-white/95 rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
        >
          {/* HEADER */}
          <div>
            <h3 className="text-2xl oswald text-custom-brown font-semibold mb-2">
              {item.name}
            </h3>

            <p className="text-gray-700 text-sm mb-3">{item.description}</p>

            {/* BADGE */}
            <div className="flex gap-2 flex-wrap mb-3">
              {item.badges.chefRecommended && (
                <Badge variant="recommended">Consigliato dallo Chef</Badge>
              )}
            </div>
          </div>

          {/* TABELLA PREZZI */}
          <div className="mt-2">
            <table className="w-full text-left text-sm border border-gray-800/20 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-800/20">
                  <td className="px-4 py-2">Glutine</td>
                  <td className="px-4 py-2 font-semibold">
                    €{item.prices.gluten.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Senza Glutine</td>
                  <td className="px-4 py-2 font-semibold">
                    €{item.prices.glutenFree.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}
