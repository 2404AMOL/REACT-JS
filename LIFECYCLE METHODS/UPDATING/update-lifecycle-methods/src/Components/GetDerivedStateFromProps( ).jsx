import { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
    constructor(){
        super();
        this.state = {
            favoriteColor : "Red"
        }
        this.changeColor = this.changeColor.bind(this);
    }
    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromProps(props, state) {
      console.log("getDerivedStateFromProps() Called")
        return {
            // eslint-disable-next-line react/prop-types
            favoriteColor : props.favCol
        }
    }

    changeColor(){
        console.log("changeColor() Called")
        this.setState({
            favoriteColor : "Black"
        })
    }
  render() {
    return (
        <>
            <h1>My Favourite Color Is : {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>Change Color</button>
        </>

    )
  }
}
