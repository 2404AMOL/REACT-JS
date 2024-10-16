import { Component } from 'react'

export default class StateDes1 extends Component {
  constructor({name,age}){
    super();
    this.state = {
        name : name,
        age : age
    }
  }
  changeData(){
    this.setState({
        name: 'John Doe', 
        age: 30
    })

  }
    render() {
        const {name ,age} = this.state;//! Destructuring state
    return (
      <>
        <h1>My Name is {name} || My Age is {age}</h1>
        <button onClick={()=>this.changeData()}>CHANGE DATA</button>
      </>
    )
  }
}
