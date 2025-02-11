import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomeLayout from "../pages/HomeLayout/HomeLayout";
import Register from "../pages/Register/Register";
import HouseDetails from "../pages/HomeLayout/Houses/HouseDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("houses.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <HouseDetails></HouseDetails>
      },
    ],
  },
]);

export default router;