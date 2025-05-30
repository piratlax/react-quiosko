import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Llena tu formulario</p>
      <div className="bg-slate-50 shadow rounded-lg p-10 mt-5">
        <form>
          <div className="mb-5">
            <label htmlFor="name" className="text-gray-700 uppercase font-bold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
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
          <div className="mb-5">
            <label
              htmlFor="password_confirmation"
              className="text-gray-700 uppercase font-bold"
            >
              Repetir Contraseña
            </label>
            <input
              type="password"
              id="password_confirmation"
              placeholder="Repetir contraseña"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-blue-600 w-full text-white font-bold py-3 px-10 rounded-lg uppercase cursor-pointer hover:bg-blue-700 transition-colors"
          />
        </form>
      </div>
      <nav>
        <Link to="/auth/login">
          <span className="text-blue-600 hover:text-blue-700 font-bold">
            ¿ya tienes cuenta? Inicia sesión
          </span>
        </Link>
      </nav>
    </>
  );
}
