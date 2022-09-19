import React, { useState } from "react";
import axios from "axios";

const Todo = ({ task, complete, id, deleteTask, updateTask }) => {
  const { modifytask, setModifytask } = useState();
  const [isClicked, setIsClicked] = useState(false);

  const handleModifyTask = (e) => {
    e.preventDefault();

    const modifyTaskForm = { task: modifytask };
    console.log(modifyTaskForm);

    axios
      .put("http://localhost:8000/todo/" + id, modifyTaskForm)
      .then(() => {
        console.log("update done");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={complete ? " post-it strike" : "post-it"} key={id}>
      {isClicked ? (
        <form onSubmit={handleModifyTask}>
          <textarea
            id="task"
            name="task"
            type="textarea"
            rows="5"
            cols="15"
            placeholder={task}
            value={modifytask}
            onChange={(e) => setModifytask(e.target.value)}
          />
          <button type="submit"> good !</button>
        </form>
      ) : (
        <p> {task}</p>
      )}
      <button onClick={() => setIsClicked(!isClicked)}>🖌</button>

      <button onClick={() => updateTask(id)}>modify</button>

      <button onClick={() => deleteTask(id)}>delete</button>
    </div>
  );
};

export default Todo;

// { task, complete, id, deleteTask, updateTask }

//   <div className={complete ? " post-it strike" : "post-it"} key={id}>
//       <p>{task}</p>
//       <button onClick={() => updateTask(id)}>modify</button>
//       //<button onClick={() => updateTask(task.id)}>complete</button>
//       <button onClick={() => deleteTask(id)}>delete</button>
//     </div>

//     compo pr chaque tache, dans state, un boolean qui dit si on modif et en fonction afficher
//   rendu contiontionel dans return ternary
//   moyen de detecter si on a cliquier si oui affciher un input, sinon para
//   garder en memoire dans un state si modfifier ou non
//   qd fini de modifier, repasser à un paragraphe
//   mettre un on click sur compo entier ?

//   return (
//     <div
//       className={task.complete ? " post-it strike" : "post-it"}
//       key={task.id}
//     >
//       <p>{task.task}</p>
//       <button onClick={() => updateTask(task.id)}>modify</button>
//       // <button onClick={() => updateTask(task.id)}>complete</button>
//       <button onClick={() => deleteTask(task.id)}>delete</button>
//     </div>
//   );
