import React, { useState } from "react";
import axios from "axios";

const Todo = ({ task, complete, id, deleteTask, setTasks }) => {
  const [modifytask, setModifytask] = useState(task);
  const [modifycomplete, setModifycomplete] = useState(complete); // boolean
  const [isClicked, setIsClicked] = useState(false); // dosen't show textarea

  // --- MODIFY A TASK ---
  const handleModifyTask = (e) => {
    e.preventDefault();
    // new info :
    const modifyTaskForm = { task: modifytask, complete: modifycomplete };
    console.log("modifyTaskForm : " + modifyTaskForm);
    axios
      .put("http://localhost:8000/todo/" + id, modifyTaskForm)
      .then(() => {
        console.log("update done");
        setIsClicked(false); // Hide textarea when it's sent.
        fetch("http://localhost:8000/todo") //Come back with list updated.
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTasks(data);
          });
      })
      .catch((e) => console.log(e));
  };

  // --- MODIFY the 'COMPLETE OR NOT'  ---
  const handleModifyComplete = (e) => {
    e.preventDefault();
    // To send a inverse complete data
    const modifyCompleteForm = { complete: !modifycomplete, task: modifytask };
    console.log("modifyTaskForm : " + modifyCompleteForm);
    axios
      .put("http://localhost:8000/todo/" + id, modifyCompleteForm)
      .then(() => {
        console.log(" Complete update ok");
        setModifycomplete(!modifycomplete); // Inverse state if complete or not
        fetch("http://localhost:8000/todo") // Come back with modified data
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
              rows="6"
              cols="15"
              placeholder={task} // displayed task
              value={modifytask} // tasked modified
              onChange={(e) => setModifytask(e.target.value)}
            />

            <button className="button-form-modify" type="submit">
              {" "}
              good !
            </button>
          </form>
        ) : (
          // Display task and if 'complete' is true => strike
          <p className={complete ? "strike" : ""}> {task}</p>
        )}
      </div>

      <div className="container-buttons-todo">
        <button // Icon pencil to trigger textarea (to modify the task).
          className="buttons-todo button-modify-task"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="icon-post-it">
            <i className="fa-solid fa-pencil"></i>
          </span>
        </button>

        <button // Inverse state to show if task is complete or not.
          className="buttons-todo button-modify-complete"
          onClick={(e) => handleModifyComplete(e)}
        >
          {modifycomplete ? (
            /* If modifycomplete state is true = complete */
            /* Task complete : checked square */
            <span className="icon-post-it">
              <i className="fa-regular fa-square-check"></i>
            </span>
          ) : (
            /* Not complete : empty square */
            <span className="icon-post-it">
              <i className="fa-regular fa-square"></i>
            </span>
          )}
        </button>

        {/* -- CONFIRM BOX to REMOVE TASK-- */}
        <button
          className="buttons-todo button-delete"
          onClick={() => {
            console.log("I have been clicked");
            if (window.confirm("Are you sure about remove this task ?"))
              // 2 / If 'ok' is clicked => id is sent to remove the task.
              deleteTask(id);
          }}
        >
          <span className="icon-post-it">
            {/* 1/ Icon to remove */}
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Todo;
