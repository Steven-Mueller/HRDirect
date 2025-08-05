// src/components/CountdownRedirect.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pnf() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (secondsLeft > 0) return;

    navigate("/");
  }, [secondsLeft]);

  useEffect(() => {
    const timerId = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <h1>Page not found... Redirecting in {secondsLeft}</h1>
    </div>
  );
}
