import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories  }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({ text, category}); //send this data up to App to update State of Tasklist
    setText(""); //reset input to blank after submission
    setCategory("Code"); //reset dropdown back to Code after submission, "All" should not be an option
  }

  
  return (
    <form className="new-task-form" onSubmit={handleSubmit} /*NEED TO HANDLE THE SUBMIT HERE, OVER THE WHOLE FORM*/>
      <label>
        Details
        <input 
          type="text"
          value={text /*assign input date to value*/} 
          onChange={(event) => setText(event.target.value)/*SET the state of the text*/}  
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(event) => setCategory(event.target.value) /*whichever category value is selected, becomes the current State of the NewForm*/}> 
          {categories.map((category) => ( //the categories data from App (without "All"), for each one, render an <option> element, key prop = category, and display that category
           <option key={category}>{category}</option>
        ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
