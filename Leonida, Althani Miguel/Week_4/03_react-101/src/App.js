
import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

import SampleComponent from "./components/sampleComponents";

function App() {
  const [state, setState] = useState(0);

  useEffect (() => {
    alert("useEffect as invoked");
  }, [state])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={() => {setState(state-1)}}>-</button>
        <p>{state}</p>
        <button onClick={() => {setState(state+1)}}>+</button>

        <SampleComponent state={state}/>
      </header>
    </div>
  );
}

export default App;
