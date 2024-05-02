import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectView from "./views/ProjectView.tsx";
import OuterenvelopeView from "./views/OuterenvelopeView.tsx";
import ProjectsOverviewView from "./views/ProjectsOverviewView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projekt",
    element: <ProjectView />,
  },
  { path: "/projektuebersicht", element: <ProjectsOverviewView /> },
  {
    path: "/versandcouvert",
    element: <OuterenvelopeView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
