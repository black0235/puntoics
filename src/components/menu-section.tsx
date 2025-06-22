"use client"

import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface MenuSectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function MenuSection({ gsap, ScrollTrigger }: MenuSectionProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

 

  return (
    <section id="menu" ref={menuRef} className="py-20 bg-custom-brown1 text-center">
      <h2 className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg">Esplora il Nostro Menu</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        <div className="menu-card flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform">
          <img src="rot3-.png" alt="Pizze Classiche" className="w-full h-full rounded-xl object-cover mb-4" />
          <h3 className="oswald text-4xl text-white mb-2">Pizze Classiche</h3>
          <p className="oswald text-xl text-white">
            Le nostre pizze classiche, preparate con ingredienti freschi e impasti tradizionali.
          </p>
        </div>

        <div className="menu-card flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform">
          <img src="rot2-.png" alt="Pizze Senza Glutine" className="w-full h-full rounded-xl object-cover mb-4" />
          <h3 className="oswald text-4xl text-white mb-2">Senza Glutine</h3>
          <p className="oswald text-xl text-white">
            Un'esperienza di gusto autentica, sicura e deliziosa per tutti i palati.
          </p>
        </div>

        <div className="menu-card flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform">
          <img src="rot1-.png" alt="img" className="w-full h-full rounded-xl object-cover mb-4" />
          <h3 className="oswald text-4xl text-white mb-2">Impasto Kamut</h3>
          <p className="oswald text-xl text-white">
            Fritture croccanti e verdure fresche per iniziare il tuo pasto nel modo migliore.
          </p>
        </div>
      </div>
      <button
        className="mt-14 px-8 py-5 bg-custom-brown text-white scale-110 text-xl oswald rounded-full hover:scale-110 transition-all duration-300"
        onClick={() => navigate("/menu")}
      >
        Scopri il Menu Completo
      </button>
    </section>
  )
}
