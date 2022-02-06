import React from "react";

function CategoryFilter({ categoriesArray, selectedCategory, onSelectedCategory }) { //category State and setter
  const categoryButtons = categoriesArray.map((category) => { //create a button, that upon map will render all categories
      
    //but first, we need to create a className of "selected"
      const className = category === selectedCategory ? "selected" : null; //if current category = state, return "selected"

      //render button in JSX
      return (
        <button
          key={category}
          className={className}
          onClick={() => onSelectedCategory(category)}
        >
          {category}
        </button>
      );
  });
//append button(s) to DOM
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
