import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import axios from 'axios';

const Sidebar = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <aside>
      <h2>Filters</h2>
      <Filter categories={categories} onCategoryChange={onCategoryChange} />
    </aside>
  );
};

export default Sidebar;
