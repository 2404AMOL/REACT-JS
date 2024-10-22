import { useState } from 'react'
import './App.css'
import FormInput from './Components/FormInput'

function App() {
  let [userName, setUserName] = useState("");
  console.log(userName)
  return (
    <>
      <div className='app'>
        <FormInput placeholder = "UserName" setUserName ={setUserName}/>
        <FormInput placeholder = "UserName"/>
        <FormInput placeholder = "UserName"/>
        <FormInput placeholder = "UserName"/>
      </div>
    </>
  )
}

export default App
