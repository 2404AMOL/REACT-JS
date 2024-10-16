/* eslint-disable react/prop-types */
import React from "react";

class StudentClass extends React.Component {
    //! It is mandatory to  pass the  props in the constructor(props) and  super(props);
    //* super(props) : It call the Parent class constructor and pass props to the Parent class constructor
    //? If you don't pass the props inside the constructor() and super() then it does not shows the result.

    constructor(props){
        super(props);
        console.log(this.props)
    }
    //! If you want to Access the props in the return() then we have to use this.props.name
    render(){
        return(
            <>
                <h1>My Name Is : {this.props.name}</h1>
                {console.log(this.props.name)}
            </>
        )
    }
 
}

export default StudentClass;