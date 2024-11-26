/* eslint-disable react/prop-types */
import { Component } from "react";
import UpdatedComponent from "../HOC/Counter";

class ClickCounter extends Component{

    render(){
        const { count,increamentCount } = this.props;
        return(
            <button onClick={increamentCount}> Clicked {count} times</button>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default UpdatedComponent(ClickCounter);
