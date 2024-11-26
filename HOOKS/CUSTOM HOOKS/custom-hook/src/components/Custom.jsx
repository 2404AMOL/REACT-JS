import  { useEffect } from 'react'

export default function Custom(count) {
    useEffect(()=>{
        if(count>=1){
            document.title = `Counter: ${count}`
        }
        else{
            document.title = `Counter`
        }
    },[count])
  return (
    <div>Custom</div>
  )
}
