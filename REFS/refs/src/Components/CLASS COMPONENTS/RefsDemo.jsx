import React,{ Component } from "react";

class RefsDemo extends Component{
    constructor(){
        super();
        // eslint-disable-next-line no-undef
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus(); // Access the DOM node directly
    }
    ClickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.ClickHandler}>Click</button>
            </>
        )
    }
}

export default RefsDemo;