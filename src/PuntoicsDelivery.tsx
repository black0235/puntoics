"use client";

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import AntipastiSection from "./components/antipasti-section";
import ImpastiSection from "./components/impasti-section";
import AtmosferaSection from "./components/atmosfera-section";
import CTASection from "./components/cta-section";
import MenuSection from "./components/menu-section";
import IngredientiSection from "./components/ingredienti-section";
import ReviewsSection from "./components/reviews-section";
import ContactSection from "./components/contact-section";
import ScrollAlbumCarousel from "./components/pizzaCard";

function PuntoicsDelivery() {
  const [gsapLoaded, setGsapLoaded] = useState<{
    gsap: any;
    ScrollTrigger: any;
  } | null>(null);
  const navigate = useNavigate();

  const handleGSAPLoad = useCallback((gsap: any, ScrollTrigger: any) => {
    setGsapLoaded({ gsap, ScrollTrigger });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero Animation
      gsap.fromTo(
        document.querySelector(".hero-title"),
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 },
      );
      gsap.fromTo(
        document.querySelector(".hero-subtitle"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 1 },
      );
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
      );

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
      );
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
      );
    };

    loadGSAP();
  }, []);

  return (
    <div className="bg-custom-brown1 overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection onGSAPLoad={handleGSAPLoad} />

      {/* Story Section */}
      <div className="bg-custom-brown story-section flex flex-col md:flex-row items-center justify-center gap-5 p-4 sm:p-6 md:p-12">
        <div className="flex flex-col w-full md:w-1/3 items-start text-center md:text-left">
          <h2 className="swald text-4xl md:text-6xl lg:text-7xl oswald text-white mb-4 drop-shadow-lg">
            Il Gusto che Racconta una Storia
          </h2>
          <p className="text-xl md:text-2xl oswald text-white leading-relaxed mt-4">
            Ogni pizza racconta una storia fatta di
            <span className="text-custom-brown1 font-semibold">
              {" "}
              passione e ingredienti selezionati.
            </span>
            <br />
            <br />
            Prepariamo{" "}
            <span className="text-custom-brown1 font-semibold">
              impasti artigianali con lievitazione naturale
            </span>{" "}
            e aggiungiamo solo i migliori prodotti freschi, per offrirti
            un'esperienza di{" "}
            <span className="text-custom-brown1 font-semibold">
              gusto senza pari.
            </span>
          </p>
        </div>
        <div className="flex w-full md:w-1/2 items-center justify-center mt-4 md:mt-0">
          <img
            src="firstset.jpg"
            alt="Pizza"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto shadow-md transform scale-75 md:scale-90 hover:scale-100 transition-transform duration-500 mx-auto"
          />
        </div>
      </div>

      {/* Sezioni aggiuntive uniformi */}
      <ServicesSection
        gsap={gsapLoaded?.gsap}
        ScrollTrigger={gsapLoaded?.ScrollTrigger}
      />
      <ScrollAlbumCarousel />
      <AntipastiSection
        gsap={gsapLoaded?.gsap}
        ScrollTrigger={gsapLoaded?.ScrollTrigger}
      />
      <ImpastiSection
        gsap={gsapLoaded?.gsap}
        ScrollTrigger={gsapLoaded?.ScrollTrigger}
      />
      <AtmosferaSection ScrollTrigger={gsapLoaded?.ScrollTrigger} />
      <CTASection />
      <MenuSection
        gsap={gsapLoaded?.gsap}
        ScrollTrigger={gsapLoaded?.ScrollTrigger}
      />
      <IngredientiSection
        gsap={gsapLoaded?.gsap}
        ScrollTrigger={gsapLoaded?.ScrollTrigger}
      />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}

export default PuntoicsDelivery;
