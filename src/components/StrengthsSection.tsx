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
    Icon: <FaUtensils className="text-6xl text-custom-brown1 mb-4" />,
    title: "Cucina Versatile",
    description: "Dal pizza al gourmet, ogni piatto è un’opera d’arte culinaria.",
    animation: "flip-left",
  },
  {
    Icon: <GiHamburger className="text-6xl h-auto text-custom-brown1 mb-4" />,
    title: "Senza Glutine Eccellente",
    description: "Piatti sicuri e deliziosi, perfetti per ogni esigenza alimentare.",
    animation: "fade-up",
  },
  {
    Icon: <FaWineGlassAlt className="text-6xl text-custom-brown1 mb-4" />,
    title: "Cocktail Artigianali",
    description: "Bevande uniche che completano la tua esperienza gastronomica.",
    animation: "flip-right",
  },
];

export function StrengthsSection() {
  return (
    <section className="py-20">
      <h2 className="oswald text-center mt-7 text-white text-5xl md:text-8xl drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000">
        I Nostri Punti di Forza
      </h2>
      <div className="flex flex-col md:flex-row h-1/2 items-center justify-center text-custom-brown1 w-auto gap-8 md:p-12 m-8">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-8 border-white bg-custom-brown shadow-lg rounded-2xl p-8 text-center max-w-md h-full transition-transform transform hover:scale-105"
            data-aos={strength.animation}
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}  // Delay per ogni card
          >
            {strength.Icon}
            <h3 className="oswald text-4xl md:text-6xl text-white mb-4" data-aos="fade-up" data-aos-duration="1000">
              {strength.title}
            </h3>
            <p className="oswald text-2xl mt-5 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
