import { useEffect, useState } from "react";
import "../Styles/DBActions.css";

export default function DBActions() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/employees/list");
      const data = await response.json();
      console.log("API Data: ", data);
      setData(data);
    } catch (error) {
      console.error("Failed to receive data: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Daten laden ...</div>;
  }

  return (
    <div>
      <table className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date of birth</th>
            <th>Email</th>
            <th>Department</th>
            <th>Hiring date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={"item " + i}>
                <td className="id" key={"id " + i}>
                  {item.id}
                </td>
                <td key={"firstName " + i}>{item.firstName}</td>
                <td key={"lastName " + i}>{item.lastName}</td>
                <td key={"dob " + i}>{item.dateOfBirth}</td>
                <td key={"email " + i}>{item.email}</td>
                <td key={"department " + i}>{item.department}</td>
                <td key={"hiringDate " + i}>{item.hiringDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
