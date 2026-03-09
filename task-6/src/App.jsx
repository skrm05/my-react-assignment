import ParentChildDemo from "./components/ParentChildDemo";
import ComparisonTable from "./components/ComparisonTable";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Task 6: State vs Props Demonstration</h1>
      <ParentChildDemo />
      <ComparisonTable />
      <ShoppingCart />
    </div>
  );
}
