import TableRow from "./components/TableRow";
import FormFields from "./components/FormFields";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Task 9: React Fragments</h1>

      <div className="card">
        <h2>1. Table Row (React.Fragment)</h2>
        <table>
          <tbody>
            <tr>
              <TableRow />
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>2. Form Fields (Short Syntax & Keyed Fragment)</h2>
        <form>
          <FormFields />
          <button
            type="submit"
            style={{ padding: "10px 15px", marginTop: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
