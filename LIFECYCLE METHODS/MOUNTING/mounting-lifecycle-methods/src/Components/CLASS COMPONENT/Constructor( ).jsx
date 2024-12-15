import React, { Component } from 'react'

export default class Constructor extends Component {

    constructor(props){
<<<<<<< HEAD
        console.log("This is a constructor() Method called");
        
=======
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
        super(props);
        this.state={
            count : props.count
        }
        this.changeCount = this.changeCount.bind(this);
    }
    changeCount(){
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    return (
        <>
              <h1>COUNT : {this.state.count}</h1>
              <button onClick={this.changeCount}>CHANGE COUNT</button>
        </>
    )
  }
}
