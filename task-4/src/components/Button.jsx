import PropTypes from "prop-types";

function Button({ children, onClick, variant, disabled }) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return "blue";
      case "secondary":
        return "gray";
      case "danger":
        return "red";
      default:
        return "white";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: getBackgroundColor(), padding: "10px" }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};

export default Button;
