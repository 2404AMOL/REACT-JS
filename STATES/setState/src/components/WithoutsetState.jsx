/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'

export default class WithoutsetState extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increament(){
        this.state.count = this.state.count + 1;
        console.log(this.state.count)
    }
  render() {
    return (
      <>
        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.increament()}>ADD</button>
      </>
    )
  }
}
