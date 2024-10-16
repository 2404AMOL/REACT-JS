import React, { Component } from 'react'

export default class LogicalAND extends Component {
  constructor(){
    super();
    this.state = {
      isLogIn : true
    }
  }
  render() {
    return this.state.isLogIn && (<h1>Welcome Amol</h1>)
  }
}
