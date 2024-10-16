import  { Component } from 'react'
export default class ElementVariables extends Component {
    constructor(){
        super()
        this.state = {
            isLogIn : true
        }
    }
  render() {
    let message 
        if(this.state.isLogIn){
            message = <h1>Welcome Amol</h1>
        }
        else{
            message = <h1>Welcome Guest</h1>
        }
        return message
  }
}
