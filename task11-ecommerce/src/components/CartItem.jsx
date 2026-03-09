import PropTypes from "prop-types";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h4 style={{ fontSize: "0.9rem", marginBottom: "4px" }}>
          {item.title}
        </h4>
        <p style={{ fontWeight: "bold", color: "#1a237e" }}>
          ${item.price.toFixed(2)}
        </p>

        <div className="qty-controls">
          {/* Product quantity selector [cite: 327] */}
          <button
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, -1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>

        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
