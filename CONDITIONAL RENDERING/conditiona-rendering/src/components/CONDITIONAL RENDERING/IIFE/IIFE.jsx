import { Component } from 'react'

export default class IIFE extends Component {
    constructor(){
        super();
        this.state = {
            isLogIn : false
        }
    }

    
  render() {
    let { isLoggedIn } = this.state;
    return(
        (function(){
            if(isLoggedIn){
                return <h1>Welcome User</h1>
            }else {
                return <h1>Please Log In</h1>
            }
        }())
    )
  }
}
