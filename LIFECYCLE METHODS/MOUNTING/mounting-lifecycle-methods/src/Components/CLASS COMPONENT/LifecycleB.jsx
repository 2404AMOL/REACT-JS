import  { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "Amol"
        }
        console.log("Lifecycle B constructor()")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle B getDerivedStateFromProps()")
        return null
    }
    
    componentDidMount(){
        console.log("Lifecycle B componentDidMount()")
    }
  render() {
    console.log("Lifcycle B render()")
    return (
      <h1>Lifecycle B</h1>
    )
  }
}
