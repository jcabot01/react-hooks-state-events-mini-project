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

  function addTaskHandler(addedTask){ //take in data {text, category} from NewTaskForm
    setTasks([...tasks, addedTask]) //spread operator (don't forget []), take in existing State of tasks, add new data
  }

  //filter the Tasklist: for every task, return the category; either "All" or the actual category assigned to that task (task.category)
  const filteredTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
        <CategoryFilter 
          categories={CATEGORIES} /*send existing data from data file to the filter as a prop*/
          selectedCategory={category} /*send the current State of category to the filter as a prop*/
          onSelectedCategory={setCategory} /*send the setter of category to the filter, so that onClick events can update the State of category*/
        />
        <NewTaskForm 
          categories={CATEGORIES.filter((category) => category !== "All")} /*send CATEGORIES data without the "All" option*/
          onTaskFormSubmit={addTaskHandler} /*callback function, this grabs event data, sends it up here so that it can update State of tasks*/
        />
        <TaskList tasks={filteredTasks} taskDelete={handleTaskDelete} /*send all tasks, regardless of category filter(including "All"), to tasklist.  Also, delete callback to adjust State up here*/ /> 
    </div>
  );
}

export default App;
