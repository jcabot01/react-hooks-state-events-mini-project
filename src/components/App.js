import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data"; //external data sources


function App() {
  const[tasks, setTasks] = useState(TASKS); //default State is show all tasks
  const[category, setCategory] = useState("All"); //default State is show all categories

  //upon click of delete button, this handler is called.
  function handleTaskDelete(deletedTask){ //passing in event data collected in the Task component upon click
    setTasks(tasks.filter((task) => task.text !== deletedTask))//set Task State, so that after filtering all Tasks, only return those that do not equal (!==) the event Task
  }

  const filteredTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
        <CategoryFilter 
          categoriesArray={CATEGORIES} 
          selectedCategory={category}
          onSelectedCategory={setCategory}
        />
        <NewTaskForm />
        <TaskList taskArray={filteredTasks} taskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
