import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/Layout/MainLayout";
import Book from "../Pages/Book";
import Electronic from "../Pages/Electronic";
import Fashion from "../Pages/Fashion";
import Foods from "../Pages/Foods";
import Home from "../Pages/HomePage/Home";
import Jewellery from "../Pages/Jewellery";
import Pharmacy from "../Pages/Pharmacy";
import Phones from "../Pages/Phones";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/fashion",
        element: <Fashion></Fashion>,
      },
      {
        path: "/phone",
        element: <Phones></Phones>,
      },
      {
        path: "/pharmacy",
        element: <Pharmacy></Pharmacy>,
      },
      {
        path: "/book",
        element: <Book></Book>,
      },
      {
        path: "/jewellery",
        element: <Jewellery></Jewellery>,
      },
      {
        path: "/food",
        element: <Foods></Foods>,
      },
      {
        path: "/electronic",
        element: <Electronic></Electronic>,
      },
    ],
  },
]);

export default myCreateRouter;
