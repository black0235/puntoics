type BadgeVariant = "veg" | "spicy" | "price";

type BadgeProps = {
  children: React.ReactNode;
  variant: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant, className = "" }: BadgeProps) {
  const baseStyle =
    "inline-flex items-center gap-1 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-md backdrop-blur-sm transition-all duration-300";

  const variants: Record<BadgeVariant, string> = {
    veg: "bg-green-500/90 text-white hover:bg-green-600",
    spicy: "bg-red-500/90 text-white hover:bg-red-600",
    price:
      "bg-custom-brown/90 text-white text-sm sm:text-base font-bold hover:bg-custom-brown1",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
