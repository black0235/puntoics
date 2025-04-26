import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPizzaSlice,
  FaComments,
  FaVideo,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import { GiFullPizza, GiFurnace } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegUser } from "react-icons/fa";

function PuntoicsDelivery() {
  const [count, setCount] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animazione solo una volta
    });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const navigate = useNavigate();

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
            <source src="homepage.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          <div
            className="flex flex-col-reverse lg:flex-row sm:p-0 lg:p-6 m-5 md:m-28 gap-5 bg-transparent z-10"
            data-aos="fade-right"
          >
            <div className="text-left mt-16 w-full lg:w-1/2">
              <h1 className="oswald text-4xl md:text-7xl text-white mb-6 drop-shadow-lg">
                Da noi la qualità è di casa, il gusto è una certezza!
              </h1>
              <p className="oswald text-2xl md:text-3xl mt-10 text-white leading-relaxed">
                Abbiamo soddisfatto{" "}
                <span className="font-semibold text-custom-brown1">
                  oltre 1000+ clienti...
                </span>{" "}
                con le nostre pizze, ora è il tuo turno!
              </p>
              <button
                className="mt-8 px-6 py-3 bg-custom-brown text-white text-xl oswald rounded-full hover:bg-custom-brown1 transition-all duration-300"
                onClick={() => navigate("/menu")}
              >
                Scopri il Menu
              </button>
            </div>
          </div>
        </div>

      

        <section className="bg-transparent py-16 px-6 md:py-24 md:px-12">
  <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
    
    {/* Immagine */}
    <div className="w-full md:w-1/2 flex justify-center" data-aos="flip-left">
      <img
        src="pizzeria1.png"
        alt="Pizzeria"
        className="w-full max-w-lg rounded-3xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Testo */}
    <div
      className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6"
      data-aos="fade-left" // 👈 cambiato qui
      data-aos-duration="1000" // 👈 durata più morbida
    >
      <h2 className="oswald text-4xl md:text-5xl text-white font-bold leading-tight">
        Passione per la Pizza
      </h2>

      <p className="oswald text-2xl md:text-2xl text-white leading-relaxed">
        Da <span className="text-custom-brown font-bold">Punto ICS</span>, ogni pizza è un'opera d'arte.  
        Usiamo solo ingredienti freschi e selezionati per offrirti un gusto autentico e inconfondibile.
      </p>

      <h3 className="oswald text-3xl md:text-4xl text-custom-brown font-bold mt-4">
        Il nostro punto di forza?
      </h3>

      <p className="oswald text-2xl md:text-2xl text-white leading-relaxed">
        Uniamo la tradizione della pizza italiana con l'innovazione, proponendo nuove ricette e sapori 
        in un ambiente accogliente e familiare.
      </p>

      <p className="oswald text-2xl md:text-2xl text-white leading-relaxed">
        E per chi cerca alternative, offriamo un <span className="text-custom-brown font-bold">senza glutine</span> 
        che conquista anche i palati più esigenti!
      </p>
    </div>

  </div>
