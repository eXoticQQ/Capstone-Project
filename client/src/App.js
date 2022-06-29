import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] =useState(0)

  useEffect(() => {
    fetch("/hello")
    .then((r) =>  r.json())
    .then((data) => setCount(data))
  }, [])
  
  return (
    <div className="App">
      <h1>Page count: {count}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
