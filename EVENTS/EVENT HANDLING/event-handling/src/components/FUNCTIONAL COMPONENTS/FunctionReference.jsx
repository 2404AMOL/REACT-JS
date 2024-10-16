import React from 'react'

export default function FunctionReference() {

    function clickHandler() {
       alert(`Button Clicked`)
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}
