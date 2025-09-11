import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sampleProducts } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Use shared product data

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProduct = sampleProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleAddToCart = () => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    // TODO: Implement add to cart functionality
    alert(`${product.name} (${quantity}) added to cart!`);
  };

  const handleBuyNow = () => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    // TODO: Implement buy now functionality
    alert('Proceeding to checkout...');
  };

  if (loading) {
    return (
      <div className="product-details-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="not-found">
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button className="back-btn" onClick={() => navigate('/products')}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      {/* Header */}
      <header className="product-header">
        <div className="header-content">
          <div className="logo" onClick={() => navigate('/')}>
            <h2>ShopEasy</h2>
          </div>
          <nav className="nav-menu">
            <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
            <button className="nav-btn" onClick={() => navigate('/products')}>Products</button>
            <button className="nav-btn" onClick={() => navigate('/cart')}>Cart</button>
            {userInfo ? (
              <div className="user-menu">
                <span className="welcome-text">Welcome, {userInfo.name}!</span>
                <button className="nav-btn" onClick={() => navigate('/profile')}>Profile</button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
                <button className="nav-btn primary-btn" onClick={() => navigate('/register')}>Sign Up</button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <div className="product-details-content">
        <div className="breadcrumb">
          <button onClick={() => navigate('/')}>Home</button>
          <span>›</span>
          <button onClick={() => navigate('/products')}>Products</button>
          <span>›</span>
          <span>{product.name}</span>
        </div>

        <div className="product-main">
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header-info">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">({product.rating})</span>
                <span className="reviews-count">{product.reviews} reviews</span>
              </div>
              <p className="product-category">{product.category}</p>
            </div>

            <div className="product-price-section">
              <span className="product-price">${product.price}</span>
              <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                Add to Cart
              </button>
              <button 
                className="buy-now-btn"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                Buy Now
              </button>
            </div>

            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="product-details-tabs">
          <div className="tab-content">
            <h3>Description</h3>
            <p>{product.longDescription}</p>
          </div>

          <div className="tab-content">
            <h3>Specifications</h3>
            <div className="specifications">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;