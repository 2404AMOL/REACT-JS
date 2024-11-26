import React, { useState } from 'react'

export default function UseStateObject() {
    // eslint-disable-next-line no-unused-vars
    const [car ,setCar] = useState({
        brand : "Ford",
        model : "mustang",
        year : 1990,
        color : "red"
    })
  return (
    <>
        <h1>My Car {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}</p>
    </>
  )
}
