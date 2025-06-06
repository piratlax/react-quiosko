import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Resumen from "./Resumen";

export default function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Resumen />
    </div>
  );
}
