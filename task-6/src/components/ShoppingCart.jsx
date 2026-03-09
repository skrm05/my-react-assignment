import { useState } from "react";

// Product components receive product data as props [cite: 148]
function Product({ product, onAddToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      {/* Add to cart button in product updates parent state [cite: 149] */}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default function ShoppingCart() {
  // Parent manages cart state [cite: 147]
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      title: "Solid Gold Petite Micropave",
      price: 168,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 2,
      title: "White Gold Plated Princess",
      price: 9.99,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="card">
      <h2>3. Practical Scenario: Shopping Cart [cite: 146]</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="products">
          {products.map((p) => (
            <Product key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>
        <div style={{ background: "#f8f9fa", padding: "20px", width: "250px" }}>
          <h3>Cart State</h3>
          <p>
            Items in cart: <strong>{cart.length}</strong>
          </p>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
