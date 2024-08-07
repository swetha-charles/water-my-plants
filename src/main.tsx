import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import "./index.css";
import WateringSchedule from "./routes/WateringSchedule";
import PlantList from "./routes/PlantList";
import PlantDetail from "./routes/PlantDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PlantList />,
        children: [
          {
            path: "/:plantId",
            element: <PlantDetail />,
          },
        ],
      },
      {
        path: "/watering-schedule",
        element: <WateringSchedule />,
      },
    ],
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
