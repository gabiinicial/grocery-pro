// components/Categories.tsx
import { Plus } from "lucide-react";

export default function Categories() {
  const popularCategories = [
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
  ];
  const allCategories = [
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
    "Categoría",
  ];

  return (
    <div className=" bg-orange-50 min-h-screen w-full rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-700">Categorías</h2>
        <button
          className="text-orange-700 hover:text-orange-900"
          aria-label="Agregar categoría"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center mb-8 md:w-3/5">
        <input
          type="text"
          placeholder="Categoría"
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition">
          Buscar
        </button>
      </div>

      {/* Categorías Populares */}
      <div className="mb-8">
        <h3 className="text-md font-semibold text-gray-700 mb-4">
          Tus categorías populares
        </h3>
        <div className="flex flex-wrap gap-4">
          {popularCategories.map((category, index) => (
            <div
              key={index}
              className="bg-orange-500 text-white px-6 py-4 rounded-lg shadow-md flex items-center"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Todas las Categorías */}
      <div>
        <h3 className="text-md font-semibold text-gray-700 mb-4">
          Todas las categorías
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {allCategories.map((category, index) => (
            <div
              key={index}
              className="bg-yellow-100 text-orange-500 border border-yellow-300 px-4 py-2 rounded-lg text-center font-medium shadow-sm hover:bg-yellow-200 transition"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
