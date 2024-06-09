import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import MoreFactory from "../Components/MoreFactory/MoreFactory";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/moreFactory",
        element: <MoreFactory />,
      },
    ],
  },
]);

export default Route;
