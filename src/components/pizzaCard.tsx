"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

const COVERS = [
  "rot1-.png",
  "rot2-.png",
  "rot3-.png",
  "rot1-.png",
  "rot2-.png",
  "rot3-.png",
  "rot1-.png",
  "rot2-.png",
  "rot3-.png",
  "rot1-.png",
];

const BOXES_COUNT = COVERS.length;

export default function ScrollAlbumCarousel() {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, position: 0 });
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const [targetPosition, setTargetPosition] = useState(0);

  // Smooth animation
  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const diff = targetPosition - prev;
        if (Math.abs(diff) < 0.001) return targetPosition;
        return prev + diff * 0.12;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetPosition]);

  // Detect when carousel is centered
  useEffect(() => {
    const checkCarouselVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibilityRatio = visibleHeight / windowHeight;

      // Attivo solo quando è quasi completamente visibile
      setIsCarouselActive(visibilityRatio > 0.95);
    };

    checkCarouselVisibility();
    window.addEventListener("scroll", checkCarouselVisibility, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", checkCarouselVisibility);
  }, []);

  // Navigation
  const next = useCallback(() => {
    setTargetPosition((prev) => prev - 1);
  }, []);

  const prev = useCallback(() => {
    setTargetPosition((prev) => prev + 1);
  }, []);

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

  // FIX TRACKPAD + SCROLL NATURALE
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isCarouselActive) return;

      // Se l’utente scrolla forte → lascia scendere la pagina
      if (Math.abs(e.deltaY) > 25) return;

      e.preventDefault();

      // Normalizzazione per trackpad
      const delta = e.deltaY * 0.003;
      setTargetPosition((prev) => prev + delta);
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel);
  }, [isCarouselActive]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isCarouselActive) return;

      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        e.preventDefault();
        prev();
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        e.preventDefault();
        next();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, isCarouselActive]);

  // Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isCarouselActive) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, position: targetPosition });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isCarouselActive) return;

    const deltaX = e.clientX - dragStart.x;
    const dragInfluence = deltaX * 0.01;
    setTargetPosition(dragStart.position + dragInfluence);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarouselActive) return;
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, position: targetPosition });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isCarouselActive) return;

    const deltaX = e.touches[0].clientX - dragStart.x;
    const dragInfluence = deltaX * 0.01;
    setTargetPosition(dragStart.position + dragInfluence);
  };

  const handleTouchEnd = () => setIsDragging(false);

  // 3D transforms
  const getBoxTransform = (index: number) => {
    let distance = index - position;

    while (distance > BOXES_COUNT / 2) distance -= BOXES_COUNT;
    while (distance < -BOXES_COUNT / 2) distance += BOXES_COUNT;

    const spacing = 250;
    const xPos = distance * spacing;

    let rotateY = Math.sign(distance) * Math.min(Math.abs(distance) * 35, 55);
    let scale = 1;
    let opacity = 1;
    let zIndex = 1000;
    let z = 0;

    const absDistance = Math.abs(distance);

    if (absDistance < 0.3) {
      scale = 1.2;
      z = 150;
      zIndex = 2000;
      rotateY = 0;
    } else if (absDistance < 1.5) {
      scale = 1;
      z = 100;
      zIndex = 1500;
      opacity = 0.95;
    } else if (absDistance < 3) {
      scale = 0.85;
      z = 50;
      zIndex = 1000;
      opacity = 0.8;
    } else if (absDistance < 5) {
      scale = 0.7;
      z = 0;
      zIndex = 500;
      opacity = 0.6;
    } else {
      scale = 0.6;
      z = -50;
      zIndex = 100;
      opacity = 0.4;
    }

    return {
      transform: `translate(-50%, -50%) translateX(${xPos}px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${z}px)`,
      opacity,
      zIndex,
      transition: isDragging ? "none" : "all 0.3s ease-out",
    };
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-transparent overflow-hidden select-none"
    >
      <div
        ref={containerRef}
        className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isCarouselActive
            ? "cursor-grab active:cursor-grabbing"
            : "cursor-default"
        }`}
        style={{
          perspective: "7000px",
          transformStyle: "preserve-3d",
          opacity: isCarouselActive ? 1 : 0.7,
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

          return (
            <div
              key={index}
              className="absolute w-80 h-80"
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
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          );
        })}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-5 z-10">
          {COVERS.map((_, index) => {
            const currentIndex = Math.round(position) % BOXES_COUNT;
            const normalizedCurrent =
              ((currentIndex % BOXES_COUNT) + BOXES_COUNT) % BOXES_COUNT;
            const isActive = index === normalizedCurrent;

            return (
              <button
                key={index}
                onClick={() => isCarouselActive && goToAlbum(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white scale-125"
                    : "bg-gray-500 hover:bg-gray-300"
                } ${!isCarouselActive ? "opacity-50" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
