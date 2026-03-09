import { useState } from "react";

export default function RegistrationForm() {
  // Part D: Form Events [cite: 264]
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  // Handle all form events appropriately [cite: 267]
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Real-time validation feedback [cite: 268]
    if (name === "password") {
      if (value.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 6 characters",
        }));
      } else {
        const newErrors = { ...errors };
        delete newErrors.password;
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6 || !formData.agreeTerms) {
      alert("Validation failed. Check form."); // Prevent form submission on validation failure [cite: 269]
      return;
    }
    alert("Registration Successful!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="card">
      <h2>Part D: Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Multiple input types (text, email, password, checkbox, radio, select) [cite: 266] */}
        <div className="form-group">
          <label>Username (Text)</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email (Email)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password (Password)</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Role (Select)</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{ display: "inline", marginLeft: "5px" }}>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              style={{ width: "auto" }}
            />
            Agree to Terms (Checkbox)
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
