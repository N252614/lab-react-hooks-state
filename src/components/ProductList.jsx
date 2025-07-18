import React from 'react';
import ProductCard from './ProductCard';
import sampleProducts from '../data/products';

const ProductList = ({ selectedCategory, cart, setCart }) => {
  const visibleProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2>Available Products</h2>
      {visibleProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;