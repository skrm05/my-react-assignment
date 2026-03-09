import React from "react";

export default function TableRow() {
  // Use React.Fragment syntax [cite: 226]
  // Return multiple <td> elements without wrapping div [cite: 224]
  return (
    <React.Fragment>
      <td>Cell 1 Data</td>
      <td>Cell 2 Data</td>
      <td>Cell 3 Data</td>
    </React.Fragment>
  );
}
