import { Component } from "react";

class HoverCounter extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increamentCounter = () =>{
        this.setState((prevState) =>{
            return{
                count : prevState.count+1
            }
        })
    }
    render(){
        const {count } = this.state;
        return(
            <>
                <h1 onMouseOver={this.increamentCounter}>Hovered {count} times</h1>
            </>
        )
    }
}

export default HoverCounter;