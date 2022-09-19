import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, deleteTask, updateTask }) => {
  // const { tasks, deleteTask, updateTask } = props;
  return (
    <>
      <h2> My tasks : </h2>
      {/* {tasks ? (  */}
      <div className="post-it-list">
        {tasks.map((onetask,i) => {
          return (
            <Todo 
              key={i}
              task = {onetask.task}
              complete ={onetask.complete}
              id = {onetask.id}

              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
            
          );
        })}
      </div>
      {/* ):(
        <p> No task, well done <p>
      )} */}
    </>
  );
};

export default TodoList;
