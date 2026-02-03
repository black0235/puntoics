"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MiniSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Immagine entra da sinistra con rotazione
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Testo entra da destra
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Decorazioni
      gsap.fromTo(
        decorRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Quote line animation
      gsap.fromTo(
        quoteRef.current,
        { width: 0 },
        {
          width: "100%",
          duration: 1,
          ease: "power2.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 oswald md:py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-custom-brown1" />

      {/* Pattern sottile */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Immagine a sinistra */}
            <div ref={imageRef} className="lg:w-1/2 relative">
              <div className="relative h-56 md:h-72 lg:h-80 min-h-[300px]">
                <img src="firstset.jpg" alt="Pizza" className="object-cover" />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-custom-brown/60 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-custom-brown/60 via-transparent to-transparent lg:hidden" />
                {/* Badge decorativo */}
              </div>
            </div>

            {/* Contenuto a destra */}
            <div
              ref={textRef}
              className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              {/* Titolo */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Il Gusto che Racconta{" "}
                <span className="text-custom-brown">una Storia</span>
              </h2>

              {/* Linea decorativa animata */}
              <div className="h-1 bg-custom-brown1/30 rounded-full mb-8 overflow-hidden">
                <div
                  ref={quoteRef}
                  className="h-full bg-custom-brown rounded-full"
                />
              </div>

              {/* Testo */}
              <div className="space-y-6 text-white/90">
                <p className="text-sm md:text-lg leading-relaxed">
                  Ogni pizza racconta una storia fatta di{" "}
                  <span className="text-custom-brown font-semibold">
                    passione e ingredienti selezionati
                  </span>
                  .
                </p>

                <p className="text-sm md:text-lg leading-relaxed text-white/80">
                  Prepariamo{" "}
                  <span className="text-custom-brown font-semibold">
                    impasti artigianali con lievitazione naturale
                  </span>{" "}
                  e aggiungiamo solo i migliori prodotti freschi, per offrirti
                  un'esperienza di{" "}
                  <span className="text-custom-brown font-semibold">
                    gusto senza pari
                  </span>
                  .
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-custom-brown">
                    48h
                  </p>
                  <p className="text-xs md:text-sm text-white/60 mt-1">
                    Lievitazione
                  </p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-xl md:text-2xl font-bold text-custom-brown">
                    100%
                  </p>
                  <p className="text-xs md:text-sm text-white/60 mt-1">
                    Ingredienti Freschi
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-custom-brown">
                    30+
                  </p>
                  <p className="text-xs md:text-sm text-white/60 mt-1">
                    Anni di Esperienza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
