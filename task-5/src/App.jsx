import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import TodoList from "./components/TodoList";
import WeatherDashboard from "./components/WeatherDashboard";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Task 5: State Management</h1>
      <Counter />
      <UserForm />
      <TodoList />
      <WeatherDashboard />
    </div>
  );
}
