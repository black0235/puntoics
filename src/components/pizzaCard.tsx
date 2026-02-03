"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

const COVERS = [
  "/rot1-.png",
  "/rot2-.png",
  "/rot3-.png",
  "/rot1-.png",
  "/rot2-.png",
  "/rot3-.png",
  "/rot1-.png",
  "/rot2-.png",
  "/rot3-.png",
  "/rot1-.png",
];

const PIZZA_NAMES = [
  "Margherita",
  "Diavola",
  "Quattro Formaggi",
  "Marinara",
  "Capricciosa",
  "Prosciutto",
  "Vegetariana",
  "Bufalina",
  "Napoli",
  "Speciale",
];

const BOXES_COUNT = COVERS.length;

export default function ScrollAlbumCarousel() {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, position: 0 });
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const [targetPosition, setTargetPosition] = useState(0);

  // Smooth animation
  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const diff = targetPosition - prev;
        if (Math.abs(diff) < 0.001) return targetPosition;
        return prev + diff * 0.1;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetPosition]);

  // Detect carousel visibility
  useEffect(() => {
    const checkCarouselVisibility = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibilityRatio = visibleHeight / windowHeight;
      setIsCarouselActive(visibilityRatio > 0.95);
    };

    checkCarouselVisibility();
    window.addEventListener("scroll", checkCarouselVisibility, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", checkCarouselVisibility);
  }, []);

  // Navigation
  const goToAlbum = useCallback(
    (index: number) => {
      const currentIndex = Math.round(position) % BOXES_COUNT;
      let diff = index - currentIndex;
      if (diff > BOXES_COUNT / 2) diff -= BOXES_COUNT;
      else if (diff < -BOXES_COUNT / 2) diff += BOXES_COUNT;
      setTargetPosition((prev) => prev + diff);
    },
    [position],
  );

  // Scroll e drag
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isCarouselActive) return;
      if (Math.abs(e.deltaY) > 25) return;
      e.preventDefault();
      const delta = e.deltaY * 0.008;
      setTargetPosition((prev) => prev + delta);
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel);
  }, [isCarouselActive]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isCarouselActive) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, position: targetPosition });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isCarouselActive) return;
    const deltaX = e.clientX - dragStart.x;
    setTargetPosition(dragStart.position + deltaX * 0.015);
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarouselActive) return;
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, position: targetPosition });
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isCarouselActive) return;
    const deltaX = e.touches[0].clientX - dragStart.x;
    setTargetPosition(dragStart.position + deltaX * 0.015);
  };
  const handleTouchEnd = () => setIsDragging(false);

  // 3D transforms
  const getBoxTransform = (index: number) => {
    let distance = index - position;
    while (distance > BOXES_COUNT / 2) distance -= BOXES_COUNT;
    while (distance < -BOXES_COUNT / 2) distance += BOXES_COUNT;

    const spacing = 320;
    const xPos = distance * spacing;

    let rotateY = Math.sign(distance) * Math.min(Math.abs(distance) * 30, 50);
    let scale = 1;
    let opacity = 1;
    let zIndex = 1000;
    let z = 0;

    const absDistance = Math.abs(distance);
    if (absDistance < 0.3) {
      scale = 1.25;
      z = 200;
      zIndex = 2000;
      rotateY = 0;
    } else if (absDistance < 1.5) {
      scale = 1.05;
      z = 120;
      zIndex = 1500;
      opacity = 0.9;
    } else if (absDistance < 3) {
      scale = 0.85;
      z = 60;
      zIndex = 1000;
      opacity = 0.7;
    } else if (absDistance < 5) {
      scale = 0.7;
      z = 0;
      zIndex = 500;
      opacity = 0.5;
    } else {
      scale = 0.55;
      z = -60;
      zIndex = 100;
      opacity = 0.3;
    }

    return {
      transform: `translate(-50%, -50%) translateX(${xPos}px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${z}px)`,
      opacity,
      zIndex,
      transition: isDragging
        ? "none"
        : "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  const currentIndex = Math.round(position) % BOXES_COUNT;
  const normalizedCurrent =
    ((currentIndex % BOXES_COUNT) + BOXES_COUNT) % BOXES_COUNT;

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden select-none hidden md:block"
      style={{
        background:
          "linear-gradient(180deg, #592932 0%, #1a0a0e 50%, #b3815e 100%)",
      }}
    >
      {/* Titolo sezione */}
      <div className="absolute top-12 left-0 right-0 z-20 text-center">
        <p className="text-white/60 oswald text-sm tracking-[0.3em] uppercase mb-2">
          Scopri le nostre
        </p>
        <h2 className="oswald text-4xl md:text-5xl text-white font-light">
          Specialità della{" "}
          <span className="text-custom-brown1 font-medium">Casa</span>
        </h2>
      </div>

      {/* Nome pizza attiva */}
      <div className="absolute top-32 left-0 right-0 z-20 text-center pointer-events-none">
        <p className="oswald text-2xl text-white/80 font-light tracking-wide">
          {PIZZA_NAMES[normalizedCurrent]}
        </p>
      </div>

      {/* Cerchio decorativo dietro */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #b3815e 0%, transparent 70%)",
        }}
      />

      {/* Container carousel */}
      <div
        ref={containerRef}
        className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isCarouselActive
            ? "cursor-grab active:cursor-grabbing"
            : "cursor-default"
        }`}
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
          opacity: isCarouselActive ? 1 : 0.8,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {COVERS.map((cover, index) => {
          const style = getBoxTransform(index);
          const isActive = index === normalizedCurrent;
          return (
            <div
              key={index}
              className="absolute w-72 h-72 md:w-80 md:h-80"
              style={{
                ...style,
                left: "50%",
                top: "50%",
                transformStyle: "preserve-3d",
              }}
              onClick={() => isCarouselActive && goToAlbum(index)}
            >
              <img
                src={cover}
                alt={PIZZA_NAMES[index]}
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              {isActive && (
                <div
                  className="absolute -inset-8 rounded-full opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, #b3815e 0%, transparent 70%)",
                    filter: "blur(30px)",
                    zIndex: -1,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Indicatori */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {COVERS.map((_, index) => {
          const isActive = index === normalizedCurrent;
          return (
            <button
              key={index}
              onClick={() => isCarouselActive && goToAlbum(index)}
              className={`rounded-full transition-all duration-400 ${
                isActive
                  ? "w-8 h-2 bg-custom-brown1"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              } ${!isCarouselActive ? "opacity-50" : ""}`}
            />
          );
        })}
      </div>

      {/* Frecce navigazione */}
      <button
        onClick={() => setTargetPosition((prev) => prev + 1)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setTargetPosition((prev) => prev - 1)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Hint scroll */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-white/40 text-xs oswald tracking-wider">
          Scorri o trascina per esplorare
        </p>
      </div>
    </div>
  );
}
