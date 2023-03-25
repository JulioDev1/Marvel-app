import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import { GlobalStyles } from "./Global/styled";

import { Home } from "./pages/Home";
import { BuyCart } from "./pages/BuyCart";
import { ComicDetail } from "./pages/ComicDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shopping",
        element: <BuyCart />,
      },
      {
        path: "/:id",
        element: <ComicDetail />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
