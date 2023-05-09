import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AddTask from "./AddTask/AddTask";
import { Link } from "react-router-dom";

const Tasks = () => {
  const { tasks, getTasks, deleteTask } = useContext(GlobalContext);
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <h1>Tasks</h1>
      <AddTask/>
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <p>{task.title}</p>
            <button><Link to={'/task/' + task._id}>Edit</Link> </button>
            <button onClick={()=>deleteTask(task._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
