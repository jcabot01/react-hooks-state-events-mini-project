import React from "react";
import Task from "./Task";

function TaskList({ taskArray, taskDelete }){
  const tasks = taskArray.map((task) => (
    //key prop, tasks, and categories State getting passed in as props to Task component, and also the delete callback from Task to App to update State
    <Task 
      key={task.text}
      text={task.text}
      category={task.category}
      taskDelete={taskDelete}
    />
  ))

  /*current State of Tasks is rendered below into Tasklist */
  return (
    <div className="tasks">{tasks}</div>
  );
}

export default TaskList;
