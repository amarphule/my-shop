import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Addcustomer from "../components/Addcustomer.jsx";
import CustomerDetails from "../components/CustomerDetails.jsx";
import Hero from "../components/Hero.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "customer",
        element: <Addcustomer />,
      },
      {
        path: "customer/:id",
        element: <Addcustomer />,
      },
      {
        path: "customer/edit/:id",
        element: <CustomerDetails />,
      },
    ],
  },
]);
