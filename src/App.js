import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [test, setTest] = useState();

  function logConsole(e) {
    e.preventDefault();
    console.log(test);
  };

  return (
    <div className="App">
      <form onSubmit={logConsole}>
        <label htmlFor='name'>Name</label>
        <input onChange={(e) => {setTest(e.target.value)}} type="text" id="name"/>
        <label htmlFor='email'>E-mail</label>
        <input type="text" id="email"/>
        <label htmlFor='number'>Phone Number</label>
        <input type="text" id="number"/>
        <label htmlFor='schoolname'>School</label>
        <input type="text" id="schoolname"/>
        <label htmlFor='schoolyear'>Years Attended</label>
        <input type="text" id="schoolyear"/>
        <button type="submit">Submit</button>
      </form>
      <h1>{test}</h1>

    </div>
  );
}

export default App;
