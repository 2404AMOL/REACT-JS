import { memo, useCallback, useState } from 'react'

// eslint-disable-next-line react/prop-types, react/display-name
let Button = memo(({onClick,children}) =>{
    console.log(`Render : ${children}`)
    return(
        <button className={`text-black mb-4 py-2 px-5 ${children ===`Inc` ? "bg-red-400" : " bg-green-400" }`} onClick={onClick}>{children}</button>
    )
})
export default function UseCallback() {
    let [count,setCount] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const increament = useCallback(() =>{
        console.log('ADD');
        setCount((prev)=>prev + 1);
    },[])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const decreament = useCallback(() =>{
            console.log('SUB')
            setCount((prev)=>prev - 1);
        },[])

  return (
    <div className='p-4 h-lvh font-display tracking-winder flex flex-col justify-center items-center bg-black text-white'>
        <h1 className='mb-4'>Count : {count}</h1>
        <Button onClick={increament}>ADD</Button>
        <Button onClick={decreament}>SUB</Button>
    </div>
  )
}
