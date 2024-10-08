import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeOptimize from "./CodeOptimize";
import PredMain from "./PredMain";
import PerfBench from "./PerfBench";
import Firmware from "./FirmwareAnal";
import "./App.css";
import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CodeOptimize />,
  },
  {
    path: "/predictive-maintenance",
    element: <PredMain />,
  },
  {
    path: "/performance-benchmark",
    element: <PerfBench />,
  },
  {
    path: "/firmware",
    element: <Firmware />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
