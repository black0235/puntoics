import type { ReactNode } from "react";

type Delight = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: ReactNode;
};

const delights: Delight[] = [
  {
    imgSrc: "dish2.jpg",
    imgAlt: "Hamburger Gourmet",
    title: "Hamburger Gourmet",
    description:
      "Carne succosa e condimenti ricercati per un gusto indimenticabile.",
  },
  {
    imgSrc: "dish1.jpg",
    imgAlt: "Pizza Speciale",
    title: "Pizza d’Autore",
    description:
      "Un’esplosione di sapori con ingredienti freschi e un impasto unico.",
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
    <section
      id="delights-section"
      className="py-12 md:py-20 bg-transparent text-center px-4 sm:px-6 md:px-12"
    >
      <h2
        className="oswald text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 drop-shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Le Nostre Delizie
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
        {delights.map((delight, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-custom-brown rounded-2xl p-4 md:p-6 shadow-lg max-w-xs sm:max-w-sm md:max-w-sm  transition-transform transform hover:scale-105"
            data-aos={
              index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"
            }
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
          >
            <img
              src={delight.imgSrc}
              alt={delight.imgAlt}
              className="w-full h-64 md:h-72 lg:h-80 rounded-xl object-cover mb-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <h3 className="oswald text-2xl md:text-3xl lg:text-4xl text-white mb-2 font-bold">
              {delight.title}
            </h3>
            <p className="oswald text-sm md:text-lg text-white leading-relaxed">
              {delight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
