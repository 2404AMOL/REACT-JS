import React, { useRef } from 'react'

export default function UseRef() {

    let userName = useRef(null);
    let email = useRef(null);
    console.log(userName)
    console.log(email)



    let form = (e) =>{
        e.preventDefault()
        console.log(userName.current.value,email.current.value)
    }
  return (
    <form action="" onSubmit={form}>
    <input type="text" name="name" id="userName" ref={userName} />
    <br />
    <input type="text" name="email" id="email" ref={email} />
    <button>SUBMIT</button>
  </form>  )
}
