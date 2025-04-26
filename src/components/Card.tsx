import type { ReactNode } from "react";

type Delight = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: ReactNode; // Così puoi anche inserire <br /> se serve
};

const delights: Delight[] = [
  {
    imgSrc: "dish1.jpg",
    imgAlt: "Pizza Speciale",
    title: "Pizza d’Autore",
    description: "Un’esplosione di sapori con ingredienti freschi e un impasto unico.",
  },
  {
    imgSrc: "dish2.jpg",
    imgAlt: "Hamburger Gourmet",
    title: "Hamburger Gourmet",
    description: "Carne succosa e condimenti ricercati per un gusto indimenticabile.",
  },
  {
    imgSrc: "dish3.jpg",
    imgAlt: "Cocktail Signature",
    title: "Cocktail Signature",
    description: (
      <>
        Drink creativi che <br /> accompagnano perfettamente la tua serata.
      </>
    ),
  },
];

export default function DelightsSection() {
  return (
    <section id="delights-section" className="py-20 bg-transparent text-center">
      <h2
        className="oswald text-5xl md:text-7xl font-bold text-white mb-12 drop-shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Le Nostre Delizie
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        {delights.map((delight, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-custom-brown rounded-2xl p-6 m-5 shadow-lg max-w-sm transition-transform transform hover:scale-105"
            data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}  // Delay per ogni item per una transizione più fluida
          >
            <img
              src={delight.imgSrc}
              alt={delight.imgAlt}
              className="w-full h-96 rounded-xl object-cover mb-4"
              data-aos="fade-left" // Aggiunta l'animazione zoom all'immagine
              data-aos-duration="1000"
            />
            <h3 className="oswald text-4xl text-white mb-2" data-aos="fade-up" data-aos-duration="1000">
              {delight.title}
            </h3>
            <p className="oswald text-xl text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              {delight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
