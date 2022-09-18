import React from "react";

// const TodoList = ({ tasks }) => {
const TodoList = ({ tasks, deleteTask }) => {
  // const { tasks } = props;
  // console.log("Tasks list : " + tasks);

  return (
    <>
      <h2> My tasks : </h2>
      <ul className="post-it-list">
        {tasks.map((task, index) => {
          return (
            <li
              className="post-it"
              key={task.id}
              style={{
                listStyleType: "none",
              }}
            >
              <p>{task.task}</p>
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
const handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/api/cats/${id}`);
      fetchCats();
    } catch (err) {
      console.error(err);
    }
  };

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
