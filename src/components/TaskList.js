import React from "react";
import Task from "./Task"

function TaskList({tasks, onRemove, selectedCategory}) {

  const taskToDisplay = tasks.filter((task)=> {
    console.log("task.category:", task.category);
    console.log("selectedCategory:", selectedCategory);
    if(selectedCategory === "All"){
      return tasks 
    }
    return task.category.toLocaleLowerCase().includes(selectedCategory.toLowerCase())
  })

  const task = taskToDisplay.map((t, index)=> {
    return <Task key={index} text={t.text} category={t.category} onRemove={onRemove}/> 
})

  // const task = taskToDisplay?.map((t, index) => {
  //   return <Task key={index} task={t.text} category={t.category} onRemove={onRemove}/>
  // })

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
