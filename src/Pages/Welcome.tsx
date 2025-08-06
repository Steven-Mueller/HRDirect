import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    if (!document.title.includes("Welcome")) {
      document.title = "HRDirect - Welcome";
    }
  }, []);

  return (
    <>
      <h1>welcome</h1>
    </>
  );
}
