import { useState } from "react";

export default function EmployeeDirectory() {
  // Part C: List with Actions [cite: 205]
  // List of employees [cite: 207]
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", department: "Engineering", salary: 85000 }, // Each employee has id, name, dept, salary [cite: 208]
    { id: 2, name: "Jane Smith", department: "HR", salary: 65000 },
  ]);
  const [search, setSearch] = useState("");

  const addEmployee = () => {
    const newEmp = {
      id: Date.now(),
      name: "New Hire",
      department: "Sales",
      salary: 50000,
    };
    setEmployees([...employees, newEmp]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const updateSalary = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, salary: emp.salary + 5000 } : emp,
      ),
    );
  };

  // Implement search/filter functionality [cite: 209]
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="section-card">
      <h2>Part C: Employee Directory</h2>
      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={addEmployee}>Add Employee</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Maintain proper keys when list changes [cite: 210] */}
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>${emp.salary}</td>
              <td>
                <button onClick={() => updateSalary(emp.id)}>Give Raise</button>
                <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
