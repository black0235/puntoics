"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import {
  FaSquareWhatsapp,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { toast } from "sonner";

type Inputs = {
  email: string;
};

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success("Iscrizione alla newsletter completata!");
    console.log("Email:", data.email);
    reset();
  };

  return (
    <footer className="bg-custom-brown text-white pt-16 pb-8 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 px-4">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaPizzaSlice className="text-custom-brown1 text-3xl" />
              <h3 className="oswald text-3xl font-bold">PUNTO ICS</h3>
            </div>
            <p className="oswald text-lg text-gray-300 mb-4">
              Da noi la qualità è di casa, il gusto è una certezza! Pizzeria e
              ristorante con specialità senza glutine.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/0958178851"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white  p-2 rounded-full hover:bg-custom-brown1 transition-all duration-300"
              >
                <FaSquareWhatsapp className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/puntoics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white  p-2 rounded-full hover:bg-custom-brown1 transition-all duration-300"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="oswald text-2xl font-bold mb-6 border-b border-custom-brown1 pb-2">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/menu"
                  className="oswald text-lg text-white hover:text-custom-brown1 transition-colors"
                >
                  Le Nostre Pizze
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="oswald text-lg  text-white hover:text-custom-brown1 transition-colors"
                >
                  Senza Glutine
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="oswald text-lg  text-white hover:text-custom-brown1 transition-colors"
                >
                  Antipasti
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="oswald text-lg  text-white hover:text-custom-brown1 transition-colors"
                >
                  Dolci
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="oswald text-lg  text-white hover:text-custom-brown1 transition-colors"
                >
                  Bevande
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="oswald text-2xl font-bold mb-6 border-b border-custom-brown1 pb-2">
              Contatti
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-custom-brown1 text-xl flex-shrink-0" />
                <span className="oswald text-lg">
                  Via Canfora, 78, 95128 Catania CT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-custom-brown1 text-xl flex-shrink-0" />
                <a
                  href="tel:+39095817885"
                  className="oswald text-lg  text-white hover:text-custom-brown1 transition-colors"
                >
                  095 817 8851
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-custom-brown1   text-xl flex-shrink-0" />
                <a
                  href="mailto:puntoics@gmail.com"
                  className="oswald text-lg  text-white hover:text-custom-brown1 transition-colors"
                >
                  puntoics@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="oswald text-2xl font-bold mb-6 border-b border-custom-brown1 pb-2">
              Newsletter
            </h3>
            <p className="oswald text-lg text-gray-300 mb-4">
              Iscriviti per ricevere offerte speciali e novità dal nostro menu
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="La tua email"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-brown1 oswald text-lg"
                  {...register("email", {
                    required: "Email richiesta",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email non valida",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-custom-brown1 hover:bg-opacity-80 transition-all duration-300 text-white oswald text-lg font-semibold py-3 px-4 rounded-lg"
              >
                {isSubmitting ? "Invio in corso..." : "Iscriviti"}
              </button>
            </form>
          </div>
        </div>

        {/* Orari */}
        <div className="border-t border-b border-white border-opacity-20 py-8 mb-8 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <h4 className="oswald text-2xl font-bold">Orari di Apertura:</h4>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
              <p className="oswald text-lg">
                <span className="text-custom-brown1 font-semibold">
                  Mar - Ven:
                </span>{" "}
                18:30 - 23:00
              </p>
              <p className="oswald text-lg">
                <span className="text-custom-brown1 font-semibold">
                  Sab - Dom:
                </span>{" "}
                18:30 - 23:30
              </p>
              <p className="oswald text-lg">
                <span className="text-custom-brown1 font-semibold">
                  Lunedì:
                </span>{" "}
                Chiuso
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="text-center md:text-left">
            <h2 className="oswald text-3xl md:text-4xl font-bold">
              PUNTO ICS DELIVERY
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-4">
              <a
                href="/privacy"
                className="oswald text-sm text-white hover:text-custom-brown1 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="/termini"
                className="oswald text-sm text-white hover:text-custom-brown1 transition-colors"
              >
                Termini e Condizioni
              </a>
            </div>
            <p className="oswald text-sm text-gray-300">
              © {new Date().getFullYear()} Punto ICS. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
