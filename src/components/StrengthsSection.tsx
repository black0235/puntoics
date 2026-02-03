// StrengthsSection.tsx
import { FaUtensils, FaWineGlassAlt } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import type { ReactNode } from "react";

type Strength = {
  Icon: ReactNode;
  title: string;
  description: string;
  animation: string;
};

const strengths: Strength[] = [
  {
    Icon: (
      <FaUtensils className="text-5xl md:text-6xl lg:text-7xl text-custom-brown1 mb-4" />
    ),
    title: "Cucina Versatile",
    description:
      "Dal pizza al gourmet, ogni piatto è un’opera d’arte culinaria.",
    animation: "flip-left",
  },
  {
    Icon: (
      <GiHamburger className="text-5xl md:text-6xl lg:text-7xl text-custom-brown1 mb-4" />
    ),
    title: "Senza Glutine Eccellente",
    description:
      "Piatti sicuri e deliziosi, perfetti per ogni esigenza alimentare.",
    animation: "fade-up",
  },
  {
    Icon: (
      <FaWineGlassAlt className="text-5xl md:text-6xl lg:text-7xl text-custom-brown1 mb-4" />
    ),
    title: "Cocktail Artigianali",
    description:
      "Bevande uniche che completano la tua esperienza gastronomica.",
    animation: "flip-right",
  },
];

export function StrengthsSection() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-transparent">
      <h2
        className="oswald text-4xl md:text-6xl lg:text-7xl text-center text-white mb-12 drop-shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I Nostri Punti di Forza
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-8">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center  bg-custom-brown rounded-2xl p-4 md:p-6 shadow-lg max-w-xs sm:max-w-sm md:max-w-sm transition-transform transform hover:scale-105"
            data-aos={strength.animation}
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
          >
            {strength.Icon}
            <h3 className="oswald  text-center text-2xl md:text-3xl lg:text-4xl text-white mb-3 md:mb-4 font-bold">
              {strength.title}
            </h3>
            <p className="oswald text-sm md:text-lg text-white leading-relaxed mt-2 md:mt-4">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
