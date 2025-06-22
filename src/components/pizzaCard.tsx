"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowUpDown } from "lucide-react"

const COVERS =[
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
]


const BOXES_COUNT = COVERS.length

export default function ScrollAlbumCarousel() {
  const [position, setPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, position: 0 })
  const [isCarouselActive, setIsCarouselActive] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Smooth position animation
  const [targetPosition, setTargetPosition] = useState(0)

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const diff = targetPosition - prev
        if (Math.abs(diff) < 0.001) return targetPosition
        return prev + diff * 0.12
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [targetPosition])

  // Check if carousel section is in viewport and centered
  useEffect(() => {
    const checkCarouselVisibility = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Consider carousel active when section is mostly visible (at least 70% in viewport)
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      const visibilityRatio = visibleHeight / windowHeight

      setIsCarouselActive(visibilityRatio > 0.7)
    }

    // Check on scroll
    const handleScroll = () => {
      checkCarouselVisibility()
    }

    // Initial check
    checkCarouselVisibility()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation functions
  const next = useCallback(() => {
    setTargetPosition((prev) => prev - 1)
  }, [])

  const prev = useCallback(() => {
    setTargetPosition((prev) => prev + 1)
  }, [])

  const goToAlbum = useCallback(
    (index: number) => {
      const currentIndex = Math.round(position) % BOXES_COUNT
      let diff = index - currentIndex

      if (diff > BOXES_COUNT / 2) {
        diff -= BOXES_COUNT
      } else if (diff < -BOXES_COUNT / 2) {
        diff += BOXES_COUNT
      }

      setTargetPosition((prev) => prev + diff)
    },
    [position],
  )

  // Scroll handling with section visibility check
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only intercept scroll if carousel section is active
      if (!isCarouselActive) {
        return // Let normal page scroll happen
      }

      const currentIndex = Math.round(position) % BOXES_COUNT
      const normalizedIndex = ((currentIndex % BOXES_COUNT) + BOXES_COUNT) % BOXES_COUNT
      const scrollDirection = e.deltaY > 0 ? "down" : "up"

      // Check if we should allow page scroll (at boundaries)
      const shouldAllowPageScroll =
        (normalizedIndex === 0 && scrollDirection === "up") ||
        (normalizedIndex === BOXES_COUNT - 1 && scrollDirection === "down")

      if (shouldAllowPageScroll) {
        return // Let page scroll continue
      }

      // Handle carousel scroll
      e.preventDefault()
      const delta = scrollDirection === "down" ? 0.5 : -0.5
      setTargetPosition((prev) => prev + delta)
    }

    // Add listener to document to catch all scroll events
    document.addEventListener("wheel", handleWheel, { passive: false })
    return () => document.removeEventListener("wheel", handleWheel)
  }, [position, isCarouselActive])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard if carousel is active
      if (!isCarouselActive) return

      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        e.preventDefault()
        next()
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        e.preventDefault()
        prev()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [next, prev, isCarouselActive])

  // Drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isCarouselActive) return
    setIsDragging(true)
    setDragStart({ x: e.clientX, position: targetPosition })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isCarouselActive) return

    const deltaX = e.clientX - dragStart.x
    const dragInfluence = deltaX * 0.01
    setTargetPosition(dragStart.position + dragInfluence)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarouselActive) return
    setIsDragging(true)
    setDragStart({ x: e.touches[0].clientX, position: targetPosition })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isCarouselActive) return

    const deltaX = e.touches[0].clientX - dragStart.x
    const dragInfluence = deltaX * 0.01
    setTargetPosition(dragStart.position + dragInfluence)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Calculate box transforms
  const getBoxTransform = (index: number) => {
    let distance = index - position

    while (distance > BOXES_COUNT / 2) distance -= BOXES_COUNT
    while (distance < -BOXES_COUNT / 2) distance += BOXES_COUNT

    const spacing = 250
    const xPos = distance * spacing

    let rotateY = 0
    if (Math.abs(distance) > 0.1) {
      rotateY = Math.sign(distance) * Math.min(Math.abs(distance) * 35, 55)
    }

    let scale = 1
    let opacity = 1
    let zIndex = 1000
    let z = 0

    const absDistance = Math.abs(distance)

    if (absDistance < 0.3) {
      scale = 1.2
      z = 150
      zIndex = 2000
      rotateY = 0
    } else if (absDistance < 1.5) {
      scale = 1
      z = 100
      zIndex = 1500
      opacity = 0.95
    } else if (absDistance < 3) {
      scale = 0.85
      z = 50
      zIndex = 1000
      opacity = 0.8
    } else if (absDistance < 5) {
      scale = 0.7
      z = 0
      zIndex = 500
      opacity = 0.6
    } else {
      scale = 0.6
      z = -50
      zIndex = 100
      opacity = 0.4
    }

    return {
      transform: `translate(-50%, -50%) translateX(${xPos}px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${z}px)`,
      opacity,
      zIndex,
      transition: isDragging ? "none" : "all 0.3s ease-out",
    }
  }

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-transparent overflow-hidden select-none">
      {/* Scroll indicator */}
   

      {/* Instructions *
      <div className="absolute top-4 left-4 text-gray-400 text-sm z-30 space-y-1">
        <p>Scroll to navigate albums</p>
        <p>Use arrow keys or drag</p>
        <p>Click album to select</p>
        <div className={`text-xs ${isCarouselActive ? "text-green-400" : "text-red-400"}`}>
          {isCarouselActive ? "● Carousel Active" : "● Carousel Inactive"}
        </div>
      </div>
/}
      {/* Main carousel container */}
      <div
        ref={containerRef}
        className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isCarouselActive ? "cursor-grab active:cursor-grabbing" : "cursor-default"
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
        {/* Album boxes */}
        {COVERS.map((cover, index) => {
          const style = getBoxTransform(index)

          return (
            <div
              key={index}
              className="absolute w-80  h-80 "
              style={{
                ...style,
                left: "50%",
                top: "50%",
                transformStyle: "preserve-3d",
              }}
              onClick={() => isCarouselActive && goToAlbum(index)}
            >
              <div className="relative w-full h-full group">
                <img
                  src={cover || "/placeholder.svg?height=224&width=224"}

                  className="w-full h-full  object-cover bg-trasparent  pointer-events-none"
                  draggable={false}
                />

            

                {/* Reflection */}
             
              </div>
            </div>
          )
        })}

        {/* Album indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  flex gap-5 z-10">
          {COVERS.map((_, index) => {
            const currentIndex = Math.round(position) % BOXES_COUNT
            const normalizedCurrent = ((currentIndex % BOXES_COUNT) + BOXES_COUNT) % BOXES_COUNT
            const isActive = index === normalizedCurrent

            return (
              <button
                key={index}
                onClick={() => isCarouselActive && goToAlbum(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white scale-125" : "bg-gray-500 hover:bg-gray-300"
                } ${!isCarouselActive ? "opacity-50" : ""}`}
                aria-label={`Go to album ${index + 1}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
