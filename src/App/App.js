import './App.css';
import React from 'react';
import InputBar from '../InputBar/InputBar';
import SubmitButton from '../SubmitButton/SubmitButton';
import ToDoList from '../ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React To-Do App</h1>
      </header>
      <div className="Inputdiv">
        <InputBar />
        <SubmitButton />
      </div>
      <div className="Listdiv">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
