import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/", 
                element: <Home/>
            },
            {
                path: "/about_us", 
                element: <AboutUs/>
            }
        ]
    }
])

export default Route;