import { Component } from "react";


export default class StateDes2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr : this.props.arr
        }
    }

    changeData(){
        this.setState({
            arr : [10,20]
        })
    }

    render(){
        const [ele1,ele2] = this.state.arr //! Destructuring state
        return(
            <>
                <h1>Array Elements {ele1},{ele2}</h1>
                <button onClick={()=>this.changeData()}>CHANGE DATA</button>
            </>
        )
    }
}
