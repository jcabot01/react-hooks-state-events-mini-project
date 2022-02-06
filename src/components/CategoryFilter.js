import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) { //category State and setter, and category data from data file
  const categoryButtons = categories.map((category) => { //create a button for each category, that upon clicked, show the tasks in that category
      
    //but first, we need to create a className of "selected"
      const className = category === selectedCategory ? "selected" : null; //clicking on the button changes State from "All" to the selected category
      //so if the current State of category = the clicked button, return "selected" to the className, changes its CSS property; see below

      //render a button for each category, thanks to .map() in JSX, 
      return (
        <button
          key={category} /* a unique key prop (set to category),*/
          className={className} /*className (for CSS purposes), conditionally turns pink if selected = turn pink, otherwise, null*/
          onClick={() => onSelectedCategory(category)} /*on click, SET State to that category via callback function up to App. Handled in-line */
        >
          {category} 
        </button>
      );
  });
//append button(s) to DOM
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButtons /*take all of the logic from above, and append to the page */} 
    </div>
  );
}

export default CategoryFilter;
