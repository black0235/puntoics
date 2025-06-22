"use client"

import { useRef, useEffect } from "react"

interface AntipastiSectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function AntipastiSection({ gsap, ScrollTrigger }: AntipastiSectionProps) {
  const antipastiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return

    // Antipasti Section Animation
    gsap.fromTo(
      antipastiRef.current?.querySelector(".antipasti-image"),
      { opacity: 0, scale: 0.8, rotation: 10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: antipastiRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [gsap, ScrollTrigger])

  return (
    <div ref={antipastiRef} className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-4 p-6">
      <div className="antipasti-image flex w-full md:w-1/3 items-center justify-center md:mt-10">
        <img
          src="patatine.jpg"
          alt="Antipasti"
          className="rounded-2xl scale-90 md:scale-100 h-full max-w-md m-4 shadow-xl transition-transform transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col m-6 w-full mr-20 md:w-1/2 items-start">
        <h2 className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
          Antipasti da Gustare: Un Inizio Croccante e Irresistibile
        </h2>
        <p className="oswald text-2xl  text-white leading-relaxed">
          I nostri antipasti sono il <span className="text-custom-brown font-semibold">perfetto inizio</span> per ogni
          pasto, pensati per <span className="text-custom-brown font-semibold">stuzzicare il palato</span> e prepararti
          a un'esperienza culinaria
          <span className="text-custom-brown font-semibold"> unica</span>. Dalle
          <span className="text-2xl text-custom-brown font-semibold">fritture croccanti</span> alle
          <span className="text-2xl text-custom-brown font-semibold">verdure fresche</span> con condimenti ricercati,
          ogni piatto è preparato con ingredienti di alta qualità e passione. Assapora il mix di sapori che esaltano
          ogni ingrediente, per un inizio <span className="text-custom-brown font-semibold">indimenticabile</span> del
          tuo pranzo o cena.
          <br />
          <span className="font-bold text-2xl text-custom-brown">Prova i nostri fritti</span> che renderanno ogni
          boccone ancora più speciale.
        </p>
      </div>
    </div>
  )
}
