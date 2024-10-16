import React from 'react'

export default function ListRendering() {
    let employee = [{id:123,name:"Baburav",proff:"actor"},{id:124,name:"Mark",proff:"Doctor"},{id:125,name:"Zac",proff:"Manager"}]
    let mapEmp=employee.map(person =>{
        // eslint-disable-next-line react/jsx-key
        return <h1>MY NAME IS :- {person.name}, MY ID IS = {person.id}, MY PROFF IS :-{person.proff}</h1>
    })
    return (
    <div>ListRendering{mapEmp}</div>
  )
}
