import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();
  const [complete, setComplete] = useState(false);

  // --- GET ALL TASKS---
  useEffect(() => {
    fetch("http://localhost:8000/todo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, [newTask]);

  // --- DELETE A TASK ---
  const deleteTask = (id) => {
    axios
      .delete("http://localhost:8000/todo/" + id)
      .then(() => {
        console.log("delete successful");
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
    <div className="App">
      <Header />
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        complete={complete}
        setComplete={setComplete}
      />
      {tasks && (
        <TodoList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
