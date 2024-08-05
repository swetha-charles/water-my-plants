import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import "./index.css";
import WateringSchedule from "./components/WateringSchedule";
import PlantList from "./components/PlantList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/watering-schedule",
        element: <WateringSchedule />,
      },
      {
        path: "/plants",
        element: <PlantList />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
