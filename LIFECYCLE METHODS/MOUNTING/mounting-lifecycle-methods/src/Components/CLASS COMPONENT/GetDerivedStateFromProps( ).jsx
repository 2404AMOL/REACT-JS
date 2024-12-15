/* eslint-disable react/prop-types */
import  { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
<<<<<<< HEAD
    constructor(){
        super();
=======
    constructor(props){
        super(props);
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
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
