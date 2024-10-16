/* eslint-disable react/prop-types */

import  { Component } from 'react'

export default class Greet extends Component {
  render() {
    return (
      <h1>{this.props.val}</h1>
    )
  }
}
