/* eslint-disable react/prop-types */
import { Component } from "react";

class RegComponets extends Component{
    render(){
        console.log(" Regular Component Render ")
        return(
            <>
                <h1>This is a Regular Component {this.props.name}</h1>
            </>
        )
    }
}

export default RegComponets;