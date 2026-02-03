"use client";

export default function ContactSection() {
  return (
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
          Indirizzo: Via Canfora, 78, 95128 Catania CT
        </p>
        <a href="tel:+39095817885">
          <button className="mt-8 px-6 py-3 bg-custom-brown text-white text-sm md:text-lg oswald rounded-full transition-all duration-300">
            Contattaci
          </button>
        </a>
      </div>
      <div className="flex flex-col m-5">
        <iframe
          width="600"
          height="600"
          className="rounded-2xl m-2 shadow-xl"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5632719644304!2d15.085819276069559!3d37.51821737205109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fdebbffecf5f%3A0x8bbf146a7c1bb8ac!2sPuntoICS%20Delivery%20Catania!5e0!3m2!1sit!2sit!4v1743067350173!5m2!1sit!2sit"
        ></iframe>
      </div>
    </section>
  );
}
