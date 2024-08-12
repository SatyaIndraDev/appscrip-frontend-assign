import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import './Shop.css';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-container">
      <Sidebar onCategoryChange={handleCategoryChange} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Shop;
