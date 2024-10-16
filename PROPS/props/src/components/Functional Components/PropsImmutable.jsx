/* eslint-disable react/prop-types */
import React from 'react'

export default function PropsImmutable(props) {
    console.log(props)
    
    //! Props are Immutable if you trying initaialize new value then it will error
   // props.name = "Ganesh";
    
  return (
    <>
        <h1>Props.Name = {props.name}</h1>
    </>
  )
}
