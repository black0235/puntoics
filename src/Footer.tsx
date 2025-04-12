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
    <div className="flex flex-col bg-custom-brown items-center justify-center p-8 gap-2 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 scale-75">
        <p className="oswald text-white text-4xl md:text-6xl">
          PUNTO ICS DELIVERY
        </p>

        <form
          className="flex flex-row border-2 border-white w-full rounded-lg p-4 bg-custom-brown1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="bg-custom-brown1 text-white oswald text-xl w-full rounded-lg  outline-none"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <button
            className="ml-6 bg-custom-brown1 oswald text-2xl text-white px-4 py-1 rounded-lg transition-all"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Invio..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="md:flex grid md:grid-cols-2 items-center gap-10 w-full md:w-1/2 mt-2">
        <p className="oswald text-md text-2xl text-center text-white leading-relaxed">
            puntoics@gmail.com
        </p>
        <p className="oswald text-md text-2xl text-center text-white leading-relaxed">
        095 817 8851
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <FaSquareWhatsapp
            className="text-white text-4xl cursor-pointer"
            onClick={() => window.open("https://wa.me/0958178851")}
          />
          <FaInstagram
            className="text-white text-4xl ml-4 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.instagram.com/puntoics",
                "_blank"
              )
            }
          />
        </div>

        <p className="oswald text-md text-2xltext-center text-white leading-relaxed">
          © 2025  Punto ICS 
        </p>
      </div>
    </div>
  );
}
