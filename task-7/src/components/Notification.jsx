import { useState } from "react";

export default function Notification() {
  // Part C: Logical AND (&&) Operator [cite: 170, 172]
  const [count, setCount] = useState(3);

  return (
    <div className="box">
      <h2>Part C: Logical AND (&&)</h2>
      <div style={{ fontSize: "24px" }}>
        Inbox
        {/* Use && operator to conditionally show notification badge [cite: 173, 174] */}
        {count > 0 && <span className="badge">{count}</span>}
      </div>
      <button onClick={() => setCount(0)}>Clear Notifications</button>
      <button onClick={() => setCount(count + 1)}>Add Notification</button>
    </div>
  );
}
