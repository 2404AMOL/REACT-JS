import React, { useState } from 'react'

export default function Child(props) {
    let [data,setData] = useState();

    function one(e){
        e.preventDefault();
        props.name(data)
    }
  return (
    <>
        <form onSubmit={one}>
            <input type="" value={data} onChange={(e) => {setData(e.target.value)}}/> <br />
            <button>Submit</button>
        </form>
    </>
  )
}

