import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/actions/userActions';
import API from './utils/axiosConfig';
import { sampleProducts } from './data/products';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleLogout = () => {
        dispatch(logout());
    };

    const categories = ['all', 'Electronics', 'Sports', 'Home', 'Clothing', 'Accessories'];

    // Use shared product data
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setProducts(sampleProducts);
            setFilteredProducts(sampleProducts);
            setLoading(false);
        }, 1000);

        // Check for category filter in URL
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            // Capitalize first letter to match our category names
            const capitalizedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase();
            setSelectedCategory(capitalizedCategory);
        }
    }, [searchParams]);

    useEffect(() => {
        let filtered = products;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => 
                product.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Sort products
        switch (sortBy) {
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        setFilteredProducts(filtered);
    }, [products, searchTerm, selectedCategory, sortBy]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    if (loading) {
        return (
            <div className="products-container">
                <div className="loading">
                    <div className="loading-spinner"></div>
                    <p>Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="products-container">
            {/* Header */}
            <header className="products-header">
                <div className="header-content">
                    <div className="logo" onClick={() => navigate('/')}>
                        <h2>ShopEasy</h2>
                    </div>
                    <nav className="nav-menu">
                        <button className="nav-btn" onClick={() => navigate('/')}>
                            Home
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

            <div className="products-layout">
                {/* Filters Sidebar */}
                <aside className="filters-sidebar">
                    <div className="filter-section">
                        <h3>Search</h3>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-section">
                        <h3>Category</h3>
                        <div className="category-buttons">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category === 'all' ? 'All Products' : category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>Sort By</h3>
                        <select value={sortBy} onChange={handleSortChange} className="sort-select">
                            <option value="name">Name (A-Z)</option>
                            <option value="price-low">Price (Low to High)</option>
                            <option value="price-high">Price (High to Low)</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="products-main">
                    <div className="products-header">
                        <h1>Products</h1>
                        <p>{filteredProducts.length} products found</p>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image" onClick={() => navigate(`/product/${product.id}`)}>
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300x300/f8f9fa/6c757d?text=No+Image';
                                        }}
                                    />
                                    <div className="product-overlay">
                                        <button className="quick-view-btn" onClick={() => navigate(`/product/${product.id}`)}>Quick View</button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-rating">
                                        <span className="stars">★★★★★</span>
                                        <span className="rating-text">({product.rating})</span>
                                    </div>
                                    <h3 className="product-name" onClick={() => navigate(`/product/${product.id}`)}>
                                        {product.name}
                                    </h3>
                                    <p className="product-category">{product.category}</p>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-price-section">
                                        <span className="product-price">${product.price}</span>
                                        <button className="add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="no-products">
                            <h3>No products found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Products;