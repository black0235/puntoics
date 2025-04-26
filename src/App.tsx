import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPizzaSlice,
  FaUtensils,
  FaWineGlassAlt,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import { GiHamburger, GiCoffeeCup } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegUser } from "react-icons/fa";
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
    AOS.init({
      duration: 900,
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

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
          <div
            className="flex flex-col-reverse lg:flex-row sm:p-0 lg:p-6 m-5 md:m-28 gap-5 bg-transparent z-10"
            data-aos="fade-right"
          >
            <div className="text-left mt-16 w-full lg:w-1/2">
              <h1 className="oswald text-4xl md:text-7xl text-white mb-6 drop-shadow-lg">
                <span className="font-semibold text-custom-brown">Punto ICS:</span>{" "}
                Dove il Gusto Incontra l’Emozione!
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

        <section className="bg-transparent py-2 px-6 md:py-16 md:px-12">
  <div
    className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 max-w-7xl mx-auto"
    data-aos="fade-down"
  >
    {/* Immagine */}
    <div className="w-full md:w-1/3 flex justify-center" data-aos="flip-left">
      <img
        src="restaurant1.jpg"
        alt="Ristorante"
        className="w-full max-w-md rounded-2xl h-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Testo */}
    <div className="w-full md:w-2/3 m-6 text-center md:text-left p-6 mb-4">
      <h1 className="oswald text-3xl md:text-6xl text-custom-brown font-bold mb-4 drop-shadow-lg">
        La Nostra Essenza
      </h1>

      <p
        className="oswald text-xl md:text-2xl text-white leading-relaxed"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Da <span className="font-semibold text-2xl text-custom-brown">Punto ICS</span>, crediamo che il cibo sia un'arte. Ogni piatto che prepariamo è un capolavoro, nato dalla nostra passione e dall'uso di ingredienti freschi e di alta qualità.
      </p>

      <p
        className="oswald text-xl md:text-2xl text-white leading-relaxed mt-6"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        La nostra cucina è pensata per tutti: dalla tradizione alle innovazioni, includendo anche opzioni per chi segue diete speciali, come il <span className="text-custom-brown text-2xl">senza glutine</span>.
      </p>

      <p
        className="oswald text-xl md:text-2xl text-white leading-relaxed mt-6"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Perché sceglierci? Perché non offriamo solo piatti, ma un'esperienza unica dove ogni boccone è una scoperta e ogni visita è un ritorno a casa.
      </p>

      <p
        className="oswald text-xl md:text-2xl text-white leading-relaxed mt-6"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        Unisciti a noi in un viaggio di sapori, creatività e passione. Ogni piatto è preparato con cura, proprio come lo vorresti.
      </p>
    </div>
  </div>
</section>




<section className="bg-custom-brown flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-12">
  {/* Video */}
  <div
    className="w-full md:w-1/3 flex justify-center pb-6"  // Aggiunto padding inferiore al video
    data-aos="fade-right"
    data-aos-duration="1000"
  >
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
  <div
    className="w-full md:w-2/3 text-center md:text-left p-6 flex flex-col justify-center gap-6"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <h2 className="oswald text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
      Vivi l’Esperienza <br /> da Punto ICS
    </h2>
    <p
      className="oswald text-xl md:text-2xl text-white leading-relaxed"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      Punto ICS non è solo un ristorante, è un luogo dove il cibo diventa emozione. Dalle pizze artigianali ai cocktail innovativi, ogni dettaglio è pensato per sorprenderti.
    </p>
    <p
      className="oswald text-xl md:text-2xl text-white leading-relaxed mt-4"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="600"
    >
      La nostra passione per la cucina si riflette in ogni piatto, preparato con cura per offrirti un momento indimenticabile. Vieni a scoprire il nostro mondo!
    </p>
  </div>
</section>




        {/* Delights Section (scroll target) */}
        <DelightsSection />

        <StrengthsSection />

        {/* Story Section */}
<div className="bg-custom-brown flex flex-col md:flex-row-reverse items-center py-10 justify-center gap-5 p-3">
  <div
    className="flex flex-col m-6 w-full md:w-1/2 items-start"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <h2 className="oswald text-4xl md:text-6xl text-white mb-4 drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000">
      Una Storia di Passione
    </h2>
    <p
      className="oswald text-2xl mt-5 text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      La nostra cucina è un racconto di{" "}
      <span className="text-2xl text-custom-brown1">tradizione</span> e{" "}
      <span className="text-2xl text-custom-brown1">innovazione</span>.
      <br />
      <br />
      Ogni piatto è preparato con cura, utilizzando{" "}
      <span className="text-2xl text-custom-brown1">
        ingredienti locali
      </span>{" "}
      e tecniche moderne, per offrirti un’esperienza che scalda il cuore.
      <br />
      <br />
      Da Punto ICS, ogni boccone è un momento di gioia.
    </p>
  </div>
  <div
    className="flex w-full md:w-1/3 items-center justify-center"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <img
      src="story.jpg"
      alt="Storia"
      className="rounded-2xl scale-110 h-full max-w-md m-3 shadow-md transition-transform transform"
    />
  </div>
</div>


     {/* Antipasti Section */}
<div className="bg-transparent flex flex-col md:flex-row-reverse items-center justify-center gap-8 p-4">
  <div
    className="flex w-full md:w-1/3 items-center justify-center"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <img
      src="starter.jpg"
      alt="Antipasti"
      className="rounded-2xl scale-90 md:scale-100 h-full max-w-md m-6 shadow-xl transition-transform"
    />
  </div>
  <div
    className="flex flex-col m-6 w-full mr-20 md:w-1/2 items-start"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <h2
      className="oswald text-4xl md:text-6xl text-white mb-6 text-center md:text-left font-bold drop-shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      Antipasti che Incantano
    </h2>
    <p
      className="oswald text-2xl text-white leading-relaxed"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      I nostri antipasti sono un invito a scoprire nuovi sapori.
      <br />
      Dalle{" "}
      <span className="text-custom-brown font-semibold">bruschette artigianali</span>{" "}
      ai{" "}
      <span className="text-custom-brown font-semibold">taglieri di salumi</span>
      , ogni piatto è pensato per risvegliare il palato con ingredienti freschi e combinazioni uniche.
      <br />
      <br />
      Perfetti da condividere o gustare da soli, i nostri antipasti sono il modo ideale per iniziare la tua esperienza a{" "}
      <span className="text-custom-brown font-semibold">Sapore Vivo</span>.
    </p>
  </div>
</div>


       



       

       
      {/* Booking Section */}
<section className="py-20 px-6 bg-custom-brown text-center relative overflow-hidden">
  <div className="absolute inset-0 bg-custom-brown1 opacity-20"></div>
  <h2
    className="oswald text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    Assapora l’Esperienza Oggi!
  </h2>
  <p
    className="oswald text-xl md:text-2xl text-white"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    Prenota il tuo tavolo e scopri il gusto che rende speciale ogni momento.
  </p>
  <a href="tel:+39123456789">
    <button
      type="button"
      className="oswald p-4 text-2xl rounded-full bg-gray-50 opacity-80 mt-10 text-black hover:bg-custom-brown1 transition-all duration-300 mr-4"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      CHIAMACI
    </button>
  </a>
</section>


      {/* Menu Section */}
<section className="py-20 bg-custom-brown1 text-center">
  <h2
    className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    Il Nostro Menu
  </h2>
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
    <div
      className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <img
        src="gallery1.jpg"
        alt="Pizze Gourmet"
        className="w-full h-full rounded-xl object-cover mb-4"
      />
      <h3 className="oswald text-4xl text-white mb-2">Pizze Gourmet</h3>
      <p className="oswald text-xl text-white">
        Creazioni uniche con ingredienti selezionati.
      </p>
    </div>
    <div
      className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img
        src="gallery2.jpg"
        alt="Piatti Principali"
        className="w-full h-full rounded-xl object-cover mb-4"
      />
      <h3 className="oswald text-4xl text-white mb-2">Piatti Principali</h3>
      <p className="oswald text-xl text-white">
        Secondi di carne e pesce per tutti i gusti.
      </p>
    </div>
    <div
      className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 shadow-lg max-w-sm transition-transform transform hover:scale-105"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <img
        src="gallery3.jpg"
        alt="Dolci"
        className="w-full h-full rounded-xl object-cover mb-4"
      />
      <h3 className="oswald text-4xl text-white mb-2">Dolci Artigianali</h3>
      <p className="oswald text-xl text-white">
        Dessert che chiudono il pasto con dolcezza.
      </p>
    </div>
  </div>
  <button
    className="mt-14 px-8 py-5 bg-custom-brown text-white scale-110 text-xl oswald rounded-full hover:scale-110 transition-all duration-300"
    onClick={() => navigate("/menu")}
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
  >
    Esplora il Menu
  </button>
</section>

      

{/* Reviews Section */}

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.4228695751667!2d15.022485076298556!3d37.61573972130442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131155f13f84df2b%3A0x37977c01f99ea9cf!2sPuntoICS%20Pizzeria%20Ristorante%20American%20Bar%20Nicolosi!5e0!3m2!1sit!2sit!4v1744467304303!5m2!1sit!2sit"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;