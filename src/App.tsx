import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useToggle } from './hooks/use-toggle'
import { useLocalStorage } from './hooks/use-local-storage'

function App() {
  const [currentState, toggle] = useToggle()
  const [inputName, saveName] = useLocalStorage('form-name')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <label>Name</label>
        <input type="text" onChange={(e) => saveName(e.target.value)} value={inputName} />
        <button onClick={toggle}>Is active? {`${currentState}`}</button>
      </header>
    </div>
  )
}

export default App
