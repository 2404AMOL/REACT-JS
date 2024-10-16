/* eslint-disable react/prop-types */

let Object = (props) =>{
    return(
        <>
            <h1>My Name Is : {props.obj.name} || My Age Is : {props.obj.age} || Address Is : {props.obj.add}</h1>
        </>
    )
}

export default Object;