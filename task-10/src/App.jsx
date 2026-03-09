import EventDemo from "./components/EventDemo";
import ProductCatalog from "./components/ProductCatalog";
import KeyboardEvents from "./components/KeyboardEvents";
import RegistrationForm from "./components/RegistrationForm";
import CommentSection from "./components/CommentSection";
import "./App.css";

export default function App() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#f9f9f9", padding: "20px" }}
    >
      <h1>Task 10: Event Handling</h1>
      <EventDemo />
      <ProductCatalog />
      <KeyboardEvents />
      <RegistrationForm />
      <CommentSection />
    </div>
  );
}
