"use client"

import { useRef, useEffect } from "react"

interface AtmosferaSectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function AtmosferaSection({ gsap, ScrollTrigger }: AtmosferaSectionProps) {
  const atmosferaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return

    // Animazione GSAP
    gsap.fromTo(
      atmosferaRef.current?.querySelector(".atmosfera-image"),
      { opacity: 0, scale: 1.2, filter: "blur(10px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: atmosferaRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [gsap, ScrollTrigger])

  return (
    <section
      ref={atmosferaRef}
      className="py-12 md:py-20 bg-transparent flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 sm:px-6 md:px-12"
    >
      {/* Immagine */}
      <div className="atmosfera-image flex w-full md:w-1/3 items-center justify-center mt-4 md:mt-0">
        <img
          src="atmosfera.jpg"
          alt="Atmosfera Locale"
          className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto shadow-xl transform hover:scale-105 transition-transform duration-500 mx-auto"
        />
      </div>

      {/* Testo */}
      <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="oswald text-xl md:text-2xl text-white mb-4 md:mb-6 font-bold drop-shadow-lg">
          Un'Atmosfera Unica
        </h2>
        <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
          Vieni a scoprire l'atmosfera calda e accogliente di{" "}
          <span className="text-custom-brown font-semibold">Punto ICS</span>. Il nostro locale è pensato per farti
          sentire a casa, con un design moderno e dettagli rustici che celebrano la tradizione della pizza.
          <br />
          <br />
          Perfetto per una cena romantica, un pranzo in famiglia o una serata con gli amici. Ogni momento da noi è
          speciale, grazie a un ambiente che unisce{" "}
          <span className="text-custom-brown font-semibold">comfort e stile</span>.
        </p>
      </div>
    </section>
  )
}
