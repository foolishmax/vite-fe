import About from "@business/about";
import App from "@business/app";
import { useRoutes } from "react-router-dom";

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
