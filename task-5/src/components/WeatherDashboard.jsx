import { useState } from "react";

export default function WeatherDashboard() {
  // Part D: Multiple State Variables [cite: 123, 125]
  const [temperature, setTemperature] = useState(72);
  const [humidity, setHumidity] = useState(45);
  const [windSpeed, setWindSpeed] = useState(10);
  const [location, setLocation] = useState("New York");

  const resetAll = () => {
    // [cite: 128]
    setTemperature(0);
    setHumidity(0);
    setWindSpeed(0);
    setLocation("");
  };

  return (
    <section>
      <h2>Part D: Multiple States Weather Dashboard</h2>
      <div className="weather-grid">
        {/* Input fields to update each state independently [cite: 126] */}
        <div>
          <label>Location:</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Temperature (°F):</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Humidity (%):</label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Wind Speed (mph):</label>
          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(Number(e.target.value))}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          padding: "15px",
          background: "#e3f2fd",
          borderRadius: "8px",
        }}
      >
        {/* Display all values in a card layout [cite: 127] */}
        <h3>Current Weather in {location || "Unknown"}</h3>
        <p>
          {temperature}°F | {humidity}% Humidity | {windSpeed} mph Wind
        </p>
      </div>
      <button
        onClick={resetAll}
        style={{ background: "red", marginTop: "10px" }}
      >
        Reset All
      </button>
    </section>
  );
}
