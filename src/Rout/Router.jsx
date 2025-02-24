import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomeLayout from "../pages/HomeLayout/HomeLayout";
import Register from "../pages/Register/Register";
import HouseDetails from "../pages/HomeLayout/Houses/HouseDetails";
import Login from "../pages/Register/Login/Login";
import Error404 from "../ErrorPage/Error404";
import ForSell from "../pages/ForRentAndSell/ForSell";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("/houses.json"),
      },
      {
        path: "/forSell",
        element: <ForSell></ForSell>,
        loader: () => fetch("/houses.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: <HouseDetails></HouseDetails>,
        loader: () => fetch("/houses.json"),
      },
    ],
  },
]);

export default router;