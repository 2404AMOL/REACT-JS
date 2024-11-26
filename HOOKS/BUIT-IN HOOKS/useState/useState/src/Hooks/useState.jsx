import { useState } from "react";
import './useState.css'

function UseState(){

    const [count ,setCount ] = useState(0);
    return(
        <>
            <h1>COUNT : {count} </h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default UseState;