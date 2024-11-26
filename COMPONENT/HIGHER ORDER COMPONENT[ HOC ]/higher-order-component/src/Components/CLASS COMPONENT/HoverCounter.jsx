/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Component } from 'react'
import UpdatedComponent from '../HOC/Counter';

export class HoverCounter extends Component {
    render() {
    const { count ,increamentCount } = this.props;
    return (
        <>
            <h1 onMouseOver={increamentCount}> Hovered {count} times</h1>
        </>
    )
  }
}

export default UpdatedComponent(HoverCounter);