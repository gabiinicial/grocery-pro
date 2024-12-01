// components/CreateListForm.tsx
export default function CreateListForm() {
  return (
    <div className=" w-full">
      <h2 className="text-lg font-bold text-gray-700 mb-6">Crear Listas</h2>
      <form className="grid gap-3">
        {/* Nombre y Categoría */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nombres"
              className="block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Categoría */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Selecciona una categoría
            </label>
            <select
              id="category"
              className="block w-full border border-gray-300  rounded-lg p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="" className="text-gray-700">
                Selecciona una categoría
              </option>
              <option value="limpieza" className="text-gray-700">
                Limpieza
              </option>
              <option value="comida" className="text-gray-700">
                Comida
              </option>
              <option value="hogar" className="text-gray-700">
                Hogar
              </option>
            </select>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descripción
          </label>
          <textarea
            id="description"
            placeholder="Tu descripción aquí"
            rows={4}
            className="block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          ></textarea>
        </div>

        {/* Drag & Drop File Upload */}
        <div className="border-2 border-dashed border-orange-400 rounded-lg p-6 text-center bg-gray-100">
          <div className="flex flex-col items-center">
            <div className="text-orange-500 mb-2">
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1214_915)">
                  <path
                    d="M43.7929 4.08667H18.5618V14.5498H49.1816V9.47329C49.1816 6.50282 46.7642 4.08667 43.7929 4.08667Z"
                    fill="#CED9F9"
                  />
                  <path
                    d="M29.5104 16.1599H0V6.45119C0 2.89368 2.89494 0 6.4537 0H15.8892C16.827 0 17.7305 0.197639 18.5513 0.569C19.6976 1.08555 20.6825 1.93695 21.3732 3.04935L29.5104 16.1599Z"
                    fill="#FA7023"
                  />
                  <path
                    d="M55 18.3336V49.6068C55 52.581 52.5788 55.0001 49.6033 55.0001H5.39669C2.42119 55.0001 0 52.581 0 49.6068V12.939H49.6033C52.5788 12.939 55 15.3589 55 18.3336Z"
                    fill="#FF792F"
                  />
                  <path
                    d="M55 18.3336V49.6068C55 52.581 52.5788 55.0001 49.6033 55.0001H27.5V12.939H49.6033C52.5788 12.939 55 15.3589 55 18.3336Z"
                    fill="#FF8039"
                  />
                  <path
                    d="M41.9676 33.9688C41.9676 41.9469 35.4773 48.4376 27.5 48.4376C19.5227 48.4376 13.0325 41.9469 13.0325 33.9688C13.0325 25.9919 19.5227 19.5012 27.5 19.5012C35.4773 19.5012 41.9676 25.9919 41.9676 33.9688Z"
                    fill="#E7ECFC"
                  />
                  <path
                    d="M41.9675 33.9688C41.9675 41.9469 35.4773 48.4376 27.5 48.4376V19.5012C35.4773 19.5012 41.9675 25.9919 41.9675 33.9688Z"
                    fill="#CED9F9"
                  />
                  <path
                    d="M32.1632 34.1462C31.8615 34.4018 31.4918 34.5264 31.1255 34.5264C30.6668 34.5264 30.2111 34.3321 29.8922 33.9536L29.1113 33.0279V39.0885C29.1113 39.9781 28.3896 40.6998 27.5 40.6998C26.6104 40.6998 25.8887 39.9781 25.8887 39.0885V33.0279L25.1078 33.9536C24.5329 34.6338 23.517 34.7207 22.8368 34.1462C22.157 33.5726 22.0697 32.5563 22.6433 31.8761L25.8328 28.0949C26.2487 27.6031 26.8555 27.3203 27.5 27.3203C28.1445 27.3203 28.7513 27.6031 29.1671 28.0949L32.3566 31.8761C32.9302 32.5563 32.843 33.5726 32.1632 34.1462Z"
                    fill="#6C8DEF"
                  />
                  <path
                    d="M32.1632 34.1462C31.8615 34.4018 31.4918 34.5264 31.1255 34.5264C30.6668 34.5264 30.2111 34.3321 29.8922 33.9536L29.1113 33.0279V39.0885C29.1113 39.9781 28.3896 40.6998 27.5 40.6998V27.3203C28.1445 27.3203 28.7513 27.6031 29.1671 28.0949L32.3566 31.8761C32.9303 32.5563 32.843 33.5726 32.1632 34.1462Z"
                    fill="#3B67E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1214_915">
                    <rect width="55" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-sm text-gray-500">
              Drag your file(s) to start uploading or click
            </p>
          </div>
        </div>

        {/* Botón Crear Lista */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Crear Lista
          </button>
        </div>
      </form>
    </div>
  );
}
