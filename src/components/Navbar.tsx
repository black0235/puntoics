"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import gsap from "gsap";
import logo from "/public/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);

  // refs
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<HTMLDivElement | null>(null);
  const callMenuRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- SCROLL + SECTIONS ---------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  /* ---------------- SIDEBAR GSAP ---------------- */
  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
      });
      gsap.fromTo(
        menuItemsRef.current?.children || [],
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.3,
      });
    }
  }, [isOpen]);

  /* ---------------- CALL MENU GSAP ---------------- */
  useEffect(() => {
    if (!callMenuRef.current) return;

    if (isCallOpen) {
      gsap.fromTo(
        callMenuRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(callMenuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.2,
        ease: "power3.in",
      });
    }
  }, [isCallOpen]);

  /* ---------------- NAVIGATION ---------------- */
  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-custom-brown shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* LOGO */}
        <div className="m-5 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={logo || "/placeholder.svg"}
            alt="logo"
            className="rounded-2xl md:w-20"
          />
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
          <NavLink
            to="/nicolosi"
            className={({ isActive }) =>
              `oswald text-xl border-b-2 transition
               text-white hover:text-white focus:text-white active:text-white
               ${isActive ? "border-white" : "border-transparent"}
               hover:border-white`
            }
          >
            NICOLOSI
          </NavLink>

          <NavLink
            to="/catania"
            className={({ isActive }) =>
              `oswald text-xl border-b-2 transition
               text-white hover:text-white focus:text-white active:text-white
               ${isActive ? "border-white" : "border-transparent"}
               hover:border-white`
            }
          >
            CATANIA
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `oswald text-xl border-b-2 transition
               text-white hover:text-white focus:text-white active:text-white
               ${isActive ? "border-white" : "border-transparent"}
               hover:border-white`
            }
          >
            MENÙ
          </NavLink>
        </nav>

        {/* CTA + HAMBURGER */}
        <div className="flex items-center gap-3 relative">
          {/* CALL BUTTON */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsCallOpen((p) => !p)}
              className="oswald p-3 text-xl rounded-lg bg-gray-50/80 text-black hover:bg-gray-200 transition"
            >
              CHIAMACI
            </button>

            {isCallOpen && (
              <div
                ref={callMenuRef}
                className="absolute right-0 mt-4 w-72 bg-gradient-to-br from-custom-brown to-custom-brown1 rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-sm"
              >
                {/* Header del menu */}
                <div className="px-5 py-3 border-b border-white/10 bg-white/5">
                  <p className="oswald text-white/70 text-sm tracking-wider uppercase">
                    Scegli la sede
                  </p>
                </div>

                {/* Nicolosi */}
                <a
                  href="tel:+39123456789"
                  onClick={() => setIsCallOpen(false)}
                  className="group flex items-center gap-4 px-5 py-4 text-white hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="oswald text-lg font-medium">Nicolosi</p>
                    <p className="text-white/60 text-sm">+39 123 456 789</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                {/* Divider */}
                <div className="mx-5 border-t border-white/10" />

                {/* Catania */}
                <a
                  href="tel:+39987654321"
                  onClick={() => setIsCallOpen(false)}
                  className="group flex items-center gap-4 px-5 py-4 text-white hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="oswald text-lg font-medium">Catania</p>
                    <p className="text-white/60 text-sm">+39 987 654 321</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40"
        style={{ opacity: 0, visibility: "hidden" }}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR MOBILE */}
      <div
        ref={sidebarRef}
        className="fixed inset-0 bg-custom-brown z-50 p-6 flex flex-col"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div ref={menuItemsRef} className="flex flex-col gap-6 mt-10 flex-grow">
          <button
            onClick={() => handleNavigation("about")}
            className="oswald text-white text-lg text-left"
          >
            NICOLOSI
          </button>
          <NavLink
            to="/catania"
            className="oswald text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            CATANIA
          </NavLink>
          <NavLink
            to="/menu"
            className="oswald text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            MENÙ
          </NavLink>
        </div>

        {/* CALL MOBILE */}
        <div className="relative">
          <button
            onClick={() => setIsCallOpen((p) => !p)}
            className="oswald w-full p-3 text-xl rounded-lg bg-gray-50/80 text-black"
          >
            CHIAMACI
          </button>

          {isCallOpen && (
            <div
              ref={callMenuRef}
              className="mt-3 bg-gradient-to-br from-custom-brown1/80 to-custom-brown1 rounded-2xl shadow-xl border border-white/10 overflow-hidden"
            >
              {/* Header */}
              <div className="px-5 py-3 border-b border-white/10 bg-white/5">
                <p className="oswald text-white/70 text-sm tracking-wider uppercase">
                  Scegli la sede
                </p>
              </div>

              {/* Nicolosi */}
              <a
                href="tel:+39123456789"
                onClick={() => {
                  setIsCallOpen(false);
                  setIsOpen(false);
                }}
                className="group flex items-center gap-4 px-5 py-4 text-white hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="oswald text-lg font-medium">Nicolosi</p>
                  <p className="text-white/60 text-sm">+39 123 456 789</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Divider */}
              <div className="mx-5 border-t border-white/10" />

              {/* Catania */}
              <a
                href="tel:+39987654321"
                onClick={() => {
                  setIsCallOpen(false);
                  setIsOpen(false);
                }}
                className="group flex items-center gap-4 px-5 py-4 text-white hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="oswald text-lg font-medium">Catania</p>
                  <p className="text-white/60 text-sm">+39 987 654 321</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
