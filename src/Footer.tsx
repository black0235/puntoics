import "./App.css";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { toast } from "sonner";

export default function Footer() {
  type Inputs = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success("Email inviata con successo!");
    console.log("Email:", data.email);
  };

  return (
    <div className="flex flex-col bg-black items-center justify-center p-8 gap-2 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 scale-75">
        <p className="oswald text-white text-4xl md:text-6xl">ADVANCED FITNESS</p>

        <form
          className="flex flex-row border-2 border-white w-full rounded-lg p-4 bg-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="bg-black text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-0"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <button
            className="ml-6 bg-white text-black px-4 py-2 rounded-lg transition-all"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Invio..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="md:flex grid md:grid-cols-2 items-center gap-10 w-full md:w-1/2 mt-2">
        <p className="oswald text-md text-center text-white leading-relaxed">
          advanced.fitness25@gmail.com
        </p>
        <p className="oswald text-md text-center text-white leading-relaxed">
          +39 333 159 8357
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <FaSquareWhatsapp
            className="text-white text-4xl cursor-pointer"
            onClick={() => window.open("https://wa.me/+393668195689")}
          />
          <FaInstagram
            className="text-white text-4xl ml-4 cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/advanced_fitness_", "_blank")
            }
          />
        </div>

        <p className="oswald text-md text-center text-white leading-relaxed">
          © 2025 Advanced Fitness
        </p>
      </div>
    </div>
  );
}
