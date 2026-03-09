import { useState } from "react";

export default function LoginStatus() {
  // Part A: If-Else Rendering [cite: 157, 159]
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use if statement to return different JSX [cite: 161]
  if (isLoggedIn) {
    return (
      <div className="box">
        <h2>Part A: If-Else</h2>
        <p>Welcome, User!</p> {/* [cite: 163] */}
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  }

  return (
    <div className="box">
      <h2>Part A: If-Else</h2>
      <p>Please log in</p> {/* [cite: 164] */}
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );
}
