import React from 'react'

export default function FunctionClick() {

    function clickHandler() {
       alert(`Button Clicked`)
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}
