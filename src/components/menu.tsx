"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaPizzaSlice,
  FaHamburger,
  FaWineBottle,
  FaWineGlassAlt,
} from "react-icons/fa";
import {
  GiCupcake,
  GiFrenchFries,
  GiCharcuterie,
  GiBarbecue,
  GiCabbage,
} from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";

import PizzaSection from "./PizzaSection";
import DessertSection from "./DessertSection";
import DrinkSection from "./DrinkCard";
import AntipastiSection from "./AntipstiSection";
import BurgerSection from "./BurgerSection";
import ApericenaSection from "./ApericenSection";
import GrillSection from "./GrillSection";
import SaladSection from "./SaladSection";
import BeverageSection from "./BeverageSection";

import gsap from "gsap";

const menuCategories = [
  { id: "pizzas", name: "Pizze", icon: <FaPizzaSlice className="text-5xl" /> },
  { id: "burgers", name: "Panini", icon: <FaHamburger className="text-5xl" /> },
  {
    id: "bevande",
    name: "Bevande",
    icon: <FaWineBottle className="text-5xl" />,
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: <FaWineGlassAlt className="text-5xl" />,
  },
  {
    id: "antipasti",
    name: "Antipasti",
    icon: <GiFrenchFries className="text-5xl" />,
  },
  { id: "dessert", name: "Dolci", icon: <GiCupcake className="text-5xl" /> },
  {
    id: "apericena",
    name: "Apericena",
    icon: <GiCharcuterie className="text-5xl" />,
  },
  {
    id: "grill",
    name: "Braceria - Steak house",
    icon: <GiBarbecue className="text-5xl" />,
  },
  {
    id: "saladpizza",
    name: "Insalapizza",
    icon: <GiCabbage className="text-5xl" />,
  },
];

export default function EnhancedMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  // Stelle animate
  const stars = Array.from({ length: 180 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    color: Math.random() > 0.5 ? "#592932" : "#b3815e",
    opacity: Math.random() * 0.6 + 0.3,
  }));

  const renderSection = () => {
    switch (selectedCategory) {
      case "pizzas":
        return <PizzaSection />;
      case "apericena":
        return <ApericenaSection />;
      case "antipasti":
        return <AntipastiSection />;
      case "dessert":
        return <DessertSection />;
      case "burgers":
        return <BurgerSection />;
      case "grill":
        return <GrillSection />;
      case "saladpizza":
        return <SaladSection />;
      case "drinks":
        return <DrinkSection />;
      case "bevande":
        return <BeverageSection />;
      default:
        return (
          <div className="text-white text-center mt-12">Sezione in arrivo</div>
        );
    }
  };

  useEffect(() => {
    // Animazione solo delle stelle
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".star-menu").forEach((star) => {
        gsap.to(star as HTMLElement, {
          y: "random(-25, 25)",
          x: "random(-15, 15)",
          opacity: "random(0.2, 0.9)",
          duration: "random(1.5, 3)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: "random(0, 1.5)",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-custom-brown p-6 md:p-12 relative overflow-hidden"
    >
      {/* Stelle animate */}
      <div ref={starsRef} className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star-menu absolute rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mt-32 mx-auto relative z-10">
        {selectedCategory ? (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 mb-8 px-8 py-4 bg-white/10 backdrop-blur-sm text-white oswald rounded-full hover:bg-white/20 transition-all border border-white/20 shadow-lg"
            >
              <BiArrowBack /> Torna al menu
            </button>
            {renderSection()}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="menu-card bg-white/95 backdrop-blur-sm rounded-xl p-8 text-center shadow-xl cursor-pointer hover:scale-105 transition-all border border-white/20 min-h-[240px] flex flex-col justify-center"
              >
                <div className="flex justify-center text-custom-brown mb-6 group-hover:text-custom-brown1 transition-colors">
                  {category.icon}
                </div>

                <h2 className="text-3xl oswald text-custom-brown mb-3">
                  {category.name}
                </h2>

                <p className="text-gray-600 mb-4">
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
