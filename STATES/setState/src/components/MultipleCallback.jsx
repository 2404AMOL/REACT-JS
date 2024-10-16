import { Component } from 'react'

export default class MultipleCallback extends Component {
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
