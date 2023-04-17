import React, { lazy, Suspense } from "react";
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
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/UserContext";
import { useState } from "react";
const Instamart = lazy(() => import("./components/Instamart"));
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/Cart";
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "ajay",
    email: "ajay@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
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
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
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
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
