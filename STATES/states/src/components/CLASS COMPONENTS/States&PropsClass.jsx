/* eslint-disable react/prop-types */
import { Component } from "react";


class States$PropsClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            age : props.age
        }
    }

    changeData1(){
        this.setState({
            name : "Ganesh"
        })
    }

    changeData2(){
        this.setState({
            name : "Ashutosh"
        })
    }
    render(){
        return(
            <>
                <h1>My Name Is {this.state.name}</h1>
                <button onClick={()=>this.changeData1()}>CHANGE DATA 1</button>
                <button onClick={()=>this.changeData2()}>CHANGE DATA 2</button>
            </>
        )
    }
}

export default States$PropsClass;