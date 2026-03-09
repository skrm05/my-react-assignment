import { useState } from "react";

// Child component displays props (cannot modify) [cite: 140]
function Child({ countProp }) {
  return (
    <div style={{ background: "#e9ecef", padding: "15px", marginTop: "10px" }}>
      <h4>Child Component</h4>
      <p>Received Prop Value: {countProp}</p>
      <p>
        <small>
          <em>(I cannot modify this value directly)</em>
        </small>
      </p>
    </div>
  );
}

export default function ParentChildDemo() {
  // Parent component with state [cite: 138]
  const [parentState, setParentState] = useState(0);

  return (
    <div className="card">
      <h2>1. Parent-Child Data Flow</h2>
      <h3>Parent Component</h3>
      <p>Parent State Value: {parentState}</p>
      {/* Parent can update state [cite: 141] */}
      <button onClick={() => setParentState(parentState + 1)}>
        Update State in Parent
      </button>

      {/* Pass state as props to child [cite: 139] */}
      <Child countProp={parentState} />
    </div>
  );
}
