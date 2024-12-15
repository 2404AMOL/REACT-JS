<<<<<<< HEAD
import GetDerivedStateFromProps from './Components/GetDerivedStateFromProps( )'
import Render from './Components/Render( )'
import ShouldComponentUpdate from './Components/ShouldComponentUpdate( )'
function App() {

  return (
    <>
      <GetDerivedStateFromProps favCol="Blue"/>
      {/* <ShouldComponentUpdate/> */}
      {/* <Render/> */}
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
    </>
  )
}

export default App
