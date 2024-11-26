import { Component } from "react";
import RegComponets from "./REGULAR COMPONENTS/RegularComponet";
import PureCompo from "./PURE COMPONETS/PureComponets";

class ParentCompo extends Component{
    constructor(){
        super();

        this.state = {
            name : "Amol"
        }
    }

    componentDidMount(){
      setInterval(() => {
        this.setState({
            name : "Amol"
        })
      },2000)  
    }
    render(){
        console.log("********** Parent Component Render ********")
        return(
            <>
                <h1>This is Parent Component</h1>
                <RegComponets name={this.state.name}/>
                <PureCompo name={this.state.name}/>
            </>
        )
    }
}
export default ParentCompo;

