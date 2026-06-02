import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order', { state: { product } });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        
        <div className="price-container">
          <span className="current-price">₹{product.price}</span>
          <span className="old-price">₹{product.old_price}</span>
        </div>
        
        <div className="button-group">
          <button className="add-btn" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
          
          <button className="order-btn" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
