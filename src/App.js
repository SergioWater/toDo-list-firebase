import React, {useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from "./Todo";

function App() {
const [todos, setTodos] = useState(['Learn' , 'Fortnite'])


  return (
    <div className="App">
      <div className="container">
        <h3>Todo App</h3>
        <form>
          <input type="text" placeholder="Add toDo"/>
          <button className="btn"><AiOutlinePlus size={30}/> </button>
        </form>
        <ul>
          {todos.map((todo, index) =>{
            return(
            <Todo key={index} todo={todo}/>
            )
          })}
        </ul>
        <p className="count">You have 3 todos</p>
      </div>
    </div>
  );
}

export default App;
