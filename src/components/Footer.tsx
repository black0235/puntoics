import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { toast } from "sonner";

type Inputs = {
  email: string;
};

export default function Footer() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success("Email inviata con successo!");
    console.log("Email:", data.email);
  };

  return (
    <footer className="bg-custom-brown text-white py-10 px-4 shadow-lg">
      {/* Nome Centro */}
      <div className="text-center mb-8">
        <h2 className="oswald text-4xl md:text-6xl">PUNTO ICS DELIVERY</h2>
      </div>

      {/* Riga Secondaria */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 max-w-6xl mx-auto px-20">
        
        {/* Email */}
        <p className="oswald text-2xl text-center md:text-left">
          puntoics@gmail.com
        </p>

        {/* Telefono */}
        <p className="oswald text-2xl text-center md:text-left">
          095 817 8851
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://wa.me/0958178851" target="_blank" rel="noopener noreferrer">
            <FaSquareWhatsapp className="text-4xl  text-white hover:text-green-400 transition" />
          </a>
          <a href="https://www.instagram.com/puntoics" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl text-white hover:text-pink-400 transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="oswald text-xl text-center md:text-right">
          © 2025 Punto ICS
        </p>

      </div>
    </footer>
  );
}
