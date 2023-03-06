import React, {useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'

function App() {
const [todos, setTodos] = useState(['Learn' , 'Fortnite'])


  return (
    <div className="App">
      <div className="container">
        <h3 className="heading">Todo App</h3>
        <form className="form__style">
          <input type="text" placeholder="Add toDo"/>
          <button><AiOutlinePlus size={30}/> </button>
        </form>
        <ul>

        </ul>
      </div>
    </div>
  );
}

export default App;
