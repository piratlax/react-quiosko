import { categorias } from "../data/categorias";
import Categoria from "./Categoria";
export default function Sidebar() {
  return (
    <aside className="md:w-72 p-3">
      <div className="p-4 items-center">
        <img className="w-40" src="img/logo.svg" alt="logotipo" />
      </div>
      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
      <div className="my-5 px-2">
        <button
          type="button"
          className="text-center w-full rounded-xl cursor-pointer bg-red-500 text-white p-3 font-bold truncate hover:bg-red-600 transition-colors"
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}
