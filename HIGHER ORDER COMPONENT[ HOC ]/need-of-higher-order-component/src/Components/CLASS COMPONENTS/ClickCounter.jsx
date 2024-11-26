import { Component } from "react";
class ClickCounter extends Component{
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    increamentCounter = () =>{
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        })
    }
    render(){
        const {count} = this.state
        return(
            <>
                <button onClick={this.increamentCounter}>Clicked {count} times</button>
            </>
        )
    }
}

export default ClickCounter;