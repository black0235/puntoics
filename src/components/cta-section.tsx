"use client";

export default function CTASection() {
  return (
    <section className="py-20 bg-custom-brown text-center relative">
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        style={{
          backgroundImage: "url('/pizzapara.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="oswald text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Prova le Nostre Pizze Oggi Stesso!
        </h2>
        <p className="oswald text-xl md:text-2xl text-white mb-8">
          Vieni a trovarci e scopri un nuovo modo di gustare la pizza.
        </p>
        <a href="tel:+39095817885">
          <button
            type="button"
            className="oswald px-8 py-4 text-xl rounded-full bg-custom-brown text-white hover:bg-custom-brown1 transition-all duration-300 shadow-lg"
          >
            CHIAMACI ORA
          </button>
        </a>
      </div>
    </section>
  );
}
