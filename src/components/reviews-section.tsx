"use client";

import { useEffect } from "react";

export default function ReviewsSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-custom-brown text-center">
      <h2 className="oswald text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
        Le Voci dei Nostri Ospiti
      </h2>
      <div
        className="elfsight-app-184614d2-8dd3-46ea-9b47-a8e2a5fef0f5 mt-14 mx-24 text-white  oswald text-2xl md:text-3x leading-relaxed"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}
