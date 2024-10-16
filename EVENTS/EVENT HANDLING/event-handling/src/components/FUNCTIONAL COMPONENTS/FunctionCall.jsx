import React from 'react'

export default function FunctionCall() {

    function clickHandler() {
       alert(`Button Clicked`)
    }

  return (
    <div>
        <button onClick={clickHandler()}>Click</button>
    </div>
  )
}
