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

// Menu data
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

// Sample pizza data
const pizzaItems = [
  {
    id: 1,
    name: "Margherita",
    description: "Pomodoro, mozzarella, basilico",
    price: "7.50",
    image: "/pizza1.png",
  },
  {
    id: 2,
    name: "Diavola",
    description: "Pomodoro, mozzarella, salame piccante",
    price: "9.00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, fontina, parmigiano",
    price: "10.00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Capricciosa",
    description: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive",
    price: "10.50",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Bufala",
    description: "Pomodoro, mozzarella di bufala, basilico",
    price: "9.50",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Vegetariana",
    description: "Pomodoro, mozzarella, verdure grigliate miste",
    price: "9.00",
    image: "/placeholder.svg?height=300&width=300",
  },
];

// Sample panini data
const paniniItems = [
  {
    id: 1,
    name: "Prosciutto e Formaggio",
    description: "Prosciutto crudo, formaggio, insalata",
    price: "6.50",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Vegetariano",
    description: "Verdure grigliate, formaggio, rucola",
    price: "6.00",
    image: "/placeholder.svg?height=300&width=300",
  },
];

// Sample bevande data
const bevandeItems = [
  {
    id: 1,
    name: "Coca Cola",
    description: "33cl",
    price: "3.00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Acqua Naturale",
    description: "50cl",
    price: "1.50",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Birra Artigianale",
    description: "33cl",
    price: "5.00",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function Menu() {
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
    <div className="h-screen flex-col bg-custom-brown p-10 md:p-12">
      <div className="max-w-7xl mt-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl oswald text-white mb-4">
            Menu Punto ICS
          </h1>
          <p className="text-xl md:text-2xl oswald text-white">
            Scopri le nostre specialità
          </p>
        </div>

        {selectedCategory ? (
          <div>
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 mb-8 px-6 py-3 bg-custom-brown1 text-white text-xl font-semibold oswald rounded-full hover:bg-custom-brown1 transition-all duration-300"
            >
              <BiArrowBack /> Torna al menu
            </button>

            <h2 className="text-3xl md:text-5xl font-bold oswald text-white mb-8 text-center">
              {menuCategories.find((cat) => cat.id === selectedCategory)?.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getItemsByCategory(selectedCategory).map((item) => (
                <div
                  key={item.id}
                  className="bg-custom-brown1 border-8 border-white rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-white">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-2xl font-bold oswald">{item.name}</h3>
                      <span className="text-xl font-bold oswald text-custom-brown1">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-gray-200">{item.description}</p>
                    <button className="mt-4 w-full py-2 bg-custom-brown1 text-white font-semibold oswald rounded-full hover:bg-custom-brown transition-all duration-300">
                      Aggiungi
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button
                onClick={handleBackClick}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-custom-brown1 text-white text-xl font-semibold oswald rounded-full hover:bg-custom-brown1 transition-all duration-300 shadow-lg"
              >
                <BiArrowBack /> Torna alla selezione
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-custom-brown1 border-8 border-white rounded-3xl p-8 text-center shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              >
                <div className="flex justify-center text-custom-brown1 mb-4">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold oswald text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-200">
                  Scopri tutte le nostre specialità
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
