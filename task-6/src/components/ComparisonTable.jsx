export default function ComparisonTable() {
  return (
    <div className="card">
      <h2>2. State vs Props Comparison [cite: 142]</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>State [cite: 143]</th>
            <th>Props [cite: 143]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition</td>
            <td>Internal memory of a component.</td>
            <td>Data passed from a parent component.</td>
          </tr>
          <tr>
            <td>Mutability</td>
            <td>Mutable (can be changed via setter).</td>
            <td>Immutable (read-only for child).</td>
          </tr>
          <tr>
            <td>When to use [cite: 144]</td>
            <td>For data that changes over time and affects UI.</td>
            <td>To configure a component or pass data down.</td>
          </tr>
          <tr>
            <td>Code Example [cite: 145]</td>
            <td>
              <code>const [val, setVal] = useState(0);</code>
            </td>
            <td>
              <code>&lt;Child name="John" /&gt;</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
