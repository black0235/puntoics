"use client"

import { useRef, useEffect } from "react"
import { FaRegArrowAltCircleDown } from "react-icons/fa"

interface ImpastiSectionProps {
  gsap?: any
  ScrollTrigger?: any
}

export default function ImpastiSection({ gsap, ScrollTrigger }: ImpastiSectionProps) {
  const impastiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return

    // Impasti Images Animation
    gsap.fromTo(
      impastiRef.current?.querySelectorAll(".impasto-image"),
      { opacity: 0, y: 100, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: impastiRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [gsap, ScrollTrigger])

  return (
    <div ref={impastiRef} className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-10 p-8">
      <div className="flex w-full flex-col md:w-full mx-10 items-center text-center md:text-left">
        <FaRegArrowAltCircleDown
          className="oswald text-5xl md:text-8xl animate-bounce text-custom-brown mb-8 font-bold drop-shadow-lg"
          onClick={() => {
            const section = document.getElementById("menu")
            section?.scrollIntoView({ behavior: "smooth" })
          }}
        />

        <div className="flex flex-col md:flex-row m-6 p-3 items-center justify-around gap-12">
          <div className="impasto-image relative group w-full md:w-1/3">
            <img
              src="sec1.png"
              alt="Impasto 1"
              className="w-auto scale-75 h-auto border-8 cursor-pointer border-custom-brown rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-90"
            />
          </div>
          <div className="impasto-image relative group w-full md:w-1/3">
            <img
              src="sec2.png"
              alt="Impasto 2"
              className="w-auto scale-75 h-auto border-8 cursor-pointer border-custom-brown rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-90"
            />
          </div>
          <div className="impasto-image relative group w-full md:w-1/3">
            <img
              src="sec3.png"
              alt="Impasto 3"
              className="w-auto scale-75 h-auto border-8 cursor-pointer border-custom-brown rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
