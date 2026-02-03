type BadgeVariant = "veg" | "spicy" | "price" | "recommended";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "recommended",
  className = "",
}: BadgeProps) {
  const baseStyle =
    "inline-flex items-center gap-1 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-md backdrop-blur-sm transition-all duration-300 oswald";

  const variants: Record<BadgeVariant, string> = {
    veg: "bg-green-600/90 text-white hover:bg-green-700 shadow-lg",
    spicy: "bg-red-700/90 text-white hover:bg-red-600 shadow-lg",
    price: "bg-[#592932]/90 text-white hover:bg-[#b3815e] shadow-lg",
    recommended: "bg-[#b3815e]/90 text-white hover:bg-[#592932] shadow-lg",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
