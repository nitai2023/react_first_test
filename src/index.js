
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
import { Component } from "./routes/components/component";
import { Component2 } from "./routes/components/component2";
import { Component3 } from "./routes/components/component3";
import { Component4 } from "./routes/components/component4";
import { Component5 } from "./routes/components/component5";
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
    element:<Components />,
    children:[
      {
        path:"components/component",
        element:<Component></Component>
      },
      {
        path:"components/component2",
        element:<Component2></Component2>
      },
      {
        path:"components/component3",
        element:<Component3></Component3>
      },
      {
        path:"components/component4",
        element:<Component4></Component4>
      },
      {
        path:"components/component5",
        element:<Component5></Component5>
      }
    ]
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