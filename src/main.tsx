import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <div className="main-gradient text-white w-full h-screen flex justify-center items-center">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
