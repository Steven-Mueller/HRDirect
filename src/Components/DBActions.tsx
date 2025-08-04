import { useEffect, useState } from "react";
import "../Styles/DBActions.css";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  department: string;
  hiringDate: string;
}

export default function DBActions() {
  const [data, setData] = useState<Employee[]>([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/employees/list");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Failed to receive data: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Daten werden geladen ...</div>;
  }

  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-center font-extrabold text-3xl underline">
        Employee list
      </h1>
      <table className="text-center shadow-2xl">
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
          {data.map((item) => (
            <tr key={item.id}>
              <td className="id">{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.email}</td>
              <td>{item.department}</td>
              <td>{item.hiringDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
