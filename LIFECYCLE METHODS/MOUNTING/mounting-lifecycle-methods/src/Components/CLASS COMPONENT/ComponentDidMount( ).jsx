import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super();
        this.state = {
            color : "Yellow"
        }
    }

    componentDidMount(){
       setTimeout(()=>{
        this.setState({
            color : "Red"
        })
       },2000)
    }
  render() {
    return (
      <h1>My Favourite Color Is : {this.state.color}</h1>
    )
  }
}
