import  { Component } from 'react'
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "Amol"
        }
        console.log("Lifecycle A constructor()")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle A getDerivedStateFromProps()")
        return null
    }
    
    componentDidMount(){
        console.log("Lifecycle A componentDidMount()")
    }
  render() {
    console.log("Lifcycle A render()")
    return (
      <>
        <h1>Lifecycle A</h1>
        <LifecycleB/>
      </>
    )
  }
}
