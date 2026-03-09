import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

// App is the root component [cite: 24]
function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
export default App;
