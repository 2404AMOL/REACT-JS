import { Component } from "react";


class StateClassDemo extends Component{
    constructor(){
        super();
        this.state = {
            statement : "Hello World"
        }
    }
    render(){
        return(
            <>
                <h1>{this.state.statement}</h1>
            </>
        )
    }
}

export default StateClassDemo;