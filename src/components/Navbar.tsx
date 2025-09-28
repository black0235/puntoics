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

  // refs
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // animazioni GSAP
  useEffect(() => {
    if (isOpen) {
      // sidebar slide in
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      // overlay fade in
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
      });
      // animazione dei link con stagger
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
        }
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
      className={`fixed top-0 left-0 w-full px-4 py-0 flex items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-custom-brown shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div
          className="bg-transparent items-center m-5"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className=" hover:cursor-pointer rounded-2xl transition-all duration-300  md:w-20"
          />
        </div>

        {/* Nav desktop */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => handleNavigation("about")}
            className={`oswald text-xl border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out ${
              activeSection === "about"
                ? "text-white border-white"
                : "text-white"
            }`}
          >
            NICOLOSI
          </button>

          <NavLink
            to="/puntoics-delivery"
            className={({ isActive }) =>
              `oswald text-xl border-b-2 border-transparent hover:border-white hover:!text-white transition-all duration-300 ease-in-out ${
                isActive ? "text-white border-white" : "text-white"
              }`
            }
          >
            PUNTO ICS DELIVERY
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `oswald text-xl border-b-2 border-transparent hover:border-white hover:!text-white transition-all duration-300 ease-in-out ${
                isActive ? "text-white border-white" : "text-white"
              }`
            }
          >
            MENÙ
          </NavLink>
        </nav>

        {/* CTA desktop + hamburger mobile */}
        <div className="flex items-center space-x-3">
          <a href="tel:+39123456789" className="hidden md:block">
            <button
              type="button"
              className="oswald p-3 text-xl rounded-lg bg-gray-50 opacity-80 text-black hover:bg-gray-200 transition-all duration-300"
            >
              CHIAMACI
            </button>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 mr-2 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-auto"
        style={{ opacity: 0, visibility: "hidden" }}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar mobile fullscreen */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 right-0 h-full w-full bg-custom-brown z-50 flex flex-col justify-between p-6"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Pulsante Chiudi */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-bold focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div
          ref={menuItemsRef}
          className="flex flex-col space-y-6 text-left mt-8 flex-grow"
        >
          <button
            onClick={() => handleNavigation("about")}
            className={`oswald text-lg text-left ${
              activeSection === "about" ? "text-yellow-300" : "text-white"
            }`}
          >
            NICOLOSI
          </button>
          <NavLink
            to="/puntoics-delivery"
            className="oswald text-lg text-white text-left"
            onClick={() => setIsOpen(false)}
          >
            PUNTO ICS DELIVERY
          </NavLink>
          <NavLink
            to="/menu"
            className="oswald text-lg text-white text-left"
            onClick={() => setIsOpen(false)}
          >
            MENÙ
          </NavLink>
        </div>

        {/* Divider + CTA */}
        <div className="mb-6">
          <hr className="border-white opacity-30 mb-4" />
          <a href="tel:+39123456789">
            <button
              type="button"
              className="oswald w-full p-3 text-lg rounded-lg bg-gray-50 opacity-80 text-black hover:bg-gray-200 transition-all duration-300"
            >
              CHIAMACI
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
