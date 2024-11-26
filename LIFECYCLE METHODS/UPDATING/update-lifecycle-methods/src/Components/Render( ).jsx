import  { Component } from 'react'

export default class Render extends Component {

    constructor(){
        super();
        this.state = {
            favoriteColor : "Black"
        }
    }

    changeColor = () =>{
        console.log("changeColor() Called")
        this.setState({
            favoriteColor : "Red"
        })
    }
  render() {
    return (
        <>
            <h1>My Favorite Color : {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>CHANGE COLOR</button>
        </>

    )
  }
}
