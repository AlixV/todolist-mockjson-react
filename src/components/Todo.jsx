import React, { useState } from "react";
import axios from "axios";

const Todo = ({ task, complete, id, deleteTask, setTasks }) => {
  const [modifytask, setModifytask] = useState(task);
  const [modifycomplete, setModifycomplete] = useState(complete);
  const [isClicked, setIsClicked] = useState(false);

  // --- MODIFY A TASK ---
  const handleModifyTask = (e) => {
    e.preventDefault();
    const modifyTaskForm = { task: modifytask, complete: modifycomplete };
    console.log("modifyTaskForm : " + modifyTaskForm);
    axios
      .put("http://localhost:8000/todo/" + id, modifyTaskForm)
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

  // --- MODIFY 'COMPLETE OR NOT'  ---
  const handleModifyComplete = (e) => {
    e.preventDefault();
    const modifyCompleteForm = { complete: !modifycomplete, task: modifytask };
    console.log("modifyTaskForm : " + modifyCompleteForm);
    axios
      .put("http://localhost:8000/todo/" + id, modifyCompleteForm)
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
          <span className="icon-post-it">
            <i className="fa-solid fa-pencil"></i>
          </span>
        </button>

        <button
          className="buttons-todo button-modify-complete"
          onClick={(e) => handleModifyComplete(e)}
        >
          {modifycomplete ? (
            <span className="icon-post-it">
              <i className="fa-regular fa-square-check"></i>
            </span>
          ) : (
            <span className="icon-post-it">
              <i className="fa-regular fa-square"></i>
            </span>
          )}
        </button>

        {/* -- CONFIRM BOX-- */}
        <button
          className="buttons-todo button-delete"
          onClick={() => {
            console.log("I have been clicked");
            if (window.confirm("Are you sure about remove this task ?"))
              deleteTask(id);
          }}
        >
          <span className="icon-post-it">
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Todo;
