interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="bg-custom-brown1 border-8 border-white rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-white">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span className="text-xl font-bold text-custom-brown1">€{price}</span>
        </div>
        <p className="text-gray-200">{description}</p>
        <button className="mt-4 w-full py-2 bg-custom-brown1 text-white font-semibold rounded-full hover:bg-custom-brown transition-all duration-300">
          Aggiungi
        </button>
      </div>
    </div>
  );
}
