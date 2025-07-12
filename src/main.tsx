import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./Components/App";
import Pnf from "./Components/Pnf";
import Login from "./Components/Login";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<Pnf />} />
    </Routes>
  </BrowserRouter>
);
