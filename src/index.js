import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root/";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Project from "./routes/project";
import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/typography.scss";
import "./styles/variables.scss";
import "./styles/rc-pagination.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <Project />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// TODO Fix logo
