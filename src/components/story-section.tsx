"use client"

import { useRef, useEffect } from "react"

interface StorySectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function StorySection({ gsap, ScrollTrigger }: StorySectionProps) {
  const storyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return

    // Story Section Animation
    gsap.fromTo(
      storyRef.current?.querySelector(".story-image"),
      { opacity: 0, x: -100, rotation: -10 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      storyRef.current?.querySelector(".story-text"),
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [gsap, ScrollTrigger])

  return (
    <section ref={storyRef} className="bg-transparent py-16 px-6 md:py-24 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        <div className="story-image w-1/3 h-auto flex justify-center">
          <img
            src="pizzeria1.png"
            alt="Pizzeria"
            className="w-full max-w-lg rounded-3xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="story-text w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6">
          <h2 className="oswald text-4xl md:text-5xl text-white font-bold leading-tight">Passione per la Pizza</h2>

          <p className="oswald text-2xl md:text-2xl text-white leading-relaxed">
            Da <span className="text-custom-brown font-bold">Punto ICS</span>, ogni pizza è un'opera d'arte. Usiamo solo
            ingredienti freschi e selezionati per offrirti un gusto autentico e inconfondibile.
          </p>

          <h3 className="oswald text-3xl md:text-4xl text-custom-brown font-bold mt-4">Il nostro punto di forza?</h3>

          <p className="oswald text-2xl md:text-2xl text-white leading-relaxed">
            Uniamo la tradizione della pizza italiana con l'innovazione, proponendo nuove ricette e sapori in un
            ambiente accogliente e familiare.
          </p>

          <p className="oswald text-2xl md:text-2xl text-white leading-relaxed">
            E per chi cerca alternative, offriamo un <span className="text-custom-brown font-bold">senza glutine</span>
            che conquista anche i palati più esigenti!
          </p>
        </div>
      </div>
    </section>
  )
}
