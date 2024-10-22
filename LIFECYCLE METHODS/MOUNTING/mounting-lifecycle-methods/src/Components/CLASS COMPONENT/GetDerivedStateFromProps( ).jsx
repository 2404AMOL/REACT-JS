/* eslint-disable react/prop-types */
import  { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteColor : "Black"
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            favoriteColor : props.favCol
        }
    }
  render() {
    return (
      <h1>My Favourite Color Is {this.state.favoriteColor}</h1>
    )
  }
}
