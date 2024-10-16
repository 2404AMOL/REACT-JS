import React from 'react'

export default function PropsDefaultValue(props) {
    const {name="Amol",age=24,add="Bhalwani"} = props;
  return (
    <>
        <h1>My Name Is : {name}</h1>
        <h1>My Age Is : {age}</h1>
        <h1>My Address Is : {add}</h1>
    </>
  )
}
