import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";
const EditTask = () => {
  const { task, getTask, editTask } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { _id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getTask(_id);
  }, []);

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    editTask(_id, { title });
    setMessage("Task successfully updated");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title || ""}
        name="title"
      />
      <button type="submit">Edit task</button>
      <h1>{message}</h1>
    </form>
  );
};

export default EditTask;
