import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsOverviewView from "./views/ProjectsOverviewView.tsx";
import ProjectView from "./views/ProjectView.tsx";
import { BreadcrumbContextProvider } from "./context/BreadcrumbContext.tsx";
import ProductView from "./views/ProductView.tsx";
import { ProductTypes } from "./types/types.ts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    { path: "/projektuebersicht", element: <ProjectsOverviewView /> },
    {
      path: "/projekt",
      element: <ProjectView />,
    },
    {
      path: "/projekt/:id",
      element: <ProjectView />,
    },
    {
      path: "/projekt/:id/versandcouvert",
      element: <ProductView product={ProductTypes.Versandcouvert} />,
    },
    {
      path: "/projekt/:id/anschreiben",
      element: <ProductView product={ProductTypes.Anschreiben} />,
    },
    {
      path: "/projekt/:id/flyer",
      element: <ProductView product={ProductTypes.Flyer} />,
    },
    {
      path: "/projekt/:id/karten",
      element: <ProductView product={ProductTypes.Karten} />,
    },
  ],
  { basename: "/hexagon_frontend/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BreadcrumbContextProvider>
      <RouterProvider router={router} />
    </BreadcrumbContextProvider>
  </React.StrictMode>
);
