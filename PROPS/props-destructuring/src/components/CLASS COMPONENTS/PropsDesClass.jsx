import React, { Component } from 'react'

export default class PropsDesClass extends Component {
  render() {
    const {name ,age} = this.props
    return (
      <>
        <h1>My Name is : {name}</h1>
        <h2>My Age is : {age}</h2>
      </>
    )
  }
}
