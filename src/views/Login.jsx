import { Link } from "react-router";
export default function login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido inicia sesión</p>
      <div className="bg-slate-50 shadow rounded-lg p-10 mt-5">
        <form>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Tu email"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="text-gray-700 uppercase font-bold"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Tu contraseña"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <input
            type="submit"
            value="Acceder"
            className="bg-blue-600 w-full text-white font-bold py-3 px-10 rounded-lg uppercase cursor-pointer hover:bg-blue-700 transition-colors"
          />
        </form>
      </div>
      <nav>
        <Link to="/auth/register">
          <span className="text-blue-600 hover:text-blue-700 font-bold">
            ¿No tienes una cuenta? Regístrate
          </span>
        </Link>
      </nav>
    </>
  );
}
