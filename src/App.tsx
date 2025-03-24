import { useState } from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPizzaSlice, FaComments, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Inizializzazione AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });

    return () => {
      AOS.refresh(); // Cleanup AOS
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-custom-brown1  "> {/* Cambiato il colore di sfondo */}
        <div className="flex items-center justify-center h-screen ">
          <div
            className="flex flex-col-reverse lg:flex-row items-center justify-center sm:p-0 lg:p-6 m-5 md:m-28 scale-90 gap-5 rounded-2xl bg-transparent shadow-lg"
            data-aos="fade-right"
          >
            <div className="w-full text-center md:text-left md:p-6">
              <h1 className="oswald text-3xl md:text-6xl text-white mb-6 underline">
                Il 2025 è arrivato, è tempo di assaporare il vero gusto!
              </h1>
              <p className="oswald text-2xl md:text-3xl mt-10 text-white leading-relaxed">
                Abbiamo soddisfatto{" "}
                <span className="font-semibold text-custom-brown">
                  oltre 1000+ clienti...{" "}
                </span>
                con le nostre pizze, ora è il tuo turno!
              </p>
              <div className="flex z-50 mt-16 md:mt-24 justify-center md:justify-start items-center">
                <h1 className="text-2xl md:text-[2.5em] py-4 px-2 text-white oswald hover:text-custom-brown transition-all duration-300">
                  Scopri il nostro menù!
                </h1>
              </div>
            </div>
          </div>

          
          <div className="w-1/2 flex justify-center ">
          <video
            src="/video1.mp4" // Modificato per il video
            autoPlay
            loop
            muted
            className="w-full scale-90 w-1\2 rounded-3xl  md:h-auto lg:aspect-auto mt-5 md:mt-16 "
          />
        </div>
          </div>
        
     

      {/* About Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center p-6 md:m-28 gap-8 md:rounded-2xl border-8 border-black bg-black shadow-lg"
        data-aos="fade-down md:fade-right"
      >
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src="/about-pizzeria.jpg" // Modificato l'immagine per rappresentare la pizzeria
            alt="Pizzeria"
            className="w-full max-w-md rounded-2xl h-96 object-cover"
          />
        </div>
        <div className="w-full text-center md:text-left p-6">
          <h1 className="oswald text-5xl md:text-8xl text-white mb-6">
            Chi siamo
          </h1>
          <p className="oswald text-2xl md:text-3xl text-white leading-relaxed">
            Noi di <span className="font-semibold text-blue-500">PizzaLovers</span>{" "}
            siamo appassionati della buona cucina italiana. Ogni pizza è preparata con
            ingredienti freschi e di alta qualità, per garantirti un'esperienza unica!
          </p>
        </div>
      </div>

      <h2 className="oswald text-center mt-7 text-white text-5xl md:text-8xl">
        Cosa vi offriamo
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:p-8 m-8">
        <div
          className="flex flex-col items-center border-8 border-black bg-black shadow-lg rounded-2xl p-8 text-center"
          data-aos="flip-left"
        >
          <FaPizzaSlice className="text-6xl text-blue-500 mb-4" />
          <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
            Pizze Artigianali
          </h2>
          <p className="oswald text-2xl mt-5 text-white">
            Pizze preparate con ingredienti freschi e la passione che ci contraddistingue.
          </p>
        </div>
        <div
          className="flex flex-col items-center border-8 border-black bg-black shadow-lg rounded-2xl p-8 text-center"
          data-aos="fade-up"
        >
          <FaComments className="text-6xl text-blue-500 mb-4" />
          <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
            Assistenza Clienti
          </h2>
          <p className="oswald text-2xl mt-5 text-white">
            Siamo sempre disponibili per rispondere alle tue domande e offrirti supporto.
          </p>
        </div>
        <div
          className="flex flex-col items-center border-8 border-black bg-black shadow-lg rounded-2xl p-8 text-center"
          data-aos="flip-right"
        >
          <FaVideo className="text-6xl text-blue-500 mb-4" />
          <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
            Video Ricette
          </h2>
          <p className="oswald text-2xl mt-5 text-white">
            Scopri le nostre video ricette per imparare a preparare la pizza perfetta!
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
