"use client"

import { useRef, useEffect } from "react"
import { FaPizzaSlice } from "react-icons/fa"
import { GiFullPizza, GiFurnace } from "react-icons/gi"

interface ServicesSectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function ServicesSection({ gsap, ScrollTrigger }: ServicesSectionProps) {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return

    // Services Cards Animation
    gsap.fromTo(
      servicesRef.current?.querySelectorAll(".service-card"),
      { opacity: 0, y: 100, rotationY: 45 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Floating Animation per le icone
    gsap.to(servicesRef.current?.querySelectorAll(".service-icon"), {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })
  }, [gsap, ScrollTrigger])

  return (
    <>
      <h2 className="oswald text-center mt-7 text-white text-5xl md:text-8xl drop-shadow-lg">Cosa vi offriamo</h2>
      <div ref={servicesRef} className="flex flex-col md:flex-row h-1/2 justify-center w-auto gap-8 md:p-12 m-10">
        <div className="service-card flex flex-col flex-1 items-center border-8 m-3 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md transition-transform transform hover:scale-105">
          <GiFullPizza className="service-icon text-6xl h-auto text-custom-brown1 mb-4" />
          <h2 className="oswald text-4xl md:text-6xl text-white mb-4">Il Miglior Senza Glutine</h2>
          <p className="oswald text-2xl mt-5 text-white">
            Il nostro senza glutine non è una semplice alternativa, ma un'esperienza di gusto autentica.
          </p>
        </div>

        <div className="service-card flex flex-col flex-1 items-center border-8 m-3 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md transition-transform transform hover:scale-105">
          <FaPizzaSlice className="service-icon text-6xl h-auto text-custom-brown1 mb-4" />
          <h2 className="oswald text-4xl md:text-6xl text-white mb-4">Pizze Artigianali</h2>
          <p className="oswald text-2xl mt-5 text-white">
            Pizze preparate con ingredienti freschi e la passione che ci contraddistingue.
          </p>
        </div>

        <div className="service-card flex flex-col flex-1 items-center border-8 m-3 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md transition-transform transform hover:scale-105">
          <GiFurnace className="service-icon text-6xl text-custom-brown1 mb-4" />
          <h2 className="oswald text-4xl md:text-6xl text-white mb-4">Forni Separati</h2>
          <p className="oswald text-2xl mt-5 text-white">
            Da Punto ICS garantiamo la massima sicurezza per i nostri clienti celiaci, grazie ai due forni separati
            dedicati agli impasti senza glutine.
          </p>
        </div>
      </div>
    </>
  )
}
