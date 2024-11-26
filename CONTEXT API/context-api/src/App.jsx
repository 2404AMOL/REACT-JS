/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'
import ChildA from './Components/ChildA'

let data = createContext()
let data1 = createContext()
function App() {
  let name = 'mine'
  let password = 123
  return (
    <>
    <data.Provider value ={name}>
      <data1.Provider value ={password}>
        <ChildA />
      </data1.Provider>
    </data.Provider>
    </>
  )
}

export default App
export {data, data1}
