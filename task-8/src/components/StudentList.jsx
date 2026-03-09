export default function StudentList() {
  // Part A: Basic List Rendering [cite: 193]
  // Array of at least 10 student objects [cite: 196, 199]
  const students = [
    { id: "s1", name: "Alice", rollNumber: "101", grade: "A" },
    { id: "s2", name: "Bob", rollNumber: "102", grade: "B" },
    { id: "s3", name: "Charlie", rollNumber: "103", grade: "A" },
    { id: "s4", name: "Diana", rollNumber: "104", grade: "C" },
    { id: "s5", name: "Ethan", rollNumber: "105", grade: "B" },
    { id: "s6", name: "Fiona", rollNumber: "106", grade: "A" },
    { id: "s7", name: "George", rollNumber: "107", grade: "B" },
    { id: "s8", name: "Hannah", rollNumber: "108", grade: "A" },
    { id: "s9", name: "Ian", rollNumber: "109", grade: "C" },
    { id: "s10", name: "Jane", rollNumber: "110", grade: "A" },
  ];

  return (
    <div className="section-card">
      <h2>Part A: Student List</h2>
      <ul>
        {/* Use map() to render list, using unique id as key [cite: 197, 198] */}
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (Roll: {student.rollNumber}) - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
