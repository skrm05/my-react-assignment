import StudentList from "./components/StudentList";
import CategoryProducts from "./components/CategoryProducts";
import EmployeeDirectory from "./components/EmployeeDirectory";
import PlaylistManager from "./components/PlaylistManager";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Task 8: Lists and Keys</h1>
      <StudentList />
      <CategoryProducts />
      <EmployeeDirectory />
      <PlaylistManager />
    </div>
  );
}
