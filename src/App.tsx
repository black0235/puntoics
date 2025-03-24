import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPizzaSlice, FaComments, FaVideo } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { GiFurnace } from "react-icons/gi";

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
      <div className="bg-custom-brown1  ">
        <div className="flex bg-video-container h-screen ">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="homepage.mp4" type="video/mp4" />
          </video>
          <div
            className="flex flex-col-reverse lg:flex-row sm:p-0 lg:p-6 m-5 md:m-28 gap-5 bg-transparent"
            data-aos="fade-right"
          >
            <div className="text-left mt-16 w-1/2">
              <h1 className="oswald text-3xl md:text-6xl text-white mb-6 ">
                Da noi la qualità è di casa, il gusto è una certezza!{" "}
              </h1>
              <p className="oswald text-2xl md:text-3xl mt-10 text-white leading-relaxed">
                Abbiamo soddisfatto{" "}
                <span className="font-semibold text-white ">
                  oltre 1000+ clienti...{" "}
                </span>
                con le nostre pizze, ora è il tuo turno!
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center p-6 md:m-28 gap-8 md:rounded-2xl bg-transparent"
          data-aos="fade-down md:fade-right"
        >
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              src="pizzeria1.png" // Modificato l'immagine per rappresentare la pizzeria
              alt="Pizzeria"
              className="w-full max-w-md rounded-2xl h-full scale-125 object-cover"
            />
          </div>
          <div className="w-full m-6 text-center md:text-left mt-[-40px] p-6">
            <h1 className="oswald text-5xl md:text-8xl md-10 text-custom-brown mb-6">
              Chi siamo ?
            </h1>
            <p className="oswald text-2xl md:text-3xl mt-16 text-white leading-relaxed">
              Noi di{" "}
              <span className="font-semibold text-4xl text-custom-brown">
                Punto ICS{" "}
              </span>{" "}
              Siamo appassionati dell'arte della pizza. Ogni impasto è studiato
              per offrirti un gusto unico, con ingredienti freschi e
              selezionati.
              <br />
              <br />
              <span className="font-semibold text-5xl text-custom-brown">
                Il nostro punto di forza?
              </span>
              <br />
              <br />
              Unicità e{" "}
              <span className=" text-custom-brown text-4xl">
                il senza glutine{" "}
              </span>{" "}
              più buono che tu abbia mai provato!
            </p>
          </div>
        </div>

        <h2 className="oswald text-center mt-7 text-white text-5xl md:text-8xl">
          Cosa vi offriamo
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-auto gap-8 md:p-12 m-8 ">
          <div
            className="flex flex-col items-center border-8 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md h-full"
            data-aos="flip-left"
          >
            <FaPizzaSlice className="text-6xl text-blue-500 mb-4" />
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
              Pizze Artigianali
            </h2>
            <p className="oswald text-2xl mt-5 text-white">
              Pizze preparate con ingredienti freschi e la passione che ci
              contraddistingue.
            </p>
          </div>

          <div
            className="flex flex-col items-center border-8 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center h-full max-w-md"
            data-aos="fade-up"
          >
            <GiFullPizza className="text-6xl text-blue-500 mb-4" />
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
              Il Miglior Senza Glutine
            </h2>
            <p className="oswald text-2xl mt-5 text-white">
              Il nostro senza glutine non è una semplice alternativa, ma
              un'esperienza di gusto autentica.
            </p>
          </div>

          <div
            className="flex flex-col items-center border-8 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center h-full max-w-md"
            data-aos="flip-right"
          >
            <GiFurnace className="text-6xl text-blue-500 mb-4" />
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
              Forni Separati
            </h2>
            <p className="oswald text-2xl mt-5 text-white">
              Da Punto ICS garantiamo la massima sicurezza per i nostri clienti
              celiaci, grazie ai due forni separati dedicati agli impasti senza
              glutine.
            </p>
          </div>
        </div>

        <div className="bg-custom-brown flex flex-col md:flex-row items-center justify-center  gap-5 p-3">
          <div className="flex flex-col m-6 w-full md:w-1/2 items-start">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4">
              Il Gusto che Racconta una Storia
            </h2>

            <p className="oswald text-2xl mt-5 text-white">
              Ogni pizza racconta una storia fatta di
              <span className=" text-2xl text-custom-brown1 ">
                {" "}
                passione e ingredienti selezionati.{" "}
              </span>
              <br />
              <br />
              Prepariamo{" "}
              <span className=" text-2xl text-custom-brown1 ">
                {" "}
                impasti artigianali con lievitazione naturale{" "}
              </span>{" "}
              e aggiungiamo solo i migliori prodotti freschi, per offrirti
              un'esperienza di{" "}
              <span className=" text-custom-brown1 "> gusto senza pari. </span>
              <br />
              <br />
              <span className="text-custom-brown1 ">
                {" "}
                Dalla tradizione alla modernità,{" "}
              </span>{" "}
              ogni morso è un viaggio che ti farà innamorare.
            </p>
          </div>

          <div className="flex w-full md:w-1/2 md:mt-10 items-center justify-center">
            <img
              src="firstset.jpg"
              alt="Pizza"
              className="rounded-2xl scale-75 md:scale-100 h-full max-w-md m-4  shadow-md"
            />
          </div>
        </div>

        <div className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-8 p-6">
          <div className="flex w-full md:w-1/2 items-center justify-center md:mt-10">
            <img
              src="patatine.jpg"
              alt="Antipasti"
              className="rounded-2xl scale-90 md:scale-100 h-full max-w-md m-4 shadow-xl transition-transform transform hover:scale-105"
            />
          </div>
          <div className="flex flex-col m-6 w-full mr-20 md:w-1/2 items-start">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
              Antipasti da Gustare: Un Inizio Croccante e Irresistibile
            </h2>

            <p className="oswald text-2xl mt-5 text-white leading-relaxed">
              I nostri antipasti sono il{" "}
              <span className="text-custom-brown font-semibold">
                perfetto inizio
              </span>{" "}
              per ogni pasto, pensati per{" "}
              <span className="text-custom-brown font-semibold">
                stuzzicare il palato
              </span>{" "}
              e prepararti a un'esperienza culinaria
              <span className="text-custom-brown font-semibold"> unica</span>.
              Dalle
              <span className="text-2xl text-custom-brown font-semibold">
                fritture croccanti
              </span>{" "}
              alle
              <span className="text-2xl text-custom-brown font-semibold">
                verdure fresche
              </span>{" "}
              con condimenti ricercati, ogni piatto è preparato con ingredienti
              di alta qualità e passione. Assapora il mix di sapori che esaltano
              ogni ingrediente, per un inizio{" "}
              <span className="text-custom-brown font-semibold">
                indimenticabile
              </span>{" "}
              del tuo pranzo o cena.
              <br />
              <span className="font-bold text-2xl text-custom-brown">
                Prova il nostro
              </span>{" "}
              siamo
              <span className="text-custom-brown font-semibold">
                fritti
              </span>{" "}
              che renderanno ogni boccone ancora più speciale.
            </p>
          </div>
        </div>

        <div className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-10 p-8">
          <div className="flex w-full flex-col md:w-full mx-10 items-center  text-center md:text-left">
            <h2 className="oswald text-5xl md:text-6xl text-white mb-8 font-bold drop-shadow-lg">
              I Nostri Impasti
            </h2>

            <div className="flex flex-col md:flex-row m-6 p-3 items-center justify-around gap-12">
              <div className="relative group  w-full md:w-1/3">
                <img
                  src="sec1.png"
                  alt="Impasto 1"
                  className="w-full h-auto rounded-2xl shadow-lg transform transition-transform duration-500 "
                />
              </div>

              <div className="relative group w-full md:w-1/3">
                <img
                  src="sec2.png"
                  alt="Impasto 2"
                  className="w-full h-auto rounded-2xl shadow-lg transform transition-transform duration-500 "
                />
              </div>

              <div className="relative group w-full md:w-1/3">
                <img
                  src="sec3.png"
                  alt="Impasto 3"
                  className="w-full h-auto rounded-2xl shadow-lg transform transition-transform duration-500 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
