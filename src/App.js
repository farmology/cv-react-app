import './App.css';
import React, { useState }from 'react';
import Display from './components/Display';
import Preview from './components/Preview';

function App() {
  const [personal, setPersonal] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    address: ''
  });

  function updatePersonal(input) {
    setPersonal(input);
  };

  return (
    <div className="App">
      <Display personal={personal} updatePersonal={updatePersonal}/>
      <Preview personal={personal} updatePersonal={updatePersonal}/>
    </div>
  );
}

export default App;
