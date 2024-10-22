import React, { useId } from 'react'

export default function UseId() {
    let nameId = useId();
    let emailId = useId();


  return (
    <form action="">
        <div>
            <label htmlFor={nameId}>NAME :</label>
            <input type="text" name="" id={nameId} />
        </div>
        <div>
            <label htmlFor={emailId}>Email :</label>
            <input type="email" name="" id={emailId} />
        </div>
    </form>
  )
}
