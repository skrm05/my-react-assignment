import { useState } from "react";

export default function Counter() {
  // Part A: Simple State [cite: 102]
  const [count, setCount] = useState(0); // [cite: 106]

  return (
    <section>
      <h2>Part A: Simple State Counter</h2>
      <p>
        Current Count: <strong>{count}</strong>
      </p>{" "}
      {/* [cite: 108] */}
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      {/* [cite: 107] */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}
