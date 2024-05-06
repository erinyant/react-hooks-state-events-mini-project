import React from "react";

function Task({text, category, onRemove}) {
  // console.log(task)
  function handleClick(){
    onRemove(text)
    // accept text, and filter out text that doesn't = text
    }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task; 
