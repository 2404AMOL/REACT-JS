/* eslint-disable react/prop-types */
import React from 'react'

export default function PropsDesObj(props) {
    const {name,age,add} = props;
  return (
    <>
        <h1>My Name Is : {name}</h1>
        <h2>My Age is : {age}</h2>
        <h3>My Address Is : {add}</h3>
    </>
  )
}
