import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, cart, setCart }) => {
  const handleAddToCart = () => {
    if (!cart.includes(product.name)) {
      setCart([...cart, product.name]);
    }
  };
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      {cart.includes(product.name) ?(
        <p>{product.name} has been added to your cart</p>
      ) : (
      <button onClick={handleAddToCart} data-testid={`product-${product.id}`}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;