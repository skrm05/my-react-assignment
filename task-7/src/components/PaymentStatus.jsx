import { useState } from "react";

export default function PaymentStatus() {
  // Part E: Complex Conditional [cite: 180]
  // [cite: 182, 183, 184]
  const [status, setStatus] = useState({
    isPaid: false,
    isShipped: false,
    isDelivered: false,
  });

  // Show appropriate message based on all three conditions [cite: 185]
  let message = "";
  if (!status.isPaid) {
    message = "Awaiting Payment. Please complete checkout.";
  } else if (status.isPaid && !status.isShipped) {
    message = "Payment received. Preparing for shipment.";
  } else if (status.isShipped && !status.isDelivered) {
    message = "Order is on the way!";
  } else if (status.isDelivered) {
    message = "Order delivered successfully. Enjoy!";
  }

  return (
    <div className="box">
      <h2>Part E: Complex Conditional</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <label>
          <input
            type="checkbox"
            checked={status.isPaid}
            onChange={(e) => setStatus({ ...status, isPaid: e.target.checked })}
          />{" "}
          Paid
        </label>
        <label>
          <input
            type="checkbox"
            checked={status.isShipped}
            onChange={(e) =>
              setStatus({ ...status, isShipped: e.target.checked })
            }
          />{" "}
          Shipped
        </label>
        <label>
          <input
            type="checkbox"
            checked={status.isDelivered}
            onChange={(e) =>
              setStatus({ ...status, isDelivered: e.target.checked })
            }
          />{" "}
          Delivered
        </label>
      </div>
      <div
        style={{
          padding: "15px",
          background: "#333",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Status: <strong>{message}</strong>
      </div>
    </div>
  );
}
