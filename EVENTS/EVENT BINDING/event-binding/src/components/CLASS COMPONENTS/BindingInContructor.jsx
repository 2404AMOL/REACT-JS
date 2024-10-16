import { Component } from 'react'

export default class BindingInContructor extends Component {
    constructor(){
        
        super();
        this.state = {
            message : "Hello"
        } 
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler (){
        this.setState({
            message : "Welcome"
        })
        console.log(this)
    }
  render() {
    return (
        <>
            <h1>{this.state.message}</h1>
            <button onClick={this.clickHandler}>CLICK</button>
        </>
    )
  }
}
