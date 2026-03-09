import ProductCard from "./ProductCard";

// ProductList renders multiple ProductCard components [cite: 42]
function ProductList() {
  // Using dummy API image links for products
  const products = [
    {
      id: 1,
      name: "Fjallraven Backpack",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve.",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
  ];

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
