"use client";

import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DelightsSection from "./components/Card";
import { StrengthsSection } from "./components/StrengthsSection";
import { useRef, useState, useEffect } from "react";

function Nicolosi() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const heroRef = useRef<HTMLDivElement>(null);
  const antipastiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        heroRef.current?.querySelector("h1"),
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.3 },
      );
      gsap.fromTo(
        heroRef.current?.querySelector("p"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.8 },
      );
      gsap.fromTo(
        antipastiRef.current?.querySelector(".antipasti-image"),
        { opacity: 0, scale: 0.8, rotation: 10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: antipastiRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        heroRef.current?.querySelector("button"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
          delay: 1.2,
        },
      );
    };
    loadGSAP();
  }, []);

  const scrollToDelights = () => {
    const delightsSection = document.getElementById("delights-section");
    if (delightsSection) {
      delightsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-custom-brown1 relative overflow-x-hidden text-white">
        {/* HERO SECTION */}
        <div
          ref={heroRef}
          className="flex items-center justify-center h-screen relative overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controls={false}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80 pointer-events-none select-none"
          >
            <source src="homepageNic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 p-6 md:p-20">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="oswald text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-lg leading-tight">
                <span className="font-semibold text-custom-brown">
                  Punto ICS:
                </span>{" "}
                Dove il Gusto Incontra l'Emozione!
              </h1>
              <p className="oswald text-lg md:text-2xl text-white mb-6 leading-relaxed">
                Un viaggio culinario unico: <br />
                <span className="font-semibold">
                  Pizzeria | Ristorante | Cocktail Bar
                </span>
              </p>
              <button
                className="mt-6 px-8 py-4 bg-custom-brown text-white text-xl oswald rounded-full hover:bg-custom-brown1 transition-all duration-300 shadow-lg"
                onClick={() => navigate("/menu")}
              >
                Scopri le nostre delizie
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section
          ref={antipastiRef}
          className="py-20 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="restaurant1.jpg"
              alt="Ristorante"
              className="rounded-2xl shadow-xl scale-90 lg:scale-110  transition-transform duration-500 object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6 text-white">
            <h2 className="oswald text-4xl md:text-6xl lg:text-7xl font-bold">
              La Nostra Essenza
            </h2>
            <p className="oswald text-lg md:text-xl leading-relaxed">
              Da{" "}
              <span className="font-semibold text-custom-brown">Punto ICS</span>
              , crediamo che il cibo sia un'arte. Ogni piatto che prepariamo è
              un capolavoro, nato dalla nostra passione e dall'uso di
              ingredienti freschi e di alta qualità.
            </p>
            <p className="oswald text-lg md:text-xl leading-relaxed">
              La nostra cucina è pensata per tutti: dalla tradizione alle
              innovazioni, includendo anche opzioni per chi segue diete
              speciali, come il{" "}
              <span className="text-custom-brown font-semibold">
                senza glutine
              </span>
              .
            </p>
            <p className="oswald text-lg md:text-xl leading-relaxed">
              Perché sceglierci? Perché non offriamo solo piatti, ma
              un'esperienza unica dove ogni boccone è una scoperta.
            </p>
          </div>
        </section>

        {/* Delights & Strengths */}
        <DelightsSection />
        <StrengthsSection />

        {/* Story Section */}
        <section className="py-8 px-6 md:px-16 flex flex-col m-8 lg:m-20 md:flex-row-reverse items-center  gap-4 bg-custom-brown rounded-3xl shadow-xl ">
          <div className="w-full  space-y-6 text-white">
            <h2 className="oswald text-2xl md:text-3xl lg:text-4xl font-bold">
              Una Storia di Passione
            </h2>
            <p className="oswald text-sm md:text-lg leading-relaxed">
              La nostra cucina è un racconto di{" "}
              <span className="font-semibold text-custom-brown1">
                tradizione
              </span>{" "}
              e{" "}
              <span className="font-semibold text-custom-brown1">
                innovazione
              </span>
              .
            </p>
            <p className="oswald text-sm md:text-lg leading-relaxed">
              Ogni piatto è preparato con cura, utilizzando ingredienti locali e
              tecniche moderne, per offrirti un'esperienza che scalda il cuore.
            </p>
            <p className="oswald text-sm md:text-lg leading-relaxed">
              Da Punto ICS, ogni boccone è un momento di gioia.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:mr-5 flex justify-center">
            <img
              src="story.jpg"
              alt="Storia"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 bg-custom-brown1 text-center">
          <h2 className="oswald text-4xl md:text-6xl font-bold text-white mb-12">
            Il Nostro Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center bg-custom-brown rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="gallery1.jpg"
                alt="Pizze Gourmet"
                className="w-full h-64 rounded-xl object-cover mb-4"
              />
              <h3 className="oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
                Pizze Gourmet
              </h3>
              <p className="oswald  text-sm md:text-lg text-white/80">
                Creazioni uniche con ingredienti selezionati.
              </p>
            </div>
            <div className="flex flex-col items-center bg-custom-brown rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="gallery2.jpg"
                alt="Piatti Principali"
                className="w-full h-64 rounded-xl object-cover mb-4"
              />
              <h3 className="oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
                Piatti Principali
              </h3>
              <p className="oswald  text-sm md:text-lg text-white/80">
                Secondi di carne e pesce per tutti i gusti.
              </p>
            </div>
            <div className="flex flex-col items-center bg-custom-brown rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="gallery3.jpg"
                alt="Dolci"
                className="w-full h-64 rounded-xl object-cover mb-4"
              />
              <h3 className="oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
                Dolci Artigianali
              </h3>
              <p className="oswald  text-sm md:text-lg text-white/80">
                Dessert che chiudono il pasto con dolcezza.
              </p>
            </div>
          </div>
          <button
            className="mt-12 px-8 py-4 bg-custom-brown text-white text-xl oswald rounded-full hover:bg-custom-brown1 transition-all duration-300 shadow-lg"
            onClick={() => navigate("/menu")}
          >
            Esplora il Menu Completo
          </button>
        </section>
        {/* Reviews Section */}
        <section className="py-20 bg-custom-brown text-center">
          <h2 className="oswald text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 drop-shadow-lg">
            Le Voci dei Nostri Ospiti
          </h2>
          <div
            className="elfsight-app-184614d2-8dd3-46ea-9b47-a8e2a5fef0f5 mt-14 mx-24 text-white oswald text-xl md:text-2xl leading-relaxed"
            data-elfsight-app-lazy
          ></div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-custom-brown1 flex flex-col md:flex-row items-center justify-center gap-5 p-5">
          <div className="flex flex-col m-6 w-full md:w-1/2 items-start">
            <h2 className="oswald text-2xl md:text-3xl lg:text-4xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
              Vieni a Trovarci
            </h2>
            <p className="oswald text-sm md:text-lg mt-5 text-white leading-relaxed">
              Siamo aperti tutti i giorni per offrirti il meglio della pizza
              artigianale.
              <br />
              <br />
              <span className="text-custom-brown font-semibold">Orari:</span>
              <br />
              martedì - venerdì: 18:30 - 23:00
              <br />
              Sabato e Domenica: 18:30 - 23:30
              <br />
              <br />
              <span className="text-custom-brown font-semibold">Contatti:</span>
              <br />
              Telefono: +39 095 817 8851
              <br />
              Email: info@puntoics.it
              <br />
              Indirizzo: Via Etnea, 93/95, 95030 Nicolosi CT
            </p>
            <a href="tel:+39095817885">
              <button className="mt-8 px-6 py-3 bg-custom-brown text-white text-sm md:text-lg oswald rounded-full transition-all duration-300">
                Contattaci
              </button>
            </a>
          </div>
          <div className="flex flex-col m-5 w-full md:w-1/2">
            <iframe
              className="rounded-2xl m-2 shadow-xl w-full h-96 md:h-[600px]"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.4228695751667!2d15.022485076298556!3d37.61573972130442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131155f13f84df2b%3A0x37977c01f99ea9cf!2sPuntoICS%20Pizzeria%20Ristorante%20American%20Bar%20Nicolosi!5e0!3m2!1sit!2sit!4v1744467304303!5m2!1sit!2sit"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default Nicolosi;
