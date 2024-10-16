import React from 'react'

export default function List1() {
    let employees =[{name:"Vijay",id:123,proff:"Electrical Engg"},{name:"Jay",id:124,proff:"Civil Engg"},{name:"Sanjay",id:125,proff:"CSE Engg"}]
    let empMap = employees.map(data =>{
        // eslint-disable-next-line react/jsx-key
        return <h1>Key {data.id} || Name :- {data.name}</h1>
    })

  return (
    <div>List{empMap}</div>
  )
}
