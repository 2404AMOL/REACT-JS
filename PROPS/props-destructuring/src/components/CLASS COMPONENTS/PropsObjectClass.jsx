import React, { Component } from 'react'

export default class PropsObjectClass extends Component {
  render() {
    return (
      <>
        <h1>Name : {this.props.obj.name}</h1>
        <h1>Age : {this.props.obj.age}</h1>
        <h1>Address : {this.props.obj.add}</h1>
      </>
    )
  }
}
