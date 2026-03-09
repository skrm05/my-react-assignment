import { useState } from "react";

export default function UserForm() {
  // Part B: Object State [cite: 109, 111]
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    country: "",
  });

  // Proper state update without mutating original state [cite: 114]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <section>
      <h2>Part B: Object State User Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />{" "}
        {/* [cite: 112] */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={user.country}
          onChange={handleChange}
        />
      </form>
      <div
        style={{ marginTop: "10px", padding: "10px", background: "#f0f0f0" }}
      >
        <h3>Real-time Data Preview:</h3> {/* [cite: 113] */}
        <p>{JSON.stringify(user, null, 2)}</p>
      </div>
    </section>
  );
}
