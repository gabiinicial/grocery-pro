export default function Notification() {
  return (
    <div className=" p-4 rounded-md space-y-4 w-full">
      <div
        className="flex justify-between flex-col border p-2 border-orange-400  rounded-lg bg-orange-300/20
        hover:bg-orange-400/40"
      >
        <h3 className="font-medium text-slate-900">
          Has creado una nueva lista
        </h3>
        <p className="text-gray-500">
          tienes una nueva lista “super” comienza a agregar tus items
        </p>
        <p className="text-amber-950">Haz 10 minutos</p>
      </div>

      <div
        className="flex  justify-between flex-col border p-2 border-slate-400  rounded-lg bg-transparent
        hover:bg-slate-100"
      >
        <h3 className="font-medium  text-slate-900">
          Has creado una nueva lista
        </h3>
        <p className="text-gray-500">
          tienes una nueva lista “super” comienza a agregar tus items
        </p>{" "}
        <p className="text-amber-950">Haz 10 minutos</p>
      </div>
    </div>
  );
}
