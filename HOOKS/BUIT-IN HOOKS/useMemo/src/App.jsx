import { useMemo, useState } from "react"

function App() {
  let [add,setAdd] = useState(0);
  let [sub,setSub] = useState(100);


  let cal = useMemo(  
    function mult(){
      console.log('done done done')
      return add*2
    },[add]
  )
  return (
    <>
    {cal}
    <br />
      <button onClick={()=>setAdd(add + 1)}>ADD</button>
      <h1>{add}</h1>
      
      <button onClick={()=>setSub(sub - 1)}>SUB</button>
      <h1>{sub}</h1>
    </>
  )
}

export default App
