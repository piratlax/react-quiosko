export default function Producto({ producto }) {
  return (
    <div>
      <img
        src={`/img/${producto.imagen}.jpg`}
        alt={producto.nombre}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
      <p className="text-gray-600 mb-4">{producto.descripcion}</p>
      <p className="text-lg font-semibold">${producto.precio}</p>
    </div>
  );
}
