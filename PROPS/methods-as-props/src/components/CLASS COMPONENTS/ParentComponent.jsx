import { Component } from 'react'
import Child1 from '../FUNCTIONAL COMPONENTS/Child1';

export default class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello, ${this.state.parentName}`);
    }
  render() {
    return (
      <Child1 greetHandler={this.greetParent}/>
    )
  }
}
