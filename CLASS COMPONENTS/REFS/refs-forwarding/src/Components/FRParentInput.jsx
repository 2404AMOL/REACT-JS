
import React, { Component } from 'react'
import FrInput from './FrInput'

export default class FRParentInput extends Component {
    constructor(){
        super();
        this.inputRef = React.createRef()''
    }
    render() {
    return (
        <>
            <FrInput ref={this.inputRef} />
            <button>Focus Input</button>
        </>
    )
  }
}
