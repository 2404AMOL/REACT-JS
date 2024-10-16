import { Component } from "react";

export default class IfElse extends Component {
    constructor(){
        super();
        this.state = {
            isLogIn : false
        }
    }
  render() {
        if(this.setState.isLogdIn){
            return (
                <>
                    <h1>Welcome Amol</h1>
                </>
            )
        }
        else{
            return (
                <>
                    <h1>Welcome Guest</h1>
                </>
            )
        }
    }
}
