import { useState } from "react";

export default function UserDashboard() {
  // Part D: Switch Case Pattern [cite: 175, 177]
  const [role, setRole] = useState("viewer");

  // Use function with switch case to render different dashboards [cite: 178]
  const renderDashboard = () => {
    switch (role) {
      case "admin":
        return (
          <div className="admin p-2">Admin Panel: Full Access Control</div>
        ); /* [cite: 179] */
      case "editor":
        return <div className="editor p-2">Editor Panel: Can Edit Content</div>;
      case "viewer":
        return <div className="viewer p-2">Viewer Panel: Read-only access</div>;
      case "guest":
      default:
        return <div>Guest Panel: Please sign up</div>;
    }
  };

  return (
    <div className="box">
      <h2>Part D: Switch Case Pattern</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
        <option value="guest">Guest</option>
      </select>
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          border: "1px dashed gray",
        }}
      >
        {renderDashboard()}
      </div>
    </div>
  );
}
