import React from 'react'

export default function List3() {
    let empName = ["ganya", "baburav" , "gangadar"]
     let getName=empName.map((data,index)=><h1 key={index}>{index}{data}</h1>)

     return(
        <div>{getName}</div>
     )

}
