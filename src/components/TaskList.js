import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, onDelete}) {

  const tasksToDisplay = () => {
    if (!selectedCategory || selectedCategory === 'All') {
      return tasks
    }

    return tasks.filter((task) => task.category === selectedCategory);
  
  }
  
  return (
    <div className="tasks">
      {tasks.length > 0 ? 
        tasksToDisplay().map((task, index) => (
          <Task key={index}   
                text={task.text} 
                category={task.category} 
                index={index} 
                onDelete={onDelete}/>)) 
        : null}
    </div>
  );
}

export default TaskList;
