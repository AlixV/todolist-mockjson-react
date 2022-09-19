import axios from "axios";
import React, { useState } from "react";

const Form = ({ newTask, setNewTask, complete, setComplete }) => {
  const [error, setError] = useState();

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
    <div>
      <form onSubmit={handleSubmit}>
        {error !== "" && <p>{error}</p>}
        <h2>Add a task </h2>
        <label htmlFor="task"> Write here : </label>
        <textarea
          id="task"
          name="task"
          type="textarea"
          rows="5"
          cols="15"
          placeholder="your task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <legend> Done ?</legend>
        <input
          type="radio"
          name="complete"
          id="false"
          value={complete}
          onChange={(e) => {
            setComplete(false);
            console.log("falseCkeckbox : " + e.target.value);
          }}
          // checked
        />
        <label htmlFor="false"> Not yet</label>

        <input
          type="radio"
          name="complete"
          id="true"
          value={complete}
          onChange={(e) => {
            setComplete(true);
            console.log("trueCkeckbox : " + e.target.value);
          }}
        />
        <label htmlFor="true"> Yes</label>

        <button type="submit"> Let's go !</button>
        {/* type="submit" useful ? */}
      </form>
    </div>
  );
};

export default Form;
