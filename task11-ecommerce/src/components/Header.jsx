import PropTypes from "prop-types";

export default function Header({
  cartItemCount,
  onCartToggle,
  isAuthenticated,
  onLoginToggle,
}) {
  return (
    <header className="header">
      <h1>TechStore</h1>
      <div className="header-actions">
        <span>{isAuthenticated ? "Welcome, User" : "Guest"}</span>
        <button
          onClick={onLoginToggle}
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
        <button className="cart-btn" onClick={onCartToggle}>
          🛒 Cart ({cartItemCount})
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  onCartToggle: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onLoginToggle: PropTypes.func.isRequired,
};
