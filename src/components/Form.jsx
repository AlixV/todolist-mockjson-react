import axios from "axios";
import React, { useState } from "react";

const Form = ({ newTask, setNewTask, complete, setComplete }) => {
  const [error, setError] = useState();

  // --- CREATE A TASK ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskForm = { task: newTask, complete };
    console.log(newTaskForm);
    axios
      .post("http://localhost:8000/todo", newTaskForm)
      .then((res) => {
        console.log(res);
        setNewTask("");
      })
      .catch((e) => {
        console.log(e);
        setError("There was an error, try again please");
      });
  };

  return (
    <div className="form-container">
      <form className="form-create" onSubmit={handleSubmit}>
        {error !== "" && <p>{error}</p>}
        {/* <label htmlFor="task">  : </label> */}
        <textarea
          className="textarea-form-create"
          id="task"
          name="task"
          type="textarea"
          rows="8"
          cols="20"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <legend>Done ?</legend>
        <input
          className="form-create-radio-input"
          type="radio"
          name="complete"
          id="false"
          value={complete}
          onChange={(e) => {
            setComplete(false);
            console.log("falseCkeckbox : " + e.target.value);
          }}
        />
        <label htmlFor="false">
          <i className="fa-regular fa-square"></i>
        </label>

        <input
          className="form-create-radio-input"
          type="radio"
          name="complete"
          id="true"
          value={complete}
          onChange={(e) => {
            setComplete(true);
            console.log("trueCkeckbox : " + e.target.value);
          }}
        />
        <label htmlFor="true">
          <i className="fa-regular fa-square-check"></i>
        </label>
        <br />
        <button type="submit"> Let's go !</button>
        {/* type="submit" useful ? */}
      </form>
    </div>
  );
};

export default Form;
