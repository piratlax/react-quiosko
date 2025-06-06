import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import AuthLayout from "../components/AuthLayout";
import Inicio from "../views/Inicio";
import Login from "../views/Login";
import Register from "../views/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
