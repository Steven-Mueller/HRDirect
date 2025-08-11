import { useEffect, useState } from "react";
import "../Styles/Welcome.css";

export default function Welcome() {
  const apiUrl = import.meta.env.VITE_API_QUOTES;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const resData = await response.json();
      localStorage.setItem("quotes", JSON.stringify(resData));
      localStorage.setItem("quote_index", index.toString());
      setData(resData);
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
    } else {
      setIndex(Number(localStorage.getItem("quote_index")));
      setData(JSON.parse(localStorage.getItem("quotes") || "[]"));
    }

    const handleBeforeUnload = () => {
      const incrementIndex = index + 1;
      localStorage.setItem("quote_index", incrementIndex.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [index]);

  return (
    <div className="flex flex-col gap-10 text-center">
      <h1 className="font-extrabold text-4xl text-shadow-lg text-shadow-black/50">
        Welcome to HRDirect
      </h1>
      <div className="flex flex-row w-full h-1/5 gap-10">
        <p className="font-extrabold text-shadow-lg text-shadow-black/50">
          Quote of the day:
        </p>
        <blockquote className="quote text-right">
          <i>
            "
            {data &&
              JSON.parse(localStorage.getItem("quotes") || "[]")[index]?.q}
            "
            <br />
            <br />
            <span className="text-shadow-lg text-shadow-black/50 mr-3">
              -{" "}
              {data &&
                JSON.parse(localStorage.getItem("quotes") || "[]")[index]?.a}
            </span>
          </i>
        </blockquote>
      </div>
    </div>
  );
}
