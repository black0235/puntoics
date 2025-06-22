"use client"

import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface HeroSectionProps {
  onGSAPLoad?: (gsap: any, ScrollTrigger: any) => void
}

export default function HeroSection({ onGSAPLoad }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      // Hero Animation
      gsap.fromTo(
        heroRef.current?.querySelector(".hero-title"),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        },
      )

      gsap.fromTo(
        heroRef.current?.querySelector(".hero-subtitle"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 1,
        },
      )

      gsap.fromTo(
        heroRef.current?.querySelector(".hero-button"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.5,
        },
      )

      if (onGSAPLoad) {
        onGSAPLoad(gsap, ScrollTrigger)
      }
    }

    loadGSAP()
  }, [onGSAPLoad])

  return (
    <div ref={heroRef} className="flex bg-video-container h-screen relative overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-80">
        <source src="homepage.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex flex-col-reverse lg:flex-row sm:p-0 lg:p-6 m-5 md:m-28 gap-5 bg-transparent z-10">
        <div className="text-left mt-16 w-full lg:w-1/2">
          <h1 className="hero-title oswald text-4xl md:text-7xl text-white mb-6 drop-shadow-lg">
            Da noi la qualità è di casa, il gusto è una certezza!
          </h1>
          <p className="hero-subtitle oswald text-2xl md:text-3xl mt-10 text-white leading-relaxed">
            Abbiamo soddisfatto <span className="font-semibold ">oltre 1000+ clienti...</span> con le nostre pizze, ora
            è il tuo turno!
          </p>
          <button
            className="hero-button mt-8 px-6 py-3 bg-custom-brown text-white text-xl oswald rounded-full hover:bg-custom-brown1 transition-all duration-300"
            onClick={() => navigate("/menu")}
          >
            Scopri il Menu
          </button>
        </div>
      </div>
    </div>
  )
}
