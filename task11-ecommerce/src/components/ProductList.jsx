import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {/* Fragments used to map the list safely [cite: 309] */}
      <>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
