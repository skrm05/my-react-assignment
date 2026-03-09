import { useState } from "react";

export default function ProductCatalog() {
  // Part B: Event with Parameters [cite: 252]
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState(null);

  const products = [
    { id: 101, name: "Wireless Headphones", price: 99 },
    { id: 102, name: "Smart Watch", price: 199 },
  ];

  // Pass product id to event handler [cite: 255]
  const handleAddToCart = (productName) => {
    setCartCount((prev) => prev + 1); // Update cart count [cite: 256]
    setLastAdded(productName); // Display which product was added [cite: 257]
  };

  return (
    <div className="card">
      <h2>Part B: Event with Parameters</h2>
      <p>
        Cart: <strong>{cartCount}</strong> items
      </p>
      {lastAdded && (
        <p style={{ color: "green" }}>Successfully added: {lastAdded}</p>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {/* Using an arrow function to pass parameters [cite: 255] */}
            <button onClick={() => handleAddToCart(product.name)}>
              Add to Cart
            </button>{" "}
            {/* [cite: 254] */}
          </div>
        ))}
      </div>
    </div>
  );
}
