import { useState } from "react";

export default function TodoList() {
  // Part C: Array State [cite: 115, 117]
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    // [cite: 119]
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input, completed: false }; // [cite: 118]
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    // [cite: 120]
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    // [cite: 121]
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length; // [cite: 122]
  const pendingCount = todos.length - completedCount;

  return (
    <section>
      <h2>Part C: Array State Todo List</h2>
      <p>
        Completed: {completedCount} | Pending: {pendingCount}
      </p>{" "}
      {/* [cite: 122] */}
      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}
