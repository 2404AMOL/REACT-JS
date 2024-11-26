import { useContext } from 'react'
import { data, data1 } from '../App'
function ChildC() {
    let name = useContext(data)
    let age = useContext(data1)
  return (
    <>
        <h1>My Name is {name} || Age is {age}</h1>
    </>
  )
}

export default ChildC