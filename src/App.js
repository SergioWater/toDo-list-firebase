import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  //Read todo from firebase

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = [];
      QuerySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  //Update todo in Firebase

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  //Delete todo

const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}



  return (
    <div className="App">
      <div className="container">
        <h3>Todo App</h3>
        <form onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="big"
            type="text"
            placeholder="Add toDo"
          />
          <button className="btn">
            <AiOutlinePlus size={30} />{" "}
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>

        {todos.length < 1 ? null : (
          <p className="count">{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
