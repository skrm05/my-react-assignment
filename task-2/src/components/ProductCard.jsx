// ProductCard displays product details [cite: 43]
function ProductCard({ name, price, description, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}
export default ProductCard;
