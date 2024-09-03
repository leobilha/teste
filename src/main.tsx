import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Login from "./pages/Login/Login";
import Authentication from "./pages/Authentication/Authentication";

import "./index.css";
import "primeicons/primeicons.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
