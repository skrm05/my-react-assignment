import { useState } from "react";

export default function SubscriptionStatus() {
  // Part B: Ternary Operator [cite: 165, 167]
  const [subType, setSubType] = useState("free");

  return (
    <div className="box">
      <h2>Part B: Ternary Operator</h2>
      <select value={subType} onChange={(e) => setSubType(e.target.value)}>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="enterprise">Enterprise</option>
      </select>

      <div style={{ marginTop: "15px" }}>
        {/* Use ternary operator to display different features [cite: 168, 169] */}
        {subType === "free" ? (
          <p>You have basic access with ads.</p>
        ) : subType === "premium" ? (
          <p>Welcome to Premium! No ads, HD quality.</p>
        ) : (
          <p>Enterprise Tier: 24/7 Support and unlimited access.</p>
        )}
      </div>
    </div>
  );
}
