import Home from "./Componants/Home/Home";
import About from "./Componants/About/About";
import Portfolio from "./Componants/Portfolio/Portfolio";
import Contact from "./Componants/Contact/Contact";
import Layout from "./Componants/Layout/Layout ";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import NotFound from "./Componants/NotFound/NotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Navigate to={"/"} /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        {path:"*",element:<NotFound />},
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}


