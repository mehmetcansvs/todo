import './App.css';
import React, { useState } from 'react';
import InputBar from '../InputBar/InputBar';
import SubmitButton from '../SubmitButton/SubmitButton';
import ToDoList from '../ToDoList/ToDoList';

function App() {

  const [todos, setTodos] = useState([]); // Create todos as state.
  const [tempTodo, setTempTodo] = useState(''); // Temporary cache for input text.

  const handleInput = (inputText) => {
    setTempTodo(() => inputText);
  }

  const handleDelete = (deleteText) => {
    const index = todos.indexOf(deleteText);
    let copyTodos = Array.from(todos);
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  }

  const handleSubmit = () => {
    setTodos(prev => [...prev, tempTodo]);
  }

  return (
    <div className="App">
      <header>
        <h1>What to DO?</h1>
      </header>
      <div className="Inputdiv">
        <InputBar onChange={handleInput}/>
        <SubmitButton onClick={handleSubmit}/>
      </div>
      <div className="Listdiv">
        <ToDoList todos={todos} onClick={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
