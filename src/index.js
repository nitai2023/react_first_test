
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { App } from "./App";
import Message from "./routes/message";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path:"message",
    element:<Message />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);