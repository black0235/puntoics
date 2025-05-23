"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DelightsSection from "./components/Card";
import { StrengthsSection } from "./components/StrengthsSection";

function App() {
  const [count, setCount] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const navigate = useNavigate();

  // Function to scroll to Delights section
  const scrollToDelights = () => {
    const delightsSection = document.getElementById("delights-section");
    if (delightsSection) {
      delightsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-custom-brown1 relative">
        <div className="flex bg-video-container h-screen relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          >
            <source src="homepageNic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="flex flex-col-reverse lg:flex-row sm:p-0 lg:p-6 m-5 md:m-28 gap-5 bg-transparent z-10">
            <div className="text-left mt-16 w-full lg:w-1/2">
              <h1 className="oswald text-4xl md:text-7xl text-white mb-6 drop-shadow-lg">
                <span className="font-semibold text-custom-brown">
                  Punto ICS:
                </span>{" "}
                Dove il Gusto Incontra l'Emozione!
              </h1>
              <p className="oswald text-2xl md:text-3xl mt-10 text-white leading-relaxed">
                Un viaggio culinario unico: <br />
                <span className="font-semibold">
                  Pizzeria | Ristorante | Cocktail Bar
                </span>
              </p>
              <button
                className="mt-8 px-6 py-3 bg-custom-brown text-white text-xl oswald rounded-full hover:bg-custom-brown1 transition-all duration-300"
                onClick={scrollToDelights}
              >
                Scopri le nostre delizie
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="bg-transparent py-16 px-6 md:py-24 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 max-w-7xl mx-auto">
            {/* Immagine */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="restaurant1.jpg"
                alt="Ristorante"
                className="w-full max-w-md rounded-2xl h-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Testo */}
            <div className="w-full md:w-2/3 m-6 text-center md:text-left p-6 mb-4">
              <h1 className="oswald text-3xl md:text-6xl text-custom-brown font-bold mb-6 drop-shadow-lg">
                La Nostra Essenza
              </h1>

              <div className="space-y-6">
                <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                  Da{" "}
                  <span className="font-semibold text-2xl text-custom-brown">
                    Punto ICS
                  </span>
                  , crediamo che il cibo sia un'arte. Ogni piatto che prepariamo
                  è un capolavoro, nato dalla nostra passione e dall'uso di
                  ingredienti freschi e di alta qualità.
                </p>

                <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                  La nostra cucina è pensata per tutti: dalla tradizione alle
                  innovazioni, includendo anche opzioni per chi segue diete
                  speciali, come il{" "}
                  <span className="text-custom-brown text-2xl font-semibold">
                    senza glutine
                  </span>
                  .
                </p>

                <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                  Perché sceglierci? Perché non offriamo solo piatti, ma
                  un'esperienza unica dove ogni boccone è una scoperta e ogni
                  visita è un ritorno a casa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-custom-brown flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-12">
          {/* Video */}
          <div className="w-full md:w-1/3 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="w-full h-96 max-w-md rounded-2xl shadow-xl object-cover"
            >
              <source src="video-story.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Testo */}
          <div className="w-full md:w-2/3 text-center md:text-left p-6 flex flex-col justify-center gap-6">
            <h2 className="oswald text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
              Vivi l'Esperienza <br /> da Punto ICS
            </h2>
            <div className="space-y-4">
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                Punto ICS non è solo un ristorante, è un luogo dove il cibo
                diventa emozione. Dalle pizze artigianali ai cocktail
                innovativi, ogni dettaglio è pensato per sorprenderti.
              </p>
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                La nostra passione per la cucina si riflette in ogni piatto,
                preparato con cura per offrirti un momento indimenticabile.
                Vieni a scoprire il nostro mondo!
              </p>
            </div>
          </div>
        </section>

        {/* Delights Section */}
        <DelightsSection />

        <StrengthsSection />

        {/* Story Section */}
        <section className="bg-custom-brown flex flex-col md:flex-row-reverse items-center py-16 justify-center gap-12 p-6 md:p-12">
          <div className="flex flex-col w-full md:w-1/2 items-start">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
              Una Storia di Passione
            </h2>
            <div className="space-y-6">
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                La nostra cucina è un racconto di{" "}
                <span className="text-custom-brown1 font-semibold">
                  tradizione
                </span>{" "}
                e{" "}
                <span className="text-custom-brown1 font-semibold">
                  innovazione
                </span>
                .
              </p>
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                Ogni piatto è preparato con cura, utilizzando{" "}
                <span className="text-custom-brown1 font-semibold">
                  ingredienti locali
                </span>{" "}
                e tecniche moderne, per offrirti un'esperienza che scalda il
                cuore.
              </p>
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                Da Punto ICS, ogni boccone è un momento di gioia.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 items-center justify-center">
            <img
              src="story.jpg"
              alt="Storia"
              className="rounded-2xl h-full max-w-md shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Antipasti Section */}
        <section className="bg-transparent flex flex-col md:flex-row-reverse items-center justify-center gap-12 p-6 md:p-12">
          <div className="flex w-full md:w-1/3 items-center justify-center">
            <img
              src="starter.jpg"
              alt="Antipasti"
              className="rounded-2xl max-h-96 w-auto shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-start">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
              Antipasti che Incantano
            </h2>
            <div className="space-y-6">
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                I nostri antipasti sono un invito a scoprire nuovi sapori.
              </p>
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                Dalle{" "}
                <span className="text-custom-brown font-semibold">
                  bruschette artigianali
                </span>{" "}
                ai{" "}
                <span className="text-custom-brown font-semibold">
                  taglieri di salumi
                </span>
                , ogni piatto è pensato per risvegliare il palato con
                ingredienti freschi e combinazioni uniche.
              </p>
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                Perfetti da condividere o gustare da soli, i nostri antipasti
                sono il modo ideale per iniziare la tua esperienza da{" "}
                <span className="text-custom-brown font-semibold">
                  Punto ICS
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 px-6 bg-custom-brown text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-custom-brown1 opacity-20"></div>
          <div className="relative z-10">
            <h2 className="oswald text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Assapora l'Esperienza Oggi!
            </h2>
            <p className="oswald text-xl md:text-2xl text-white mb-8">
              Prenota il tuo tavolo e scopri il gusto che rende speciale ogni
              momento.
            </p>
            <a href="tel:+39095817885">
              <button
                type="button"
                className="oswald p-4 text-2xl rounded-full bg-gray-50 opacity-90 text-black hover:bg-custom-brown1 hover:text-white transition-all duration-300"
              >
                CHIAMACI ORA
              </button>
            </a>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 bg-custom-brown1 text-center">
          <h2 className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg">
            Il Nostro Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105">
              <img
                src="gallery1.jpg"
                alt="Pizze Gourmet"
                className="w-full h-64 rounded-xl object-cover mb-4"
              />
              <h3 className="oswald text-3xl text-white mb-2">Pizze Gourmet</h3>
              <p className="oswald text-lg text-white">
                Creazioni uniche con ingredienti selezionati.
              </p>
            </div>
            <div className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105">
              <img
                src="gallery2.jpg"
                alt="Piatti Principali"
                className="w-full h-64 rounded-xl object-cover mb-4"
              />
              <h3 className="oswald text-3xl text-white mb-2">
                Piatti Principali
              </h3>
              <p className="oswald text-lg text-white">
                Secondi di carne e pesce per tutti i gusti.
              </p>
            </div>
            <div className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105">
              <img
                src="gallery3.jpg"
                alt="Dolci"
                className="w-full h-64 rounded-xl object-cover mb-4"
              />
              <h3 className="oswald text-3xl text-white mb-2">
                Dolci Artigianali
              </h3>
              <p className="oswald text-lg text-white">
                Dessert che chiudono il pasto con dolcezza.
              </p>
            </div>
          </div>
          <button
            className="mt-12 px-8 py-4 bg-custom-brown text-white text-xl oswald rounded-full hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/menu")}
          >
            Esplora il Menu Completo
          </button>
        </section>

        {/* Reviews Section */}
        <section className="py-20  bg-custom-brown text-center">
          <h2 className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg">
            Le Voci dei Nostri Ospiti
          </h2>
          <div
            className="elfsight-app-184614d2-8dd3-46ea-9b47-a8e2a5fef0f5 mt-14 mx-24 text-white  oswald text-2xl md:text-3xl leading-relaxed"
            data-elfsight-app-lazy
          ></div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-custom-brown1 flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-12">
          <div className="flex flex-col w-full md:w-1/2 items-start">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
              Vieni a Trovarci
            </h2>
            <div className="space-y-6">
              <p className="oswald text-xl md:text-2xl text-white leading-relaxed">
                Siamo aperti tutti i giorni per offrirti il meglio della cucina
                italiana.
              </p>
              <div className="oswald text-xl md:text-2xl text-white leading-relaxed">
                <p className="mb-2">
                  <span className="text-custom-brown font-semibold">
                    Orari:
                  </span>
                </p>
                <p>Martedì - Venerdì: 18:30 - 23:00</p>
                <p>Sabato e Domenica: 18:30 - 23:30</p>
              </div>
              <div className="oswald text-xl md:text-2xl text-white leading-relaxed">
                <p className="mb-2">
                  <span className="text-custom-brown font-semibold">
                    Contatti:
                  </span>
                </p>
                <p>Telefono: +39 095 817 8851</p>
                <p>Email: info@puntoics.it</p>
                <p>Indirizzo: Via Canfora, 78, 95128 Catania CT</p>
              </div>
            </div>
            <a href="tel:+39095817885">
              <button className="mt-8 px-6 py-3 bg-custom-brown text-white text-xl oswald rounded-full hover:bg-opacity-80 transition-all duration-300">
                Contattaci
              </button>
            </a>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <iframe
              width="100%"
              height="500"
              className="rounded-2xl shadow-xl"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.4228695751667!2d15.022485076298556!3d37.61573972130442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131155f13f84df2b%3A0x37977c01f99ea9cf!2sPuntoICS%20Pizzeria%20Ristorante%20American%20Bar%20Nicolosi!5e0!3m2!1sit!2sit!4v1744467304303!5m2!1sit!2sit"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
