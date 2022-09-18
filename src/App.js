import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const deleteTask = (id) => {
    axios
      .delete("http://localhost:8000/todo/" + id)
      .then(() => console.log("delete successful"))
      .catch((e) => console.log(e));
  };

  // deleteTask(id){
  //   axios
  //     .delete("http://localhost:8000/todo/{id}")
  //     .then(()=> console.log("delete successful"))
  //     .catch((e)=> console.log(e))
  // }

  return (
    <div className="App">
      <Header />
      <Form />
      {/* {tasks && <TodoList tasks={tasks} />} */}
      {tasks && <TodoList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;

/* 

 // axios
    //   .get("http://localhost:8000/todo")
    //   .then(({ data }) => {
    //     console.log("DATA FROM DB : " + data);
    //     setTasks(data);
    //   })
    //   .catch((e) => console.log(e));

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
