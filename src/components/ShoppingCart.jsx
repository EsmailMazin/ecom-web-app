import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Sample cart data (in a real app, this would come from Redux store or API)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      quantity: 2,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898baf30?w=300&h=300&fit=crop",
      quantity: 1,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      quantity: 1,
      category: "Sports"
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Order placed successfully!');
      setCartItems([]);
      setIsLoading(false);
    }, 2000);
  };

  const continueShopping = () => {
    navigate('/products');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <header className="cart-header">
          <div className="header-content">
            <div className="logo" onClick={() => navigate('/')}>
              <h2>ShopEasy</h2>
            </div>
            <nav className="nav-menu">
              <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
              <button className="nav-btn" onClick={() => navigate('/products')}>Products</button>
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

        <div className="empty-cart">
          <div className="empty-cart-content">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <button className="continue-shopping-btn" onClick={continueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <header className="cart-header">
        <div className="header-content">
          <div className="logo" onClick={() => navigate('/')}>
            <h2>ShopEasy</h2>
          </div>
          <nav className="nav-menu">
            <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
            <button className="nav-btn" onClick={() => navigate('/products')}>Products</button>
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

      <div className="cart-content">
        <div className="cart-main">
          <div className="cart-header-info">
            <h1>Shopping Cart</h1>
            <p>{cartItems.length} item(s) in your cart</p>
          </div>

          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">${item.price}</p>
                </div>
                <div className="item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="continue-shopping-btn" onClick={continueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-line">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
            {subtotal < 100 && (
              <p className="free-shipping-note">
                Add ${(100 - subtotal).toFixed(2)} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;