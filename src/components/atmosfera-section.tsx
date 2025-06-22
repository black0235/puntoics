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

    // Atmosfera Section Animation
    gsap.fromTo(
      atmosferaRef.current?.querySelector(".atmosfera-image"),
      { opacity: 0, scale: 1.3, filter: "blur(10px)" },
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
      },
    )
  }, [gsap, ScrollTrigger])

  return (
    <section
      ref={atmosferaRef}
      className="py-20 bg-transparent flex flex-col md:flex-row items-center justify-center gap-10 p-8"
    >
      <div className="atmosfera-image flex w-full md:w-1/3 items-center justify-center">
        <img
          src="atmosfera.jpg"
          alt="Atmosfera Locale"
          className="rounded-2xl scale-125  h-full max-w-md m-4 shadow-xl transition-transform transform"
        />
      </div>
      <div className="flex flex-col w-full mr-18 ml-10 md:w-1/2">
        <h2 className="oswald text-4xl md:text-6xl m-5 text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
          Un'Atmosfera Unica
        </h2>
        <p className="oswald text-2xl mt-5 m-5 text-white leading-relaxed">
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
