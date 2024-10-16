/* eslint-disable react/prop-types */
function Student (props){
    console.log(props)
    return(
       <>
            <h1>Hello  {props.name} </h1>
            <h2>Hello {props.email}</h2>
       </>

    )

}
export default Student;