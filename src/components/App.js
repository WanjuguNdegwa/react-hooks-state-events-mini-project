import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleDelete = (index) => {
    const newList = tasks.filter((task, idx) => index !== idx)
    setTasks(newList);
  }

  const handleFilter = (category) => setSelectedCategory(category);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} onFilter={handleFilter} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList onDelete={handleDelete} selectedCategory={selectedCategory} tasks={tasks}/>
    </div>
  );
}

export default App;
