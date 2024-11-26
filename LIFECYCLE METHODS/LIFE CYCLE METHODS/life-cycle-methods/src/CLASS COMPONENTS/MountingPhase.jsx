/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'

export default class Mounting extends Component {

    constructor(props){
        console.log('its me constructor');
        super();
        this.state = {
            name: props.one
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('its me getDrivedStateFromProps');
        // console.log('state', state);
        // console.log('props', props);
        return null
        
    }

componentDidMount(){
    console.log('its me componentDidMount');
    this.setState({
        name:'mine'
    })

}

  render() {
    console.log('its me render');
    return (
        <>
         <div>My name is {this.state.name}</div>
        </>
     
     
    )
  }
}
