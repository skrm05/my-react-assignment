import PropTypes from "prop-types";
import CartItem from "./CartItem";
import EmptyState from "./EmptyState";

function Cart({ cartItems, onClose, onUpdateQuantity, onRemove, onClearCart }) {
  // Total price calculation with tax [cite: 329]
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="cart-overlay">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button className="close-cart" onClick={onClose}>
          &times;
        </button>
      </div>

      {cartItems.length === 0 ? (
        <EmptyState message="Your cart is currently empty." />
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() =>
                alert(`Proceeding to checkout. Total: $${total.toFixed(2)}`)
              }
            >
              Checkout
            </button>
            <button className="clear-cart-btn" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClearCart: PropTypes.func.isRequired,
};
export default Cart;
