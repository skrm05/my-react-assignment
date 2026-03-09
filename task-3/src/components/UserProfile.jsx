function UserProfile({ isOnline }) {
  // Inline styles with JavaScript objects
  const profileStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  // Embedded JavaScript expressions using {}
  const username = "JaneDoe_99";

  // Dynamic className assignment
  const statusClass = isOnline ? "status-online" : "status-offline";

  return (
    <div style={profileStyle} className={statusClass}>
      {/* HTML entities properly escaped */}
      <h2>Welcome back, &lt;{username}&gt; &copy;</h2>

      {/* Multi-line JSX with proper indentation */}
      <p>Your profile is currently active. You have 3 new messages.</p>
    </div>
  );
}
export default UserProfile;
