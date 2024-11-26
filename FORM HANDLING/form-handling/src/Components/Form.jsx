import { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            username : ''
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }
    render(){
        return(
            <>
                <form action="">
                    <h1>FORM COMPONENT</h1>
                    <label htmlFor="">UserName : </label>
                    <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleUsernameChange} />
                </form>
            </>
        )
    }
}
export default Form;