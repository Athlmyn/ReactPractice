import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Components/Quotes';
import { Fibbo } from './Components/Fibbo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quotes/>
        <Fibbo number={10}/>
      </header>
    </div>
  );
}

export default App;
