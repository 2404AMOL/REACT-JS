import { useState } from 'react'
import './App.css'
import FormInput from './Components/FormInput'
<<<<<<< HEAD
function App() {
  let [values, setValues] = useState({
    userName: '',
    email: '',
    contact: '',
    birthdate: '',
    password: '',
    confPassword: '',
    errorMessage: '',
  });

  let inputs = [
    {
      id : 1,
      name : 'userName',
      type : 'text',
      placeholder : 'UserName',
      label : 'UserName',
      errorMessage : 'Username should be 3-16 characters and shouldnt include any special character!',
      required : true,
      pattern: '^[A-Za-z0-9]{3,16}$'

    }, {
      id : 2,
      name : 'email',
      type : 'email',
      placeholder : 'Email',
      label : 'Email',
      errorMessage : 'It Should Be Valid Email Address',
      required : true

    },
    {
      id : 3,
      name : 'contact',
      type : 'number',
      placeholder : 'Contact',
      label : 'Contact',
      errorMessage : 'Please Enter Valid Number',
      required : true

    },
    {
      id : 4,
      name : 'birthdate',
      type : 'date',
      placeholder : 'Birthdate',
      label : 'Birthdate',
      required : true

    },
    {
      id : 5,
      name : 'password',
      type : 'password',
      placeholder : 'Password',
      label : 'Password',
      errorMessage : 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      required : true,
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
    },
    {
      id : 6,
      name : 'confirmPassword',
      type : 'password',
      placeholder : 'Confirm Password',
      label : 'Confirm Password',
      errorMessage : 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      required : true,
      pattern: values.password
    },
  ]

  let onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data)
    console.log(Object.fromEntries(data.entries()))
  }
  return (
    <>
      <div className='app'>
      <fieldset>
        <legend align="center" style={{fontWeight:"bold"}}>Registration Form</legend>
      <form action="" onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
                {/* <FormInput name="userName" placeholder = "UserName" setUser={setValues}/> 
                <FormInput name="email" placeholder = "Email" setUser={setValues}/>
                <FormInput name="contact" placeholder = "Contact" setUser={setValues}/>
                <FormInput name="birthdate" placeholder = "Birthdate" setUser={setValues}/>
                <FormInput name="password" placeholder = "Password" setUser={setValues}/>
                <FormInput name="confirmPassword" placeholder = "ConfirmPassword" setUser={setValues}/> */}
                <button>Submit</button>
              </form>
      </fieldset>
=======

function App() {
  let [userName, setUserName] = useState("");
  console.log(userName)
  return (
    <>
      <div className='app'>
        <FormInput placeholder = "UserName" setUserName ={setUserName}/>
        <FormInput placeholder = "UserName"/>
        <FormInput placeholder = "UserName"/>
        <FormInput placeholder = "UserName"/>
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
      </div>
    </>
  )
}

<<<<<<< HEAD

=======
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
export default App
