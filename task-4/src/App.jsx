import MovieList from "./components/MovieList";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Task 4: Props Implementation</h1>

      <section>
        <h2>Movie Directory</h2>
        <MovieList />
      </section>

      <section>
        <h2>Interactive Buttons</h2>
        <div className="button-container">
          <Button variant="primary" onClick={() => alert("Primary clicked!")}>
            Primary Action
          </Button>
          <Button
            variant="secondary"
            onClick={() => alert("Secondary clicked!")}
          >
            Secondary Action
          </Button>
          <Button variant="danger" onClick={() => alert("Danger clicked!")}>
            Delete Item
          </Button>
          <Button disabled={true} onClick={() => {}}>
            Disabled Button
          </Button>
        </div>
      </section>
    </div>
  );
}
export default App;
