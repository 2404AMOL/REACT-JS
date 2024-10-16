import React from 'react'

function FunctionProps(props) {
  let var1 = props.Fun() // This will log the props passed to the component.
  return (
    <h1>Function Value is : {var1}</h1>
  )
}

export default FunctionProps