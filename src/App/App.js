import './App.css';
import React from 'react';
import InputBar from '../InputBar/InputBar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React To-Do App</h1>
      </header>
      <div className="Inputdiv">
        <InputBar />
        {/* SubmitButton */}
      </div>
      <div className="Listdiv">
        {/* Dos */}
      </div>
    </div>
  );
}

export default App;
