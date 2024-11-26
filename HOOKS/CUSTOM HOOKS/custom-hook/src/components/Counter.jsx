import  { useState } from 'react'
import Custom from './Custom'

export default function Counter() {
    let [count,setCount] = useState(0)
    Custom(count)
  return (
        <>
            <h1>Counter :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increament</button>
        </>
  )
}
