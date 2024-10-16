import { Component } from "react";


class Count extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment(){
        this.setState({
            count : this.state.count +1,
           
        },()=>{console.log(this.state.count);})
    }
    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>Change Count</button>
            </>
        )
    }
}

export default Count;