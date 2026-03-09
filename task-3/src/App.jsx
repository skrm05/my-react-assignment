import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#333" }}>Task 3: JSX Mastery</h1>
      <UserProfile isOnline={true} />
      <Dashboard />
    </div>
  );
}
export default App;