</section>






        {/* Servizi Section */}
        <h2 className="oswald text-center mt-7 text-white text-5xl md:text-8xl drop-shadow-lg">
          Cosa vi offriamo
        </h2>
        <div className="flex flex-col md:flex-row h-1/2 items-center justify-center w-auto gap-8 md:p-12 m-10"
        
         >
          

          <div
            className="flex flex-col items-center border-8 m-3 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center h-full max-w-md transition-transform transform hover:scale-105"
          
          >
            <GiFullPizza className="text-6xl h-auto text-blue-500 mb-4" />
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4
            " data-aos="flip-left" >
              Il Miglior Senza Glutine
            </h2>
            <p className="oswald text-2xl mt-5 text-white"
            data-aos="flip-left">
              Il nostro senza glutine non è una semplice alternativa, ma
              un'esperienza di gusto autentica.
            </p>
          </div>

          <div
            className="flex flex-col items-center border-8 m-3 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md h-full transition-transform transform hover:scale-105"
             >
          
            <FaPizzaSlice className="text-6xl h-auto text-blue-500 mb-4" />
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4"
            data-aos="flip-down">
              Pizze Artigianali
            </h2>
            <p className="oswald text-2xl mt-5 text-white"
            data-aos="fade-up">
              Pizze preparate con ingredienti freschi e la passione che ci
              contraddistingue.
            </p>
          </div>

          <div
            className="flex flex-col items-center border-8 m-3 border-white bg-custom-brown shadow-lg rounded-2xl p-8  text-center h-auto max-w-md transition-transform transform hover:scale-105"
        
          >
            <GiFurnace className="text-6xl text-blue-500 mb-4" />
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4"
            data-aos="flip-right">
              Forni Separati
            </h2>
            <p className="oswald text-2xl mt-5 text-white"
            data-aos="flip-right">
              Da Punto ICS garantiamo la massima sicurezza per i nostri clienti
              celiaci, grazie ai due forni separati dedicati agli impasti senza
              glutine.
            </p>
          </div>
        </div>

        {/* Storia  Section */}
        <div className="bg-custom-brown flex flex-col md:flex-row items-center justify-center gap-5 p-3">
          <div className="flex flex-col m-6 w-full md:w-1/3 items-start"
          data-aos="fade-left">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Il Gusto che Racconta una Storia
            </h2>
            <p className="oswald text-2xl mt-5 text-white">
              Ogni pizza racconta una storia fatta di
              <span className="text-2xl text-custom-brown1">
                {" "}
                passione e ingredienti selezionati.
              </span>
              <br />
              <br />
              Prepariamo{" "}
              <span className="text-2xl text-custom-brown1">
                {" "}
                impasti artigianali con lievitazione naturale
              </span>{" "}
              e aggiungiamo solo i migliori prodotti freschi, per offrirti
              un'esperienza di{" "}
              <span className="text-custom-brown1"> gusto senza pari.</span>
              <br />
              <br />
              <span className="text-custom-brown1">
                {" "}
                Dalla tradizione alla modernità,
              </span>{" "}
              ogni morso è un viaggio che ti farà innamorare.
            </p>
          </div>
          <div className="flex w-full md:w-1/2  items-center justify-center">
            <img
              src="firstset.jpg"
              alt="Pizza"
              className="rounded-2xl scale-75 md:scale-90 h-full max-w-md m-4 shadow-md transition-transform transform hover:scale-100"
            />
          </div>
        </div>

        {/* Antipasti Section */}
        <div className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-4 p-6">
          <div className="flex w-full md:w-1/3 items-center justify-center md:mt-10">
            <img
              src="patatine.jpg"
              alt="Antipasti"
              className="rounded-2xl scale-90 md:scale-100 h-full max-w-md m-4 shadow-xl transition-transform transform hover:scale-105"
            />
          </div>
          <div className="flex flex-col m-6 w-full mr-20 md:w-1/2 items-start"
           data-aos="fade-right">
            <h2 className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
              Antipasti da Gustare: Un Inizio Croccante e Irresistibile
            </h2>
            <p className="oswald text-2xl  text-white leading-relaxed">
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
                Prova i nostri fritti
              </span>{" "}
              che renderanno ogni boccone ancora più speciale.
            </p>
          </div>
        </div>

        {/* Impasti Section */}
        <div className="bg-transparent flex flex-col md:flex-row items-center justify-center gap-10 p-8">
          <div className="flex w-full flex-col md:w-full mx-10 items-center text-center md:text-left">
            <FaRegArrowAltCircleDown className="oswald text-5xl md:text-8xl animate-bounce text-custom-brown mb-8 font-bold drop-shadow-lg" onClick={() => {
    const section = document.getElementById("menu");
    section?.scrollIntoView({ behavior: "smooth" });
  }} />

            <div className="flex flex-col md:flex-row m-6 p-3 items-center justify-around gap-12">
              <div className="relative group w-full md:w-1/3">
                <img
                  src="sec1.png"
                  alt="Impasto 1"
                  className="w-auto scale-75 h-auto border-8 cursor-pointer border-custom-brown rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-90"
                />
              </div>
              <div className="relative group w-full md:w-1/3">
                <img
                  src="sec2.png"
                  alt="Impasto 2"
                  className="w-auto scale-75 h-auto border-8 cursor-pointer border-custom-brown rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-90"
                />
              </div>
              <div className="relative group w-full md:w-1/3">
                <img
                  src="sec3.png"
                  alt="Impasto 3"
                  className="w-auto scale-75 h-auto border-8 cursor-pointer border-custom-brown rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-90"
                />
              </div>
            </div>
          </div>
        </div>

       

        {/* Galleria Scorrimento */}
        {/* <section className="py-20 bg-custom-brown1 text-center">
          <h2
            className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg"
            data-aos="fade-up"
          >
            Le Nostre Specialità
          </h2>
          <Slider
            {...sliderSettings}
            className="max-w-4xl items-center mx-auto w-auto"
          >
            <div>
              <img
                src="pizza1.png"
                alt="Pizza 1"
                className="rounded-2xl shadow-lg transform transition hover:scale-105"
                data-aos="zoom-in"
              />
            </div>
            <div>
              <img
                src="pizza2.png"
                alt="Pizza 2"
                className="rounded-2xl shadow-lg transform transition hover:scale-105"
                data-aos="zoom-in"
              />
            </div>
          </Slider>
        </section>*/}

        {/* sezione atmosfera */}
        <section className="py-20 bg-transparent flex flex-col md:flex-row items-center justify-center gap-10 p-8">
          <div className="flex w-full md:w-1/3 items-center justify-center"
          
           >
            <img
              src="atmosfera.jpg"
              alt="Atmosfera Locale"
              className="rounded-2xl scale-125  h-full max-w-md m-4 shadow-xl transition-transform transform "
            />
          </div>
          <div className="flex flex-col m-6 w-full mr-20 md:w-1/2 " data-aos="flip-right"
          >
            <h2 className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg">
              Un'Atmosfera Unica
            </h2>
            <p className="oswald text-2xl mt-5 text-white leading-relaxed">
              Vieni a scoprire l'atmosfera calda e accogliente di{" "}
              <span className="text-custom-brown font-semibold">Punto ICS</span>
              . Il nostro locale è pensato per farti sentire a casa, con un
              design moderno e dettagli rustici che celebrano la tradizione
              della pizza.
              <br />
              <br />
              Perfetto per una cena romantica, un pranzo in famiglia o una
              serata con gli amici. Ogni momento da noi è speciale, grazie a un
              ambiente che unisce{" "}
              <span className="text-custom-brown font-semibold">
                comfort e stile
              </span>
              .
            </p>
          </div>
        </section>

        {/* sezione prenota */}
        <section className="py-20 px-6 bg-custom-brown text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-custom-brown1 opacity-20"> </div>
          <h2
            className="oswald text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            data-aos="fade-up"
          >
            Prova le Nostre Pizze Oggi Stesso!
          </h2>
          <p
            className="oswald text-xl md:text-2xl text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Vieni a trovarci e scopri un nuovo modo di gustare la pizza.
          </p>
          <a href="tel:+39123456789">
        <button
          type="button"
          className="oswald p-4 text-2xl rounded-full bg-gray-50 opacity-80 mt-10  text-black hover:bg-custom-brown1 transition-all duration-300 mr-4"
        >
          CHIAMACI
        </button>
      </a>
        </section>

        <section id="menu" className="py-20 bg-custom-brown1 text-center">
          <h2
            className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg"
            data-aos="fade-up"
          >
            Esplora il Nostro Menu
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6"
           >
            {/* Categoria 1: Pizze Classiche */}
            <div
              className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform "
             
            >
              <img
                src="rot3-.png"
                alt="Pizze Classiche"
                className="w-full h-full rounded-xl object-cover mb-4"
                data-aos="flip-left"
              />
              <h3 className="oswald text-4xl text-white mb-2"
               data-aos="flip-left">
                Pizze Classiche
              </h3>
              <p className="oswald text-xl text-white"
               data-aos="flip-left">
                
                Le nostre pizze classiche, preparate con ingredienti freschi e
                impasti tradizionali.
              </p>
            </div>

            {/* Categoria 2: Senza Glutine */}
            <div
              className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform "
              data-aos="fade-up"
            >
              <img
                src="rot2-.png"
                alt="Pizze Senza Glutine"
                className="w-full h-full rounded-xl object-cover mb-4"
                data-aos="fade-down"
              />
              <h3 className="oswald text-4xl text-white mb-2"
              data-aos="fade-down" >Senza Glutine</h3>
              <p className="oswald text-xl text-white"
              data-aos="fade-down">
                Un'esperienza di gusto autentica, sicura e deliziosa per tutti i
                palati.
              </p>
            </div>

            {/* Categoria 3: Antipasti */}
            <div
              className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform "
              data-aos="fade-left"
            >
              <img
                src="rot1-.png"
                alt="img"
                className="w-full h-full rounded-xl object-cover mb-4"
                data-aos="flip-right"
              />
              <h3 className="oswald text-4xl text-white mb-2"
              data-aos="flip-right"> Impasto Kamut</h3>
              <p className="oswald text-xl text-white"
              data-aos="flip-left"
              data-aos-delay="400">
                Fritture croccanti e verdure fresche per iniziare il tuo pasto
                nel modo migliore.
              </p>
            </div>
          </div>
          <button
            className="mt-14 px-8 py-5 bg-custom-brown text-white scale-110 text-xl oswald rounded-full hover:scale-110 transition-all duration-300"
            onClick={() => navigate("/menu")}
            data-aos="fade-down"
          >
            Scopri il Menu Completo
          </button>
        </section>

        <section className="py-20 bg-custom-brown text-center">
          <h2
            className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg"
            data-aos="fade-up"
          >
            Ingredienti di Qualità
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
            {/* Ingrediente 1: Farina */}
            <div
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105"
              data-aos="fade-right"
            >
              <img
                src="farina.png"
                alt="Farina di Qualità"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="oswald text-2xl text-custom-brown mb-2">
                Farina Selezionata
              </h3>
              <p className="oswald text-lg text-gray-700">
                Usiamo solo farine di alta qualità per un impasto leggero e
                digeribile.
              </p>
            </div>

            {/* Ingrediente 2: Mozzarella */}
            <div
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src="mozzarella.png"
                alt="Mozzarella Fresca"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="oswald text-2xl text-custom-brown mb-2">
                Mozzarella Fresca
              </h3>
              <p className="oswald text-lg text-gray-700">
                Mozzarella di bufala e fior di latte, sempre fresca e filante.
              </p>
            </div>

            {/* Ingrediente 3: Pomodoro */}
            <div
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105"
              data-aos="fade-left"
            >
              <img
                src="pomodoro1.png"
                alt="Pomodoro Italiano"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="oswald text-2xl text-custom-brown mb-2">
                Pomodoro Italiano
              </h3>
              <p className="oswald text-lg text-gray-700">
                Pomodori 100% italiani, coltivati con cura per un sapore
                autentico.
              </p>
            </div>
          </div>
        </section>


         {/* Recensioni dei Clienti */}
         <section className="py-20 bg-custom-brown text-center">
