import React, { useEffect, useState } from 'react'
import '../../css/mine.css'
function UseEffect1() {
    let [count,setCount] = useState(0);

      useEffect(()=>{
        document.title = `count ${count}`
      },[count])


  return (
    <div className='container effect-container'>
    <h1>useEffect</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count + 1)}>INC</button>  
     </div>
  )
}
export default UseEffect1;
