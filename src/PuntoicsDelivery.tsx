"use client"

import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import HeroSection from "./components/hero-section"
import StorySection from "./components/story-section"
import ServicesSection from "./components/services-section"
import AntipastiSection from "./components/antipasti-section"
import ImpastiSection from "./components/impasti-section"
import AtmosferaSection from "./components/atmosfera-section"
import CTASection from "./components/cta-section"
import MenuSection from "./components/menu-section"
import IngredientiSection from "./components/ingredienti-section"
import ReviewsSection from "./components/reviews-section"
import ContactSection from "./components/contact-section"
import ScrollAlbumCarousel from "./components/pizzaCard"

function PuntoicsDelivery() {
  const [count, setCount] = useState(0)
  const [gsapLoaded, setGsapLoaded] = useState<{ gsap: any; ScrollTrigger: any } | null>(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  const handleGSAPLoad = useCallback((gsap: any, ScrollTrigger: any) => {
    setGsapLoaded({ gsap, ScrollTrigger })
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      // Hero Animation
      gsap.fromTo(
        document.querySelector(".hero-title"),
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
        document.querySelector(".hero-subtitle"),
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
        document.querySelector(".hero-button"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.5,
        },
      )

      // Story Section Animation
      gsap.fromTo(
        document.querySelector(".story-image"),
        { opacity: 0, x: -100, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: document.querySelector(".story-section"),
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        document.querySelector(".story-text"),
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: document.querySelector(".story-section"),
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Antipasti Section Animation
      gsap.fromTo(
        document.querySelector(".antipasti-image"),
        { opacity: 0, scale: 0.8, rotation: 10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: document.querySelector(".antipasti-section"),
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Impasti Images Animation
      gsap.fromTo(
        document.querySelectorAll(".impasto-image"),
        { opacity: 0, y: 100, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: document.querySelector(".impasti-section"),
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Atmosfera Section Animation
      gsap.fromTo(
        document.querySelector(".atmosfera-image"),
        { opacity: 0, scale: 1.3, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: document.querySelector(".atmosfera-section"),
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Floating Animation per le icone
      // Implementazione delle animazioni per le icone
    }

    loadGSAP()
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <div className="bg-custom-brown1">
        <HeroSection onGSAPLoad={handleGSAPLoad} />

   

        <StorySection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

        <ServicesSection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

             {/* <PizzaCarousel/> */} <ScrollAlbumCarousel/>

        {/* Storia Section */}
        <div className="bg-custom-brown story-section flex flex-col md:flex-row items-center justify-center gap-5 p-3">
          <div className="flex flex-col m-6 w-full md:w-1/3 items-start">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Il Gusto che Racconta una Storia
            </h2>
            <p className="oswald text-2xl mt-5 text-white">
              Ogni pizza racconta una storia fatta di
              <span className="text-2xl text-custom-brown1"> passione e ingredienti selezionati.</span>
              <br />
              <br />
              Prepariamo{" "}
              <span className="text-2xl text-custom-brown1"> impasti artigianali con lievitazione naturale</span> e
              aggiungiamo solo i migliori prodotti freschi, per offrirti un'esperienza di{" "}
              <span className="text-custom-brown1"> gusto senza pari.</span>
              <br />
              <br />
              <span className="text-custom-brown1"> Dalla tradizione alla modernità,</span> ogni morso è un viaggio che
              ti farà innamorare.
            </p>
          </div>
          <div className="flex w-full md:w-1/2  items-center justify-center">
            <img
              src="firstset.jpg"
              alt="Pizza"
              className="rounded-2xl scale-75 md:scale-90 h-full max-w-md m-4 shadow-md transition-transform transform hover:scale-100"
            />
          </div>
        </div>

        <AntipastiSection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

        <ImpastiSection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

        <AtmosferaSection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

        <CTASection />

        <MenuSection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

        <IngredientiSection gsap={gsapLoaded?.gsap} ScrollTrigger={gsapLoaded?.ScrollTrigger} />

        <ReviewsSection />

        <ContactSection />
      </div>
    </>
  )
}

export default PuntoicsDelivery
