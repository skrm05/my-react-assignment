import { useState } from "react";

export default function EventDemo() {
  // Part A: Basic Events [cite: 243]
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // onSubmit event (form submission with preventDefault) [cite: 248]
    alert(`Submitted text: ${text}`);
  };

  return (
    <div className="card">
      <h2>Part A: Basic Events</h2>

      {/* onClick event [cite: 246] */}
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>

      <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
        {/* onChange, onFocus, onBlur events [cite: 247, 250] */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type here..."
          style={{ border: isFocused ? "2px solid blue" : "1px solid gray" }}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Current input value: {text}</p>

      {/* onMouseEnter and onMouseLeave events [cite: 251] */}
      <div
        className="hover-box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundColor: isHovered ? "lightgreen" : "lightblue" }}
      >
        {isHovered ? "Hovered!" : "Hover me"}
      </div>
    </div>
  );
}
