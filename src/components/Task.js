import React from "react";

function Task({ text, category, taskDelete }) {

  function taskClickHandler() { //grabs click on X button
    taskDelete(text) //invokes callback to App to update State, passing in text as param to deleteHandler in App
  }

  /*below we render the Task component, this is displayed in Tasklist.  Current State of tasks and categories are shown*/
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={taskClickHandler}>X</button>
    </div>
  );
}

export default Task;
