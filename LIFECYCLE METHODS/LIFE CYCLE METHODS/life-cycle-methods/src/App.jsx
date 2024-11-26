import React, { Component } from 'react'
import Mounting from './CLASS COMPONENTS/MountingPhase'
import UpdatePhase from './CLASS COMPONENTS/UpdatePhase'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Mounting one="one"/> */}
        <UpdatePhase one="one"/>
      </>
    )
  }
}
