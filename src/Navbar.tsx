import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "/public/logo.png"; // Import del logo
import "./App.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Aggiungi un listener per lo scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-custom-brown shadow-md " : "bg-transparent"
      }`}
    >
      {/* Logo con sfondo trasparente */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div
        className="bg-transparent items-center m-5 "
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="logo"
          className=" scale-125  hover:cursor-pointer  rounded-2xl transition-all duration-300  md:w-20"
        />
      </div>

      {/* Menu */}
      <nav className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white transition-all duration-300 ease-in-out ${
              isActive ? "text-white border-white" : "text-white"
            }`
          }
        >
          CHI SIAMO
        </NavLink>

        <NavLink
          to="/service"
          className={({ isActive }) =>
            `oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white transition-all duration-300 ease-in-out ${
              isActive ? "text-white border-white" : "text-white"
            }`
          }
        >
          SERVIZI
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            `oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white transition-all duration-300 ease-in-out ${
              isActive ? "text-white border-white" : "text-white"
            }`
          }
        >
          PROGRESSI
        </NavLink>

        <NavLink
          to="/profilo"
          className={({ isActive }) =>
            `oswald text-xl border-b-2 md:block hidden border-transparent hover:border-white transition-all duration-300 ease-in-out ${
              isActive ? "text-white border-white" : "text-white"
            }`
          }
        >
          PROFILO
        </NavLink>
      </nav>

      {/* Bottone CONTATTACI */}
      <NavLink to="/login">
        <button type="button" className="oswald p-3 text-xl  rounded-lg bg-white text-black hover:bg-gray-300 transition-all duration-300 mr-4">
          LOGIN
        </button>
      </NavLink>
    </header>
  );
}
