"use client";

import { useRef, useEffect } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { GiFullPizza, GiFurnace } from "react-icons/gi";

interface ServicesSectionProps {
  gsap?: any;
  ScrollTrigger?: any;
}

export default function ServicesSection({
  gsap,
  ScrollTrigger,
}: ServicesSectionProps) {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <h2 className="oswald text-center mt-7 text-white text-5xl md:text-8xl drop-shadow-lg">
        Cosa vi offriamo
      </h2>
      <div
        ref={servicesRef}
        className="flex flex-col md:flex-row h-1/2 justify-center w-auto gap-8 md:p-12 m-10"
      >
        <div className="service-card flex flex-col flex-1 items-center m-3 bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md transition-transform transform hover:scale-105">
          <GiFullPizza className="service-icon text-6xl h-auto text-custom-brown1 mb-4" />
          <h2 className="oswald text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            Il Miglior Senza Glutine
          </h2>
          <p className="oswald text-sm md:text-lg mt-5 text-white">
            Il nostro senza glutine non è una semplice alternativa, ma
            un'esperienza di gusto autentica.
          </p>
        </div>

        <div className="service-card flex flex-col flex-1 items-center m-3 bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md transition-transform transform hover:scale-105">
          <FaPizzaSlice className="service-icon text-6xl h-auto text-custom-brown1 mb-4" />
          <h2 className="oswald text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            Pizze Artigianali
          </h2>
          <p className="oswald text-sm md:text-lg mt-5 text-white">
            Pizze preparate con ingredienti freschi e la passione che ci
            contraddistingue.
          </p>
        </div>

        <div className="service-card flex flex-col flex-1 items-center m-3 bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md transition-transform transform hover:scale-105">
          <GiFurnace className="service-icon text-6xl text-custom-brown1 mb-4" />
          <h2 className="oswald text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            Forni Separati
          </h2>
          <p className="oswald text-sm md:text-lg mt-5 text-white">
            Da Punto ICS garantiamo la massima sicurezza per i nostri clienti
            celiaci, grazie ai due forni separati dedicati agli impasti senza
            glutine.
          </p>
        </div>
      </div>
    </>
  );
}
