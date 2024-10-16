import {Component} from "react";
class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : "Welcome Visitors"
        }
        
    }
    changeMessage(){
        this.setState (
            {
                message : "Thank For You Subscribing"
            }
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>SUBSCRIBE</button>
            </div>
        )
    }
}
export default Message;