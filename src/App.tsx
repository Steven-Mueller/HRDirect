import { Route, Routes } from "react-router";
import "./Styles/App.css";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import Welcome from "./Pages/Welcome";
import DBActions from "./Pages/DBActions";
import Pnf from "./Pages/PageNotFound/Pnf";
import RedirectToPnf from "./Pages/PageNotFound/RedirectToPnf";
import PrivateRoute from "./Components/Context/utils/PrivateRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dbactions"
              element={
                <PrivateRoute>
                  <DBActions />
                </PrivateRoute>
              }
            />
            <Route path="/pnf" element={<Pnf />} />
            <Route path="*" element={<RedirectToPnf />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
