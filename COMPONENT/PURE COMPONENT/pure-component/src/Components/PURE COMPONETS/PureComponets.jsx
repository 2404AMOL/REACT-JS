/* eslint-disable react/prop-types */
import { PureComponent } from "react";

class PureCompo extends PureComponent{
    render(){
        console.log(" Pure Component Render ")
        return(
            <>
                <h1>This is a Pure Components {this.props.name}</h1>
            </>
        )
    }
}

export default PureCompo;