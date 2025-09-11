import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import Products from './Products'
import ShoppingCart from './components/ShoppingCart'
import ProductDetails from './components/ProductDetails'
import Profile from './components/Profile'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
)

export default App