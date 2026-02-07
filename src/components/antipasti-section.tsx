"use client";

import { useRef, useEffect } from "react";

interface AntipastiSectionProps {
  gsap?: any;
  ScrollTrigger?: any;
}

export default function AntipastiSection({
  gsap,
  ScrollTrigger,
}: AntipastiSectionProps) {
  const antipastiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    // Antipasti Section Animation GSAP
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
    );
  }, [gsap, ScrollTrigger]);

  return (
    <div
      ref={antipastiRef}
      className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-4 p-4 sm:p-6 md:p-12"
    >
      {/* Immagine */}
      <div className="antipasti-image flex w-full md:w-1/3 items-center justify-center mt-4 md:mt-10">
        <img
          src="patatine.jpg"
          alt="Antipasti"
          className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto shadow-xl transform scale-90 md:scale-100 hover:scale-105 transition-transform duration-500 mx-auto"
        />
      </div>

      {/* Testo */}
      <div className="flex flex-col m-4 sm:m-6 w-full md:w-1/2 items-start text-center md:text-left">
        <h2 className="oswald text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6 font-bold drop-shadow-lg">
          Antipasti da Gustare: Un Inizio Croccante e Irresistibile
        </h2>
        <p className="oswald text-sm md:text-lg text-white leading-relaxed">
          I nostri antipasti sono il{" "}
          <span className="text-custom-brown font-semibold">
            perfetto inizio
          </span>{" "}
          per ogni pasto, pensati per{" "}
          <span className="text-custom-brown font-semibold">
            stuzzicare il palato
          </span>{" "}
          e prepararti a un'esperienza culinaria{" "}
          <span className="text-custom-brown font-semibold">unica</span>. Dalle{" "}
          <span className="text-custom-brown font-semibold">
            fritture croccanti
          </span>{" "}
          alle{" "}
          <span className="text-custom-brown font-semibold">
            verdure fresche
          </span>{" "}
          con condimenti ricercati, ogni piatto è preparato con ingredienti di
          alta qualità e passione. Assapora il mix di sapori che esaltano ogni
          ingrediente, per un inizio{" "}
          <span className="text-custom-brown font-semibold">
            indimenticabile
          </span>{" "}
          del tuo pranzo o cena.
          <br />
          <span className="font-bold text-custom-brown">
            Prova i nostri fritti
          </span>{" "}
          che renderanno ogni boccone ancora più speciale.
        </p>
      </div>
    </div>
  );
}
