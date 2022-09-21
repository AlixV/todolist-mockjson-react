import React, { useState } from "react";
import axios from "axios";

const Todo = ({ task, complete, id, deleteTask, tasks, setTasks }) => {
  const [modifytask, setModifytask] = useState(task);
  const [modifycomplete, setModifycomplete] = useState(complete);
  const [isClicked, setIsClicked] = useState(false);

  // --- MODIFY A TASK ---
  const handleModifyTask = (e) => {
    e.preventDefault();
    const modifyTaskForm = { task: modifytask, complete: modifycomplete }; // donner id ?
    console.log("modifyTaskForm : " + modifyTaskForm);
    axios
      .put("http://localhost:8000/todo/" + id, modifyTaskForm) // patch ?
      .then(() => {
        console.log("update done");
        setIsClicked(false);
        fetch("http://localhost:8000/todo")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTasks(data);
          });
      })
      .catch((e) => console.log(e));
  };

  // --- MODIFY COMPLETE ---
  const handleModifyComplete = (e) => {
    e.preventDefault();
    const modifyCompleteForm = { complete: !modifycomplete, task: modifytask }; // donner id ?
    console.log("modifyTaskForm : " + modifyCompleteForm);
    axios
      .put("http://localhost:8000/todo/" + id, modifyCompleteForm) // patch ?
      .then(() => {
        console.log("update ok");
        setModifycomplete(!modifycomplete);
        fetch("http://localhost:8000/todo")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTasks(data);
          });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="post-it">
      {/* className={complete ? " post-it strike" : "post-it"} */}
      <div>
        {isClicked ? (
          <form className="form-modify" onSubmit={handleModifyTask}>
            <textarea
              id="task"
              name="task"
              type="textarea"
              rows="5"
              cols="15"
              placeholder={task}
              value={modifytask}
              onChange={(e) => setModifytask(e.target.value)}
            />

            <button className="button-form-modify" type="submit">
              {" "}
              good !
            </button>
          </form>
        ) : (
          <p className={complete ? "strike" : ""}> {task}</p>
        )}
      </div>

      <div className="container-buttons-todo">
        <button
          className="buttons-todo button-modify-task"
          onClick={() => setIsClicked(!isClicked)}
        >
          🖌
        </button>

        <button
          className="buttons-todo button-modify-complete"
          onClick={(e) => handleModifyComplete(e)}
        >
          {modifycomplete ? (
            <i className="fa-regular fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
        </button>

        {/* -- CONFIRM BOX-- */}
        <button
          className="buttons-todo button-delete"
          onClick={() => {
            console.log("I have been clicked");
            if (window.confirm("Are you sure you want to do that Alix?"))
              deleteTask(id);
          }}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default Todo;

// TEST 2 Warning: ReactDOM.render is no longer supported in React 18.
//Use createRoot instead. Until you switch to the new API,
//your app will behave as if it's running React 17.
