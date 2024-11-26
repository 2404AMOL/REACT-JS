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

shouldComponentUpdate(){
    console.log('its me shouldComponentUpdate');
    return true
}

getSnapshotBeforeUpdate(prevPops, prevState){
    console.log('its me getSnapshotBeforeUpdate');
    console.log('prevState', prevState);
    return prevState;
}
componentDidUpdate(prevPops, prevState, snapshot){
    console.log('its me componentDidUpdate');
    console.log('snapshot', snapshot);
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
