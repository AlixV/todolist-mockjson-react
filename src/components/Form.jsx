import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [task, setTask] = useState();
  const [complete, setComplete] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    // e.preventDefault();

    const newTask = { task, complete };

    axios
      .post("http://localhost:8000/todo", newTask)
      .then((res) => {
        console.log(res);
        setTask("");
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
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <legend> Done ?</legend>
        <input
          type="radio"
          name="complete"
          id="false"
          value={complete}
          onChange={(e) => setComplete(e.target.value)}
          checked
        />
        <label htmlFor="false"> Not yet</label>

        <input
          type="radio"
          name="complete"
          id="true"
          value={complete}
          onChange={(e) => setComplete(e.target.value)}
        />
        <label htmlFor="true"> Yes</label>

        <button type="submit"> Let's go !</button>
        {/* type="submit" useful ? */}
      </form>
    </div>
  );
};

export default Form;
