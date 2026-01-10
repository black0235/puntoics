"use client";

import { useState } from "react";
import {
  FaPizzaSlice,
  FaHamburger,
  FaWineBottle,
  FaIceCream,
} from "react-icons/fa";
import { GiCupcake, GiFrenchFries } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { Badge } from "./Badge";

// Menu data with enhanced information
const menuCategories = [
  { id: "pizzas", name: "Pizze", icon: <FaPizzaSlice className="text-5xl" /> },
  { id: "panini", name: "Panini", icon: <FaHamburger className="text-5xl" /> },
  {
    id: "bevande",
    name: "Bevande",
    icon: <FaWineBottle className="text-5xl" />,
  },
  {
    id: "antipasti",
    name: "Antipasti",
    icon: <GiFrenchFries className="text-5xl" />,
  },
  { id: "dolci", name: "Dolci", icon: <GiCupcake className="text-5xl" /> },
  { id: "gelati", name: "Gelati", icon: <FaIceCream className="text-5xl" /> },
];

// Enhanced pizza data with badges
const pizzaItems = [
  {
    id: 1,
    name: "Margherita",
    description: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco",
    price: "7.50",
    image: "/margherita-pizza.png",
    isVegetarian: true,
    isSpicy: false,
  },
  {
    id: 2,
    name: "Diavola",
    description: "Pomodoro, mozzarella, salame piccante calabrese",
    price: "9.00",
    image: "/spicy-diavola-pizza.png",
    isVegetarian: false,
    isSpicy: true,
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola DOP, fontina, parmigiano reggiano",
    price: "10.00",
    image: "/four-cheese-pizza.png",
    isVegetarian: true,
    isSpicy: false,
  },
  {
    id: 4,
    name: "Capricciosa",
    description:
      "Pomodoro, mozzarella, prosciutto cotto, funghi porcini, carciofi, olive",
    price: "10.50",
    image: "/capricciosa-pizza.png",
    isVegetarian: false,
    isSpicy: false,
  },
  {
    id: 5,
    name: "Bufala",
    description: "Pomodoro San Marzano, mozzarella di bufala campana, basilico",
    price: "9.50",
    image: "/buffalo-mozzarella-basil-pizza.png",
    isVegetarian: true,
    isSpicy: false,
  },
  {
    id: 6,
    name: "Vegetariana",
    description: "Pomodoro, mozzarella, verdure grigliate di stagione",
    price: "9.00",
    image: "/vegetarian-grilled-pizza.png",
    isVegetarian: true,
    isSpicy: false,
  },
];

// Enhanced panini data
const paniniItems = [
  {
    id: 1,
    name: "Prosciutto e Formaggio",
    description: "Prosciutto di Parma DOP, pecorino stagionato, rucola fresca",
    price: "6.50",
    image: "/prosciutto-cheese-panino.png",
    isVegetarian: false,
    isSpicy: false,
  },
  {
    id: 2,
    name: "Vegetariano",
    description: "Verdure grigliate, formaggio di capra, pesto di basilico",
    price: "6.00",
    image: "/vegetarian-panino.png",
    isVegetarian: true,
    isSpicy: false,
  },
];

// Enhanced bevande data
const bevandeItems = [
  {
    id: 1,
    name: "Coca Cola",
    description: "Lattina 33cl - Fresca e gasata",
    price: "3.00",
    image: "/coca-cola-can.png",
    isVegetarian: true,
    isSpicy: false,
  },
  {
    id: 2,
    name: "Acqua Naturale",
    description: "Bottiglia 50cl - Acqua di sorgente",
    price: "1.50",
    image: "/natural-water-bottle.png",
    isVegetarian: true,
    isSpicy: false,
  },
  {
    id: 3,
    name: "Birra Artigianale",
    description: "Bottiglia 33cl - Birra locale non filtrata",
    price: "5.00",
    image: "/craft-beer-bottle.png",
    isVegetarian: true,
    isSpicy: false,
  },
];

export default function EnhancedMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getItemsByCategory = (categoryId: string) => {
    switch (categoryId) {
      case "pizzas":
        return pizzaItems;
      case "panini":
        return paniniItems;
      case "bevande":
        return bevandeItems;
      default:
        return [];
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-custom-brown p-12 sm:p-6 md:p-12">
      <div className="max-w-7xl mt-16 sm:mt-20 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24  mx-auto mb-4 sm:mb-6"></div>
        </div>

        {selectedCategory ? (
          <div className="animate-in slide-in-from-right duration-300">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-base sm:text-lg oswald rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg min-h-[48px]"
            >
              <BiArrowBack className="text-lg sm:text-xl" /> Torna al menu
            </button>

            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl oswald text-white mb-3 sm:mb-4 px-2">
                {
                  menuCategories.find((cat) => cat.id === selectedCategory)
                    ?.name
                }
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-custom-brown1 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {getItemsByCategory(selectedCategory).map((item) => (
                <div
                  key={item.id}
                  className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] border border-white/20"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={
                        item.image ||
                        "/placeholder.svg?height=300&width=300&query=delicious food"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col sm:flex-row gap-1 sm:gap-2">
                      {item.isVegetarian && (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white font-medium text-xs sm:text-sm">
                          Vegetariano
                        </Badge>
                      )}
                      {item.isSpicy && (
                        <Badge className="bg-red-500 hover:bg-red-600 text-white font-medium text-xs sm:text-sm">
                          🌶️ Piccante
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <Badge className="bg-custom-brown text-white font-bold text-base sm:text-lg px-2 sm:px-3 py-1">
                        €{item.price}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl oswald text-custom-brown mb-2 sm:mb-3 group-hover:text-custom-brown1 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm line-clamp-3">
                      {item.description}
                    </p>

                    <button className="w-full py-3 sm:py-3 bg-gradient-to-r from-custom-brown to-custom-brown1 text-white oswald rounded-lg sm:rounded-xl hover:from-custom-brown1 hover:to-custom-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] min-h-[48px] text-sm sm:text-base">
                      Aggiungi al carrello
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleBackClick}
                className="flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-lg sm:text-xl oswald rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 min-h-[48px]"
              >
                <BiArrowBack className="text-lg sm:text-xl" /> Torna alla
                selezione
              </button>
            </div>
          </div>
        ) : (
          /* Enhanced mobile category grid with better spacing and touch targets */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-in fade-in duration-500">
            {menuCategories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 min-h-[200px] sm:min-h-[240px] flex flex-col justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center text-custom-brown mb-4 sm:mb-6 group-hover:text-custom-brown1 transition-colors duration-300 group-hover:scale-110 transform">
                  <div className="text-4xl sm:text-5xl">{category.icon}</div>
                </div>

                <h2 className="text-2xl sm:text-3xl oswald text-custom-brown mb-2 sm:mb-3 group-hover:text-custom-brown1 transition-colors">
                  {category.name}
                </h2>

                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Scopri tutte le nostre specialità
                </p>

                <div className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 bg-gradient-to-r from-custom-brown to-custom-brown1 text-white oswald rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm sm:text-base">
                  Esplora
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
