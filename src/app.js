import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutClass from "./components/AboutClass";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Order from "./components/Order";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
const AppLayout = () => (
  <div>
    <Header />
    <Outlet/>
    <Footer/>
  </div>
);
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
        children: [{
          path: "profile",
          element: <ProfileClass />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
