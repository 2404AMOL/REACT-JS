import React from 'react'
//! In Props Destructuring if we changed the order of the element it does not matter,
//todo : If changed the order of the element after that accessed then it give undefined as an result. 
//* In JavaScript the order of the elements is matter 
 function PropsDestructuring({one,four,two,three}) {
    console.log(two)
    console.log(four)

  return (
    <h1>{one}</h1>
  )
}
export default PropsDestructuring;