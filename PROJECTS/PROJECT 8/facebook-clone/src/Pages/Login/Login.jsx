import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <>
      <div className='login'>
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Facebook</h3>
            <span className='LoginDesc'>Connect with world.</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton">Log in</button>
              <span className='loginForgot'>Forgot Password?</span>
              <button className="loginRegisterButton">Create a new account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}