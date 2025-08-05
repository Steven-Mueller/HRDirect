import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/Layout.css";

export default function Layout() {
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
