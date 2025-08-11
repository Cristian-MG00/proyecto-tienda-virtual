import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Layout } from "./components/Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
