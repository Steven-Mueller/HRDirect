import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./Components/App";
import Pnf from "./Components/Pnf";
import Login from "./Components/Login";
import DBActions from "./Components/DBActions";

createRoot(document.getElementById("root")!).render(
  <div className="main-gradient text-white w-full h-screen flex justify-center items-center">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dbactions" element={<DBActions />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  </div>
);
