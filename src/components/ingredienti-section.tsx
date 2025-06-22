"use client"

import { useRef, useEffect } from "react"

interface IngredientiSectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function IngredientiSection({ gsap, ScrollTrigger }: IngredientiSectionProps) {
  const ingredientiRef = useRef<HTMLDivElement>(null)

  
  return (
    <section ref={ingredientiRef} className="py-20 bg-custom-brown text-center">
      <h2 className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg">Ingredienti di Qualità</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        <div className="ingrediente-card flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105">
          <img src="farina.png" alt="Farina di Qualità" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <h3 className="oswald text-2xl text-custom-brown mb-2">Farina Selezionata</h3>
          <p className="oswald text-lg text-gray-700">
            Usiamo solo farine di alta qualità per un impasto leggero e digeribile.
          </p>
        </div>

        <div className="ingrediente-card flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105">
          <img src="mozzarella.png" alt="Mozzarella Fresca" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <h3 className="oswald text-2xl text-custom-brown mb-2">Mozzarella Fresca</h3>
          <p className="oswald text-lg text-gray-700">Mozzarella di bufala e fior di latte, sempre fresca e filante.</p>
        </div>

        <div className="ingrediente-card flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105">
          <img src="pomodoro1.png" alt="Pomodoro Italiano" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <h3 className="oswald text-2xl text-custom-brown mb-2">Pomodoro Italiano</h3>
          <p className="oswald text-lg text-gray-700">
            Pomodori 100% italiani, coltivati con cura per un sapore autentico.
          </p>
        </div>
      </div>
    </section>
  )
}
