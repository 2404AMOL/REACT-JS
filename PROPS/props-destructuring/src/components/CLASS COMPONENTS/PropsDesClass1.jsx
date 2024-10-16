import React, { Component } from 'react'

export default class PropsDesClass1 extends Component {
  render() {
    return (
        <>
            <h1>My Name is {this.props.name}</h1>
        </>
    )
  }
}
