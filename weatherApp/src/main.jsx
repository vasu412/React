import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeatherApp from "./weathercard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>
);
