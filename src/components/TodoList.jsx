import React from "react";

const TodoList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <>
      <h2> My tasks : </h2>
      <ul className="post-it-list">
        {tasks.map((task, index) => {
          return (
            <li
              className={task.complete ? " post-it strike" : "post-it"}
              key={task.id}
              style={{
                listStyleType: "none",
              }}
            >
              <p>{task.task}</p>
              <button onClick={() => updateTask(task.id)}>modify</button>
              {/* <button onClick={() => updateTask(task.id)}>complete</button> */}
              <button onClick={() => deleteTask(task.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;

/* 


  const handleDelete = 
  async (task.id)=> {
    await axios.delete("http://localhost:8000/todo/{task.id}");
  }

  axios. delete("http://localhost:8000/todo/{task.id}")
  .then(()=> console.log("delete successful"))
  .catch((e)=> console.log(e))

Sans request :
 const deleteContact = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  deleteTask(task.id){
    axios
      .delete("http://localhost:8000/todo/{task.id}")
      .then(()=> console.log("delete successful"))
      .catch((e)=> console.log(e))
  }

*/
