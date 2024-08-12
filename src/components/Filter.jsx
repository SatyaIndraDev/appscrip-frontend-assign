import React from 'react';

const Filter = ({ categories, onCategoryChange }) => {
  return (
    <div>
      <h3>Category</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value=""
              onChange={() => onCategoryChange("")}
            />
            All
          </label>
        </li>
        {categories.map(category => (
          <li key={category}>
            <label>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={() => onCategoryChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
