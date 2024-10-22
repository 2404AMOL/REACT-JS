import  { useEffect, useState } from 'react'

export default function CounterFunctional() {

  const [counter,setCounter] = useState(0);
  const [data , setData] = useState("Amol");


  useEffect(
        ()=>{
        console.log("Component Mounted")
    },[counter])
  
  const add = () =>{
    setCounter(counter+1)
  }

  const sub = () =>{
    setCounter(counter-1)
  }

  const updateData = () =>{
    setData("Ganesh")
  }


  return (
    <>
      <h1>Counter : {counter} || {data}</h1>
      {/* <button onClick={()=>setData(data+1)}>ADD</button>
      <button onClick={()=>setData(data-1)}>SUB</button> */}
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
      <button onClick={updateData}>DATA</button>

    </>
  )
}
