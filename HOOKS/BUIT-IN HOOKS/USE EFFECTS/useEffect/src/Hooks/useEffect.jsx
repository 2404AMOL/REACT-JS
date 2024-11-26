import { useEffect, useState } from "react";

function UseEffect (){
    const [count, setCount] = useState(0);

    // This effect runs on every render
  useEffect(() => {
    console.log('Use Effect Running...');
  });
    return(
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>INCREAMENT</button>
        </>
    )
}

export default UseEffect;