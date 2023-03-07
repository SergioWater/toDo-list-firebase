import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? "licompleted" : "uncompletedli"} >
      <div className="row">
        <input
          onChange={() => toggleComplete(todo)}
          className="small"
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? "textComplete" : "text"}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt size={24} />}</button>
    </li>
  );
};

export default Todo;