import React, { useEffect, useState } from 'react'
import '../../css/mine.css'
function UseEffect() {
    // let [count,setCount] = useState(0);

      // useEffect(()=>{
      //     console.log('useEffect'+count);
      // },[count])

    let [time,setTime] = useState(0)

    useEffect(()=>{
      setInterval(()=>{
        let updateTime = new Date();
        setTime(updateTime.toLocaleTimeString())
      },1000)
    },[])




  return (
    <div className='container effect-container'>
        {/* <h1>useEffect</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count + 1)}>INC</button> */}
          <h1>Time : {time}</h1>
    </div>
  )
}
export default UseEffect
