import React from 'react'

export default function OnClick() {
    function apple(){
        alert("Hello");
    }
  return (
    <>
        <button onClick={apple}>Click Me</button>
        <button onClick={()=>apple()}>Click Me</button>
    </>
  )
}
