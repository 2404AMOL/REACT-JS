import { Component } from 'react'

export default class MultipleCallbackFunction extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    increament(){
        this.setState(prevState =>({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }

    increamentFive(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }
  render() {
    return (
        <>
          <h1>COUNT : {this.state.count}</h1>
          <button onClick={()=>this.increamentFive()}>ADD</button>
        </>
    )
  }
}
