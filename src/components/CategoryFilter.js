import React from "react";

function CategoryFilter({ categories, selectedCategory, onFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.length > 0 ? 
        categories.map((category) => (
          <button className={selectedCategory === category ? 'selected' : ''}key={category} onClick={() => onFilter(category)}>
            {category}
          </button>
        ))
       : null}
    </div>
  );
}

export default CategoryFilter;
