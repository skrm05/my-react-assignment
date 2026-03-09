export default function CategoryProducts() {
  // Part B: Nested Lists [cite: 200]
  // Array of categories, each containing products array [cite: 202]
  const catalog = [
    {
      id: "cat1",
      categoryName: "Electronics",
      products: [
        { id: "p1", name: "Laptop", price: 999 },
        { id: "p2", name: "Smartphone", price: 699 },
      ],
    },
    {
      id: "cat2",
      categoryName: "Clothing",
      products: [
        { id: "p3", name: "T-Shirt", price: 25 },
        { id: "p4", name: "Jeans", price: 50 },
      ],
    },
  ];

  return (
    <div className="section-card">
      <h2>Part B: Category Products (Nested Lists)</h2>
      {/* Render categories, then products within each category [cite: 203] */}
      {catalog.map((category) => (
        <div key={category.id} style={{ marginBottom: "20px" }}>
          {" "}
          {/* Proper keys for categories [cite: 204] */}
          <h3>{category.categoryName}</h3>
          <div className="flex-list">
            {category.products.map((product) => (
              <div key={product.id} className="product-card">
                {" "}
                {/* Proper keys for products [cite: 204] */}
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
