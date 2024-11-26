/* eslint-disable react/prop-types */
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
        </div>
    </>
  )
}
