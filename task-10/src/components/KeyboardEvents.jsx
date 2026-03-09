import { useState, useEffect } from "react";

export default function KeyboardEvents() {
  // Part C: Synthetic Events [cite: 258]
  const [keyInfo, setKeyInfo] = useState({
    key: "",
    code: "",
    shortcutMsg: "",
  });

  // onKeyDown event to detect specific keys [cite: 260]
  const handleKeyDown = (e) => {
    // Log event object properties [cite: 263]
    console.log("Synthetic Event Object:", e);
    console.log("Key pressed:", e.key, "Code:", e.code);

    let shortcut = "";
    // Implement keyboard shortcuts (Ctrl+S, Ctrl+K, etc.) [cite: 262]
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault(); // Prevent browser save
      shortcut = "Saved data! (Ctrl + S detected)";
    } else if (e.ctrlKey && e.key === "k") {
      e.preventDefault(); // Prevent browser search
      shortcut = "Search opened! (Ctrl + K detected)";
    }

    setKeyInfo({ key: e.key, code: e.code, shortcutMsg: shortcut });
  };

  return (
    <div className="card">
      <h2>Part C: Keyboard Events</h2>
      <p>Focus the input below and press keys (Try Ctrl+S or Ctrl+K)</p>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Type here to test keys..."
      />
      <div
        style={{
          marginTop: "10px",
          background: "#333",
          color: "white",
          padding: "10px",
        }}
      >
        {/* Display key pressed in real-time [cite: 261] */}
        <p>
          Key: <strong>{keyInfo.key}</strong>
        </p>
        <p>
          Code: <strong>{keyInfo.code}</strong>
        </p>
        {keyInfo.shortcutMsg && (
          <p style={{ color: "yellow" }}>{keyInfo.shortcutMsg}</p>
        )}
      </div>
    </div>
  );
}
