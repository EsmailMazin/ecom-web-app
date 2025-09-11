import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // Mock order history data
  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      total: 149.99,
      status: 'Delivered',
      items: ['Air Purifier', 'Desk Lamp']
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      total: 89.99,
      status: 'Shipped',
      items: ['Bluetooth Speaker']
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      total: 24.99,
      status: 'Delivered',
      items: ['Basketball']
    }
  ];

  if (!userInfo) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="header-content">
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
            <div className="user-menu">
              <span className="welcome-text">Welcome, {userInfo.name}!</span>
              <button className="nav-btn" onClick={() => navigate('/profile')}>
                Profile
              </button>
              <button className="nav-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="sidebar-card">
            <h3>Account</h3>
            <div className="sidebar-menu">
              <button 
                className={`sidebar-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Information
              </button>
              <button 
                className={`sidebar-btn ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                Order History
              </button>
              <button 
                className={`sidebar-btn ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                Account Settings
              </button>
            </div>
          </div>
        </div>

        <div className="profile-main">
          {activeTab === 'profile' && (
            <div className="profile-card">
              <h2>Profile Information</h2>
              <div className="profile-info">
                <div className="info-group">
                  <label>Full Name</label>
                  <div className="info-value">{userInfo.name}</div>
                </div>
                <div className="info-group">
                  <label>Email Address</label>
                  <div className="info-value">{userInfo.email}</div>
                </div>
                <div className="info-group">
                  <label>Member Since</label>
                  <div className="info-value">January 2024</div>
                </div>
                <div className="info-group">
                  <label>Total Orders</label>
                  <div className="info-value">{orderHistory.length}</div>
                </div>
              </div>
              <button className="edit-btn">Edit Profile</button>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="profile-card">
              <h2>Order History</h2>
              <div className="orders-list">
                {orderHistory.map((order) => (
                  <div key={order.id} className="order-item">
                    <div className="order-header">
                      <div className="order-id">Order #{order.id}</div>
                      <div className="order-date">{order.date}</div>
                    </div>
                    <div className="order-details">
                      <div className="order-items">
                        {order.items.join(', ')}
                      </div>
                      <div className="order-total">${order.total}</div>
                    </div>
                    <div className="order-status">
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="profile-card">
              <h2>Account Settings</h2>
              <div className="settings-section">
                <h3>Notifications</h3>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Email notifications for new orders
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Promotional emails
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" />
                    SMS notifications
                  </label>
                </div>
              </div>
              
              <div className="settings-section">
                <h3>Privacy</h3>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Show profile to other users
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input type="checkbox" />
                    Allow data collection for analytics
                  </label>
                </div>
              </div>

              <div className="settings-section">
                <h3>Security</h3>
                <button className="change-password-btn">Change Password</button>
                <button className="delete-account-btn">Delete Account</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;