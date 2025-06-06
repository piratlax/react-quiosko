import { productos } from "../data/productos";
import Producto from "../components/Producto";
export default function Inicio() {
  return (
    <>
      <h1 className="text-4xl font-black">Inicio</h1>
      <p className="text-2xl my-10">Personaliza tu pedido</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <Producto producto={producto} />
          </div>
        ))}
      </div>
    </>
  );
}
