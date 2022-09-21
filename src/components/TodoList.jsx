import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, setTasks, deleteTask }) => {
  return (
    <>
      <h2> MY TASKS : </h2>

      {tasks.length > 0 ? (
        <div className="post-it-list">
          {tasks.map((onetask) => {
            return (
              <Todo
                key={onetask.id}
                task={onetask.task}
                complete={onetask.complete}
                id={onetask.id}
                deleteTask={deleteTask}
                setTasks={setTasks}
              />
            );
          })}
        </div>
      ) : (
        <p> No task, well done ! </p>
      )}
    </>
  );
};

export default TodoList;
