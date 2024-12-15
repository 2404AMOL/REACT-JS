/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { useState } from 'react'
import './FormInput.css'
export default function FormInput(props) {
  let [focus,setFocus] = useState(false)

  let { label, onChange, id,errorMessage, ...inputProps} = props

  let handleError = () =>{
    setFocus(true)
  }
  return (
    <>
        <div className='formInput'>
            {/* <label htmlFor="">UserName</label><br /> */}
            <label htmlFor="">{label}</label>
            <input id={id} {...inputProps} onChange={onChange} onBlur={handleError} focus={focus.toString()}/>
            <span>{errorMessage}</span>
=======
import React from 'react'
import './FormInput.css'
export default function FormInput({placeholder,setUserName}) {
  return (
    <>
        <div className='fromInput'>
            {/* <label htmlFor="">UserName</label><br /> */}
            <input type="text" placeholder={placeholder} onChange={(e) =>setUserName(e.target.value)
            }/>
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
        </div>
    </>
  )
}
