import { useEffect } from "react";

export default function Welcome() {
  const apiUrl = import.meta.env.VITE_API_QUOTES;

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      localStorage.setItem("quotes", JSON.stringify(data));
    } catch (error) {
      console.log("Failed to receive data", error);
    }
  }

  useEffect(() => {
    if (!document.title.includes("Welcome")) {
      document.title = "HRDirect - Welcome";
    }

    if (!localStorage.getItem("quotes")) {
      fetchData();
    }
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-extrabold underline text-4xl">Welcome to HRDirect</h1>
      <p>
        Quote of the day:
        {JSON.parse(localStorage.getItem("quotes") || "[]")[0]?.q}
      </p>
    </div>
  );
}
