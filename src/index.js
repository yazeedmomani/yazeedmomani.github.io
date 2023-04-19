import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/typography.scss";
import "./styles/index.scss";

import Root from "./routes/root/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
