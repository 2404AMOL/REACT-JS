import  { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
  //* Prevent re-rendering if the count has not changed
    shouldComponentUpdate(nextProps , nextState){
            //return true; //*Re-render if the count changes
          return false; //* Skip re-rendering if the count is the same
    }

    incrementCount = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    console.log('Component is re-rendering...');
    return (
        <>
            <h1>COUNT : {this.state.count}</h1>
            <button onClick={this.incrementCount}>CHANGE COUNT</button>
        </>
    )
  }
}
