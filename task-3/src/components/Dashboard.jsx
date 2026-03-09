function Dashboard() {
  return (
    <section>
      {/* JSX comments must be wrapped in curly braces */}

      {/* Proper attribute naming (className, htmlFor) */}
      <div className="dashboard-container">
        <label htmlFor="searchInput">Search Data:</label>

        {/* Self-closing tags */}
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          aria-label="Search dashboard data" /* aria-* attributes for accessibility */
          required /* Boolean attribute, equivalent to required={true} */
        />
      </div>
    </section>
  );
}
export default Dashboard;
