/* eslint-disable react/prop-types */


export default function Task(props) {
  return (
    <h4 className='task'>{props.name}||{props.age}||{props.retiredate}</h4>
  )
}
