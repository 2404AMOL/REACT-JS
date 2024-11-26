import './App.css'
import Child from './Components/Child'
function App() {

  function data(one){
    console.log(one)
  }
  return (
    <>
        <Child name={data}/>
    </>
  )
}

export default App
