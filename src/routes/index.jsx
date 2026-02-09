import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Notfound from "../pages/not-found";
import Ferries from "../pages/ferries";
import Cars from "../pages/cars";
import Excursions from "../pages/excursions";
import Cruises from "../pages/cruises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ferries",
    element: <Ferries />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
  {
    path: "/excursion",
    element: <Excursions />,
  },
  {
    path: "/crusies",
    element: <Cruises />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
export default router