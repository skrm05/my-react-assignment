import React from "react";

export default function FormFields() {
  const dynamicFields = [
    { id: "f1", label: "First Name", type: "text" },
    { id: "f2", label: "Last Name", type: "text" },
  ];

  return (
    // Use short syntax <> </> [cite: 227]
    <>
      <div className="form-row">
        <label>Username</label>
        <input type="text" placeholder="Enter username" />
      </div>

      {/* Demonstrate fragment with key attribute [cite: 230] */}
      {/* Note: The short syntax <></> does NOT support keys. We must use React.Fragment when mapping [cite: 230] */}
      {dynamicFields.map((field) => (
        <React.Fragment key={field.id}>
          <div className="form-row">
            <label>{field.label}</label>
            <input type={field.type} />
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
