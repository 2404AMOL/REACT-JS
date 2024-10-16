import  { Component } from 'react'

export default class TernaryOperator extends Component {
    constructor(){
        super();
        this.state = {
            isLogIn : true
        }
    }
  render() {
    return this.state.isLogIn ? (<h1>Welcome Amol</h1>) : (<h1>Welcome Guest</h1>)
  }
}

