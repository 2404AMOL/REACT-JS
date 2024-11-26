/* eslint-disable react-refresh/only-export-components */
import Logic from "../HOC/Logic";

/* eslint-disable react/prop-types */
function Hover(props) {
    let {count,inc} = props;
  return (
    <>
        <button onMouseOver={inc}>Mouse Hover Me</button>
        <h2>Count Is : {count}</h2>
    </>
  )
}
export default Logic(Hover)