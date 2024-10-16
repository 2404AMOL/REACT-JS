import { Component } from "react"

export default class ClassEventArrow extends Component{
    constructor(){
        super();
    }

    clickHandler(){
        alert(`Button Clicked`)
    }
    render(){
        return(
            <>
                <div>
                    <button onClick={()=>this.clickHandler}>CLICK</button>
                </div>
            </>
        )
    }
}