<h2 className="oswald text-5xl md:text-7xl font-bold  text-white  drop-shadow-lg">
        Le Voci dei Nostri Ospiti
      </h2>
      <div
        className="elfsight-app-184614d2-8dd3-46ea-9b47-a8e2a5fef0f5   mt-14 text-white mx-auto  oswald text-2xl md:text-3x leading-relaxed" 
        data-elfsight-app-lazy
      
      ></div>
    </section>

        <section className="py-20 bg-custom-brown1 flex flex-col md:flex-row items-center justify-center gap-5 p-5">
          <div className="flex flex-col m-6 w-full md:w-1/2 items-start">
            <h2
              className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg"
              data-aos="fade-right"
            >
              Vieni a Trovarci
            </h2>
            <p
              className="oswald text-2xl mt-5 text-white leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Siamo aperti tutti i giorni per offrirti il meglio della pizza
              artigianale.
              <br />
              <br />
              <span className="text-custom-brown font-semibold">Orari:</span>
              <br />
              martedì - venerdì:  18:30 - 23:00
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
              Indirizzo: Via Canfora, 78, 95128 Catania CT
            </p>
            <a href="tel:+39123456789">
            <button
              className="mt-8 px-6 py-3 bg-custom-brown text-white text-xl oswald rounded-full  transition-all duration-300"
             
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Contattaci
              
            </button>
            </a>
          </div>
          <div className="flex flex-col m-5 ">
            <iframe
              width="600"
              height="600"
              className="rounded-2xl m-2   shadow-xl"
              loading="lazy"
              data-aos="fade-left"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5632719644304!2d15.085819276069559!3d37.51821737205109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fdebbffecf5f%3A0x8bbf146a7c1bb8ac!2sPuntoICS%20Delivery%20Catania!5e0!3m2!1sit!2sit!4v1743067350173!5m2!1sit!2sit"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default PuntoicsDelivery;
