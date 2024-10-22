/* eslint-disable react/prop-types */
import React from 'react'
import './FormInput.css'
export default function FormInput({placeholder,setUserName}) {
  return (
    <>
        <div className='fromInput'>
            {/* <label htmlFor="">UserName</label><br /> */}
            <input type="text" placeholder={placeholder} onChange={(e) =>setUserName(e.target.value)
            }/>
        </div>
    </>
  )
}
