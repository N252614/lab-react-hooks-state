import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import styles from './styles/DarkMode.module.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.dark : styles.light}`}>
      <h1>🛒 Shopping App</h1>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <p>
        Welcome! Your task is to implement filtering, cart management, and <em>dark mode</em>.
      </p>

      <label htmlFor="categoryFilter">
        Filter by Category:{' '}
        <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </label>

      <h2>Available Products</h2>
      <ProductList
        selectedCategory={selectedCategory}
        cart={cart}
        setCart={setCart}
      />

      <Cart cart={cart} />
    </div>
  );
};

export default App;
