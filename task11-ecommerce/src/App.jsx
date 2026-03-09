import { useState, useMemo } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import ProductList from "./components/ProductList";
import EmptyState from "./components/EmptyState";
import "./App.css";
import Cart from "./components/Cart";

// Dummy API data with working links [cite: 288, 289]
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 3.9, count: 120 },
    inStock: true,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.1, count: 259 },
    inStock: true,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 4.7, count: 500 },
    inStock: false,
  },
  {
    id: 4,
    title: "WD 2TB Elements Portable External Hard Drive",
    price: 64,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 3.3, count: 203 },
    inStock: true,
  },
  {
    id: 5,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 2.9, count: 470 },
    inStock: true,
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 3.9, count: 70 },
    inStock: true,
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a8ef6fb082e?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 3, count: 400 },
    inStock: true,
  },
  {
    id: 8,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
    price: 56.99,
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
    rating: { rate: 2.6, count: 235 },
    inStock: false,
  },
];

export default function App() {
  // State Management [cite: 306]
  const [products] = useState(DUMMY_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state [cite: 306]

  // Derived State (Filtering and Sorting) [cite: 293, 294, 296]
  const processedProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search by Name
    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Sort by Price
    if (sortOrder === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortOrder]);

  // Extract unique categories for the filter dropdown
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Cart Functions [cite: 290, 327]
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]); // [cite: 325]

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="dashboard-container">
      <Header
        cartItemCount={cartItemCount}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        isAuthenticated={isAuthenticated}
        onLoginToggle={() => setIsAuthenticated(!isAuthenticated)}
      />

      <main className="main-content">
        <Controls
          categories={categories}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <section className="product-area">
          {processedProducts.length > 0 ? (
            <ProductList products={processedProducts} onAddToCart={addToCart} />
          ) : (
            <EmptyState message="No products found matching your criteria." />
          )}
        </section>

        {/* Conditional Rendering for Cart [cite: 297, 307] */}
        {isCartOpen && (
          <Cart
            cartItems={cart}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onClearCart={clearCart}
          />
        )}
      </main>
    </div>
  );
}
