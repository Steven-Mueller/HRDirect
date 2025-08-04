import { useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  return <>{location.pathname === "/" ? <></> : <Navi />}</>;
}

function Navi() {
  return (
    <>
      <h1>mein Navi</h1>
    </>
  );
}
