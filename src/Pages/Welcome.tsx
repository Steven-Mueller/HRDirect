import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    document.title += " Welcome";
  }, []);

  return (
    <>
      <h1>welcome</h1>
    </>
  );
}
