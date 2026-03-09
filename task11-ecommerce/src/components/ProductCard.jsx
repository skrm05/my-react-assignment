import PropTypes from "prop-types";
import Badge from "./Badge";

export default function ProductCard({ product, onAddToCart }) {
  const { title, price, image, category, rating, inStock } = product; // [cite: 289]

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>

      <div className="product-meta">
        <Badge text={category} type="category" />
        <span>
          ⭐ {rating.rate} ({rating.count})
        </span>
      </div>

      <div className="product-meta" style={{ marginBottom: "0" }}>
        <span className="product-price">${price.toFixed(2)}</span>
        <Badge
          text={inStock ? "In Stock" : "Out of Stock"}
          type={inStock ? "in-stock" : "out-of-stock"}
        />
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(product)}
        disabled={!inStock}
      >
        {inStock ? "Add to Cart" : "Currently Unavailable"}
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
