/* eslint-disable react/prop-types */
import Logic from "../HOC/Logic";
import Value from "./Value";

// eslint-disable-next-line react-refresh/only-export-components
function Click(props) {
    let {count,inc,three} = props;
  return (
    <>
        <button onClick={inc}>Click Me</button>
        <h2>Count Is : {count}</h2>
        <h1>{three}</h1>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Value(Logic(Click,20));