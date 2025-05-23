import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import logo from "/public/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Attendi che la homepage si carichi prima di scrollare
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-4  py-0 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-custom-brown shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div
        className="bg-transparent items-center m-5"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="logo"
          className="scale-110 hover:cursor-pointer rounded-2xl transition-all duration-300 md:w-20"
        />
      </div>

      {/* NAV */}
      <nav className="flex space-x-8">
        <button
          onClick={() => handleNavigation("about")}
          className={`oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white transition-all duration-300 ease-in-out ${
            activeSection === "about" ? "text-white border-white" : "text-white"
          }`}
        >
          NICOLOSI
        </button>

        <NavLink
          to="/puntoics-delivery"
          className={({ isActive }) =>
            `oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white  hover:!text-white transition-all duration-300 ease-in-out ${
              isActive ? "text-white border-white" : "text-white"
            }`
          }
        >
          PUNTO ICS DELIVERY
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white  hover:!text-white transition-all duration-300 ease-in-out ${
              isActive ? "text-white border-white" : "text-white"
            }`
          }
        >
          MENÙ
        </NavLink>
      </nav>

      {/* Bottone CONTATTACI */}
      <a href="tel:+39123456789">
        <button
          type="button"
          className="oswald p-3 text-xl rounded-lg bg-gray-50 opacity-80   text-black hover:bg-gray-200 transition-all duration-300 mr-4"
        >
          CHIAMACI
        </button>
      </a>
    </header>
  );
}
