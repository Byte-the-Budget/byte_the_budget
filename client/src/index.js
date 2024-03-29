import React from "react";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
