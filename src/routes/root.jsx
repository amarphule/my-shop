import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import AddCustomer from "../components/AddCustomer.jsx";
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
        element: <AddCustomer />,
      },
      {
        path: "customer/:id",
        element: <AddCustomer />,
      },
      {
        path: "customer/edit/:id",
        element: <CustomerDetails />,
      },
    ],
  },
]);
