import LoginStatus from "./components/LoginStatus";
import SubscriptionStatus from "./components/SubscriptionStatus";
import Notification from "./components/Notification";
import UserDashboard from "./components/UserDashboard";
import PaymentStatus from "./components/PaymentStatus";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Task 7: Conditional Rendering</h1>
      <LoginStatus />
      <SubscriptionStatus />
      <Notification />
      <UserDashboard />
      <PaymentStatus />
    </div>
  );
}
