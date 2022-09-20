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

  // const [modifytask, setModifytask] = useState();
  // const [modifycomplete, setModifycomplete] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/todo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, [newTask]);

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

  // const updateTask = (id) => {
  //   axios
  //     .put("http://localhost:8000/todo/" + id)
  //     .then(() => {
  //       console.log("update successful");
  //     })
  //     .catch((e) => console.log(e));
  // };

  // const completeTask = (id) => {
  //   axios
  //     .put("http://localhost:8000/todo/" + id)
  //     .then(() => {
  //       console.log("update successful");
  //     })
  //     .catch((e) => console.log(e));
  // };

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

/* 

 // const deleteTask = (id) => {
  //   setTasks(
  //     axios
  //       .delete("http://localhost:8000/todo/" + id)
  //       .then(() => {
  //         console.log("delete successful");
  //       })
  //       .catch((e) => console.log(e))
  //   );
  // };
  //  = > fonctionne pas du tout

 // axios
    //   .get("http://localhost:8000/todo")
    //   .then(({ data }) => {
    //     console.log("DATA FROM DB : " + data);
    //     setTasks(data);
    //   })
    //   .catch((e) => console.log(e));
    // => NON

useEffect(()=>{
  fetch("http://localhost:8000/todo")
  .then(res=>{
    return res.json()
  })
  .then(data =>{
    setTasks(data);
  })
},[])


fetchTaskes()
 const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/todo");
      console.log("api res => ", res);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

*/
