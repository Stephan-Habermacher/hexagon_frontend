import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OuterenvelopeView from "./views/OuterenvelopeView.tsx";
import ProjectsOverviewView from "./views/ProjectsOverviewView.tsx";
import ProjectView from "./views/ProjectView.tsx";
import {
  BreadcrumbContext,
  BreadcrumbContextProvider,
} from "./context/BreadcrumbContext.tsx";

const router = createBrowserRouter([
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
    path: "/versandcouvert",
    element: <OuterenvelopeView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BreadcrumbContextProvider>
      <RouterProvider router={router} />
    </BreadcrumbContextProvider>
  </React.StrictMode>
);
