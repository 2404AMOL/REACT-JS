import { Link } from "react-router-dom"

const Navigation = () =>{

    return(
        <>
            <Link to="/">Home</Link><br />
            <Link to="/Course">Course</Link>
        </>
    )
}

export default Navigation;