import { Outlet } from "react-router";
export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col items-center md:flex-row md:justify-center gap-10">
      <img src="../img/logo.svg" alt="Imagen logotipo" className="max-w-xs" />
      <div>
        <Outlet />
      </div>
    </main>
  );
}
