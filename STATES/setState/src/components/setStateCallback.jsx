import { Component } from 'react'

export default class SetStateCallback extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    increament(){
        this.setState({
            count : this.state.count + 1
        },()=>{
            console.log(this.state.count)
        })
    }
  render() {
    return (
        <>
          <h1>COUNT : {this.state.count}</h1>
          <button onClick={()=>this.increament()}>ADD</button>
        </>
    )
  }
}
