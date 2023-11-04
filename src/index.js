
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { App } from "./App";
import Message from "./routes/message";
import {Components} from "./routes/components";
import {Activity} from "./routes/activity";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path:"message",
    element:<Message />,
  },
  {
    path:"components",
    element:<Components />
  },
  {
    path:"activity",
    element:<Activity />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);