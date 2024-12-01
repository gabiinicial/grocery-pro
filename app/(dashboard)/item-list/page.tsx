// components/Checklist.tsx
import { Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function Checklist() {
  const items = [
    "Compra para limpieza",
    "Compra para limpieza",
    "Compra para limpieza",
    "Compra para limpieza",
    "Compra para limpieza",
  ];

  return (
    <div className="p-8 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">Nombre de la lista</h2>
        <button
          className="text-orange-700 hover:text-orange-900"
          aria-label="Agregar ítem"
        >
          <Link href="/create">
            <Plus className="w-5 h-5" />
          </Link>
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-transparent px-2 py-3 rounded-lg shadow-sm border"
          >
            {/* Checkbox y texto */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`item-${index}`}
                className="mr-3 w-4 h-4 accent-orange-500"
              />
              <label
                htmlFor={`item-${index}`}
                className="text-sm font-medium text-gray-700"
              >
                {item}
              </label>
            </div>

            {/* Botón de eliminar */}
            <button
              className="text-red-500 hover:text-red-700"
              aria-label="Eliminar ítem"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
