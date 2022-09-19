import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [task, setTask] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    // e.preventDefault();

    const newTask = { task };

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
          name="task"
          type="textarea"
          rows="5"
          cols="15"
          placeholder="your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit"> Let's go !</button>
        {/* type="submit" useful ? */}
      </form>
    </div>
  );
};

export default Form;
