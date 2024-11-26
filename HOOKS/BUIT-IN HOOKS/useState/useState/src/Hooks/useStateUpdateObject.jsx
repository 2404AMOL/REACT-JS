import React, { useState } from 'react'
export default function UseStateUpdateObject() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

    const updateColor = () =>{
        setCar({...car, color: "blue" });
    }
    

  return (
    <>
        <h1>
            It is a {car.color} {car.model} from {car.year}.
        </h1>
        <button onClick={updateColor}>Update Color</button>
    </>
  )
}
