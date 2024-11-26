import { Component } from "react";
import MemoCompo from "../FUNCTIONAL COMPONENTS/ChildComponent";

class ParentComponent extends Component{
    constructor(){
        super();

        this.state = {
            name : "Amol"
        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name : "Amol"
            })
        },2000)
    }

    render(){
        console.log("********* PARENT COMPOENNT RENDERS *********");
        return(
            <>
                <MemoCompo name={this.state.name}/>
            </>
        )
    }
}

export default ParentComponent;