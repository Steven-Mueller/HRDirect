import { useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  return <>{(location.pathname === "/" || location.pathname === "/pnf") ? <></> : <Navi />}</>;
}

function Navi() {
  return (
    <>
      <h1>Navigation</h1>
    </>
  );
}
