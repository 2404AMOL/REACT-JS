
import './App.css'
import ChildA from './Components/ChildA'

function App() {

  let name = "Mine"
  return (
    <>
        <ChildA name={name}/>
    </>
  )
}

export default App
