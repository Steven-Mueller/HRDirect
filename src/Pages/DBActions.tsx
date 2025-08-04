import { useState } from "react";
import GetAllEmployees from "./DBActions/GetAllEmployees";

export default function DBActions() {
  const [getAllEmployees, setGetAllEmployees] = useState(false);

  function handleGetAllEmployees() {
    getAllEmployees ? setGetAllEmployees(false) : setGetAllEmployees(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleGetAllEmployees}
        className="bg-red-500"
      >
        Show list of all employees
      </button>
      {getAllEmployees ? <GetAllEmployees /> : <></>}
    </>
  );
}
