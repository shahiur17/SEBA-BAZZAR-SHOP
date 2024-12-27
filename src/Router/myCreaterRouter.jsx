import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/Layout/MainLayout";
import Home from "../Pages/HomePage/Home";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);

export default myCreateRouter;
