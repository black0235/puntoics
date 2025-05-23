"use client";

import type { ReactNode } from "react";

interface CategoryCardProps {
  name: string;
  icon: ReactNode;
  onClick: () => void;
}

export function CategoryCard({ name, icon, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-custom-brown1 border-8 border-white rounded-3xl p-8 text-center shadow-lg cursor-pointer transform transition-transform hover:scale-105"
      // data-aos="fade-up"
    >
      <div className="flex justify-center text-custom-brown1 mb-4">{icon}</div>
      <h2 className="text-3xl  font-semibold text-white mb-2">{name}</h2>
      <p className="text-gray-200">Scopri tutte le nostre specialità</p>
    </div>
  );
}
