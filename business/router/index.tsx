import About from "@business/about";
import { useRoutes } from "react-router-dom";
import App from "../app/App";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
}
