import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/Layout.css";

export default function Layout() {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/pnf" ||
    location.pathname === "/login"
  ) {
    return (
      <>
        <main className="flex items-center justify-center">
          <Outlet />
        </main>
        <footer className="fixed bottom-0 text-center w-full bg-black/40 p-3">
          <Footer />
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="text-center bg-black/40 rounded-4xl">
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center bg-black/40 rounded-4xl">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 text-center w-full bg-black/40 p-3">
        <Footer />
      </footer>
    </>
  );
}
