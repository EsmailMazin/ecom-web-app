import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { sampleProducts } from '../data/products';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  // Get featured products from shared data (first 8 products)
  const featuredProducts = sampleProducts.slice(0, 8);

  return (
    <div className="home-container">
      {/* Navigation Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>
            <h2>ShopEasy</h2>
          </div>
          <nav className="nav-menu">
            <button className="nav-btn" onClick={() => navigate('/products')}>
              Products
            </button>
            <button className="nav-btn" onClick={() => navigate('/cart')}>
              Cart
            </button>
            {userInfo ? (
              <div className="user-menu">
                <span className="welcome-text">Welcome, {userInfo.name}!</span>
                <button className="nav-btn" onClick={() => navigate('/profile')}>
                  Profile
                </button>
                <button className="nav-btn logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="nav-btn" onClick={() => navigate('/login')}>
                  Login
                </button>
                <button className="nav-btn" onClick={() => navigate('/register')}>
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopEasy</h1>
          <p className="hero-subtitle">Discover amazing products at unbeatable prices</p>
          <button className="cta-button" onClick={() => navigate('/products')}>
            Shop Now
          </button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="Shopping" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Check out our most popular items</p>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/f8f9fa/6c757d?text=No+Image';
                  }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-header">
          <h2>Shop by Category</h2>
        </div>
        <div className="categories-grid">
          <div className="category-card" onClick={() => navigate('/products?category=electronics')}>
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop" alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card" onClick={() => navigate('/products?category=clothing')}>
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=200&fit=crop" alt="Clothing" />
            <h3>Clothing</h3>
          </div>
          <div className="category-card" onClick={() => navigate('/products?category=home')}>
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" alt="Home" />
            <h3>Home & Garden</h3>
          </div>
          <div className="category-card" onClick={() => navigate('/products?category=sports')}>
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" alt="Sports" />
            <h3>Sports</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ShopEasy</h3>
            <p>Your one-stop shop for everything you need.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => navigate('/products')}>Products</li>
              <li onClick={() => navigate('/about')}>About Us</li>
              <li onClick={() => navigate('/contact')}>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li>Help Center</li>
              <li>Shipping Info</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ShopEasy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;