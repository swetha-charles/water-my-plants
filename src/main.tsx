import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import "./index.css";
import WateringSchedule from "./routes/WateringSchedule";
import PlantList from "./routes/PlantList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <PlantList /> },
      {
        path: "/watering-schedule",
        element: <WateringSchedule />,
      },
      {
        path: "/plants",
        element: <PlantList />,
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
