"use client";

import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import logo from "/public/logo.png";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const navigate = useNavigate();

  // Stelle animate
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
    color: Math.random() > 0.5 ? "#592932" : "#b3815e",
    opacity: Math.random() * 0.5 + 0.3,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stelle animate
      gsap.utils.toArray<HTMLElement>(".star").forEach((star) => {
        gsap.to(star, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          opacity: "random(0.2, 0.8)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: "random(0, 2)",
        });
      });

      // Logo
      tl.fromTo(
        logoRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1 },
      );

      // Linee decorative
      tl.fromTo(
        [lineLeftRef.current, lineRightRef.current],
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6 },
        "-=0.5",
      );

      // Titolo
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      );

      // Sottotitolo
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "-=0.3",
      );

      // Pulsanti
      const links = buttonsRef.current?.children;
      if (links) {
        tl.fromTo(
          links,
          { y: 40, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.15 },
          "-=0.2",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-custom-brown1 text-white relative overflow-hidden"
    >
      {/* Gradient di sfondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-brown via-black to-custom-brown1 opacity-80" />

      {/* Stelle animate */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            }}
          />
        ))}
      </div>

      {/* Contenuto principale */}
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 px-6 py-12">
        {/* Logo */}
        <div ref={logoRef} className="mb-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-custom-brown1/50 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            <img src={logo} alt="logo" className="rounded-2xl md:w-20" />
          </div>
        </div>

        {/* Linee decorative e titolo */}
        <div className="flex items-center gap-4 md:gap-6 w-full max-w-2xl">
          <div
            ref={lineLeftRef}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-custom-brown1/60 origin-right"
          />
          <h1
            ref={titleRef}
            className="oswald text-3xl md:text-5xl lg:text-6xl text-white text-center drop-shadow-lg tracking-wide"
          >
            Benvenuto a <span className="text-custom-brown1">Punto ICS</span>
          </h1>
          <div
            ref={lineRightRef}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-custom-brown1/60 origin-left"
          />
        </div>

        {/* Sottotitolo */}
        <p
          ref={subtitleRef}
          className="text-white/60 oswald text-base md:text-lg tracking-widest uppercase"
        >
          Scegli la tua destinazione
        </p>

        {/* Pulsanti di navigazione */}
        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4"
        >
          <button
            onClick={() => navigate("/nicolosi")}
            className="px-8 py-3 bg-custom-brown hover:bg-custom-brown1 transition-all duration-300 text-xl oswald rounded-full shadow-lg"
          >
            Nicolosi
          </button>
          <button
            onClick={() => navigate("/catania")}
            className="px-8 py-3 bg-custom-brown hover:bg-custom-brown1 transition-all duration-300 text-xl oswald rounded-full shadow-lg"
          >
            Catania
          </button>
          <button
            onClick={() => navigate("/menu")}
            className="px-8 py-3 bg-custom-brown hover:bg-custom-brown1 transition-all duration-300 text-xl oswald rounded-full shadow-lg"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}
